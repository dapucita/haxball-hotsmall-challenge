// haxball-hotsmall-chllenge by dapucita
// This is the load part of the bot

//import modules
import { LogMessage } from "./models/LogMessage";
import { winstonLogger } from "./winstonLoggerSystem";
import { tweaks_geoLocationOverride, tweaks_headlessMode, tweaks_WebRTCAnoym } from "./tweaks";
import { RoomConfig } from "./models/RoomConfig";

// BOT Loader
const inquirer = require("inquirer")
const puppeteer = require('puppeteer');
const nodeStorage = require('node-persist');

var hostRoomConfig: RoomConfig; //room settings and information
const isOpenHeadless: boolean = tweaks_headlessMode; // option for open chromium in headless mode

var isBotLaunched: boolean = false; // flag for check whether the bot is running
var puppeteerContainer: any; // puppeteer page object

var puppeteerCustomArgs: string[] = ['--no-sandbox', '--disable-setuid-sandbox'];
if (tweaks_WebRTCAnoym === false) { // tweaks_WebRTCAnoym : Local IP WebRTC Anonymization for the bot. MORE INFO : tweaks.ts
    puppeteerCustomArgs.push('--disable-features=WebRtcHideLocalIpsWithMdns');
}

// 여기에 hostRoomConfig에 데이터를 적용하는 코드를 작성
hostRoomConfig = { //default init
    roomName: "haxball-hotsmall-challange test room",
    playerName: "🤖",
    password: "",
    maxPlayers: 8,
    public: true,
    token: "", //token key from runtime arguments
    noPlayer: true
}

if (tweaks_geoLocationOverride.patch === true) { // tweaks_geoLocationOverride : GeoLocation overriding for the room. MORE INFO : tweaks.ts
    hostRoomConfig.geo = {
        code: tweaks_geoLocationOverride.code
        , lat: tweaks_geoLocationOverride.lat
        , lon: tweaks_geoLocationOverride.lon
    }
}

//bot open
nodeStorageInit(); // init nodeStorage

puppeteerContainer = makeBot(hostRoomConfig);
isBotLaunched = true;

// In this file you can include the rest of your app's specific main process code.
// You can also put them in separate files and require them here.
async function nodeStorageInit() {
    await nodeStorage.init();
}

async function makeBot(hostConfig: any) {
    winstonLogger.info("[LOADER] haxball-hotsmall-challenge starts now !!!");
    // input user custom config for room
    await inquirer
        .prompt([
            {
                name: "inputRoomName",
                type: "input",
                message: "Set your room Title",
            },
            {
                name: "inputRoomPassword",
                type: "input",
                message: "Set your room Password (if no password, just ENTER)",
            },
            {
                name: "inputRoomMaxPlayers",
                type: "number",
                message: "How many Max Players?",
            },
            {
                name: "inputRoomPublic",
                type: "confirm",
                message: "Is room Public?",
            },
            {
                name: "inputRoomTokenKey",
                type: "input",
                message: "Set your Token Key",
            }
        ])
        .then((answerConfig: any) => {
            hostConfig.roomName = answerConfig.inputRoomName;
            if (answerConfig.inputRoomPassword == "") {
                hostConfig.password = null;
            } else {
                hostConfig.password = answerConfig.inputRoomPassword;
            }
            hostConfig.maxPlayers = answerConfig.inputRoomMaxPlayers;
            hostConfig.public = answerConfig.inputRoomPublic;
            hostConfig.token = answerConfig.inputRoomTokenKey;
        });

    winstonLogger.info("[LOADER] The headless host has started.");
    //await nodeStorage.init();

    /*
    If you are hosting on a VPS using Chrome version 78 or greater it is required to disable the Local IP WebRTC Anonymization feature for the host to work.
    Run chrome with the command flag --disable-features=WebRtcHideLocalIpsWithMdns to disable the feature.
    */

    const browser = await puppeteer.launch({
        headless: isOpenHeadless,
        args: puppeteerCustomArgs
    });

    await browser.on('disconnected', () => {
        clearInterval(storageLoop);
        // browser.close();
        isBotLaunched = false;
        winstonLogger.info("[LOADER] The headless host is closed.");
        return;
    });

    const loadedPages = await browser.pages(); // get all pages (acutally it will be only one page in the first loading of puppeteer)
    const page = await loadedPages[0]; // target on empty, blank page

    await page.goto('https://www.haxball.com/headless', {
        waitUntil: 'networkidle2'
    });
    await page.setCookie({
        name: 'botConfig',
        value: JSON.stringify(hostConfig)
    }); // convey room host configuration via cookie

    /* 
    https://stackoverflow.com/questions/51907677
    The console event receives a ConsoleMessage object,
    which tells you what type of call it was (log, error, etc.),
    what the arguments were (args()), etc.
    */

    /*
    await page.on('console', (msg: any) => {
        for (let i = 0; i < msg.args().length; ++i) {
            console.log(`[BOT]${i}: ${msg.args()[i]}`);
        }
    });
    */

    await page.addScriptTag({
        path: './out/bot_bundle.js'
    });

    // load stored data from node-persist storage to puppeteer html5 localstorage
    await nodeStorage.forEach(async function (datum: any) { // async forEach(callback): This function iterates over each key/value pair and executes an asynchronous callback as well
        // usage: datum.key, datum.value
        if (datum.key != "_LaunchTime") { // except _LaunchTime
            await page.evaluate((tempKey: string, tempStr: string) => {
                localStorage.setItem(tempKey, tempStr);
            }, datum.key, datum.value);
        }
    });

    // get stored data from puppeteer html5 localstorage and copy them into node-persist storage
    var storageLoop = setInterval(async function () {
        // log system with winston module. winstonLoggerSystem
        var msgQueue: LogMessage[] = await page.evaluate(() => {
            var msgQueueCopy = window.logQueue;
            window.logQueue = [];
            return msgQueueCopy;
        }); // get and pop
        for (var loopCount = 0; loopCount < msgQueue.length; loopCount++) { //and log it!
            var msgQueueChunk: LogMessage | undefined = msgQueue.pop();
            switch (msgQueueChunk?.type) {
                case 0:
                    { 
                        winstonLogger.error(msgQueueChunk.context);
                        break; 
                    }
                case 1:
                    { 
                        winstonLogger.warn(msgQueueChunk.context);
                        break; 
                    }
                case 2:
                    {
                        winstonLogger.info(msgQueueChunk.context);
                        break;
                    }
                default: {
                    break;
                }
            }
        }

        // data from bot
        var localStorageData: any[] = await page.evaluate(() => {
            let jsonData: any = {};
            for (let i = 0; i < localStorage.length; i++) {
                const key: string | null = localStorage.key(i);
                if (typeof key === "string") {
                    jsonData[key] = localStorage.getItem(key);
                }
            }
            return jsonData;
        });

        // save data
        Object.keys(localStorageData).forEach(function (elementKey: any) {
            nodeStorage.setItem(elementKey, localStorageData[elementKey]);
        });
    }, 5000); // by each 5seconds

    return page;
}