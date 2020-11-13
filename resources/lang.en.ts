// YOU CAN USE A PLACEHOLDER FOR INTERPOLATION. FOR EXAMPLE, 'Hello, My name is {name}.'
// THE TYPES OF PLACEHOLDER ARE LIMITED BY STRING SET.

export const commontexts = {
    advertise: '📢 haxball-hotsmall-challenge\n💬 [Discord] https://discord.gg/qfg45B2 [Donate] https://www.patreon.com/dapucita'
    ,shutdown: '📢 The room will close soon. Thank you for using it.'
}

export const command = {
    _ErrorWrongCommand : '❌ Invalid command. 📑 !help or !help COMMAND for more detail information'
    ,help: '📄 !about, stats, streak, rank\n📑 !help COMMAND for more detail information (eg: !help stats)'
    ,helpman: { // detailed description for a command
        _ErrorWrongMan : '❌ There is no explanation for the command you requested.'
        ,about: '📑 !about : shows you the information of the bot.'
        ,help: '📑 !help COMMAND : more detail information for COMMAND command.'
        ,stats: '📑 !stats : shows you player\'s record.\n📑 !stats #ID : shows you numeric ID player\'s record. (eg: !stats #12)'
        ,streak: '📑 !streak : shows you the current winning streak.'
        ,rank: '📑 !rank :  shows you top rank players\' record.'
    }
    ,about: '📄 This room is powered by a Haxbotron🤖 bot. This room is launched at {_LaunchTime}.\n💬 [Discord] https://discord.gg/qfg45B2 [Donate] https://www.patreon.com/dapucita'
    ,stats: {
        _ErrorNoPlayer: '❌ That player is not online. ID must be numeric. (eg: !stats #12)'
        ,statsMsg: '📊 {targetName}#{targetID}\'s record : Total {targetStatsTotal}games(Winrate{targetStatsWinRate}%), {targetStatsGoals}Goals, {targetStatsOgs}OGs, {targetStatsLosepoints}Losses\n📊 => {targetStatsGoalsPerGame}goals, {targetStatsOgsPerGame}ogs, {targetStatsLostGoalsPerGame}losses per game\n📊 => won {targetStatsStreaks} straight games, and best record is {targetStatsBestrecord}games.'
    }
    ,streak: '📊 This is {streakCount} consecutive win in this room.'
    ,rank: '❌ This command is not yet availabe.'
}

export const onPlayerJoin = {
    welcome: '📢 Welcome {targetName}#{targetID}! 📄 You can get some information by !help.'
    ,changename: '📢 {targetName}#{targetID} changed nickname from {targetNameOld}.'
    ,resetWinStreak: '📢 The previous winning streak will not continue.'
    ,startRecord: '📊 There are enough people in the room. Your records will be recorded from now on.'
    ,stopRecord: '📊 The minimum number of players is insufficient to record.'
    ,doubleJoinningMsg: '🚫 {targetName}#{targetID} has a duplicate connection.'
    ,doubleJoinningKick: '🚫 double join'
}

export const onPlayerLeave = {
    startRecord: '📊 There are enough people in the room. Your records will be recorded from now on.'
    ,stopRecord: '📊 The minimum number of players is insufficient to record.'
    ,giveupGame: '📢 {targetName}#{targetID} abstains and the remaining person wins instead.'
}

export const onGameTick = {
    kickAfkPlayer: '🚫 away from keyboard'
    ,warningAfkPlayer: '📢 If you don\'t kick the ball, you can be kicked for AFK!'
}

export const onGamePause = {
    readyForStart: '📢 The game will start soon. Be prepared!'
}

export const onGameStart = {
    startGame: '📢 Challenge Start! {redTargetName} vs {blueTargetName} !!\n📢 If you don\'t kick the ball, you can be kicked for AFK!'
}

export const onTeamGoal = {
    goal: '⚽️ {targetName}#{targetID} scored!'
    ,og: '⚽️ {targetName}#{targetID} made an OG...'
}

export const onTeamVictory = {
    victory: '🎉 Game End. Scored {redScore}:{blueScore} !! ⚽️'
    ,burning: '🔥 {targetName}#{targetID} has won {streakWinCount} games straight !!'
}