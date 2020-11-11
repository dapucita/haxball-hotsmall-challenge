// YOU CAN USE A PLACEHOLDER FOR INTERPOLATION. FOR EXAMPLE, 'Hello, My name is {name}.'
// THE TYPES OF PLACEHOLDER ARE LIMITED BY STRING SET.

export const commontexts = {
    advertise: '📢 haxball-hotsmall-challenge\n💬 [디스코드] https://discord.gg/qfg45B2 [후원하기] https://www.patreon.com/dapucita'
    ,shutdown: '📢 방이 곧 닫힙니다. 이용해주셔서 감사합니다.'
}

export const command = {
    _ErrorWrongCommand : '❌ 잘못된 명령어입니다. 📑 !help 또는 !help COMMAND로 자세히 알아보세요.'
    ,help: '📄 !about, stats, streak, rank\n📑 !help COMMAND로 자세히 보기 (예: !help stats)'
    ,helpman: { // detailed description for a command
        _ErrorWrongMan : '❌ 요청하신 명령어에 대한 설명이 없습니다.'
        ,about: '📑 !about : 봇의 정보를 보여줍니다.'
        ,help: '📑 !help COMMAND : COMMAND 명령어의 자세한 설명을 보여줍니다.'
        ,stats: '📑 !stats : 전적을 보여줍니다.\n📑 !stats #ID : 해당 ID의 플레이어 전적을 봅니다. ID는 숫자이어야 합니다. (예: !stats #12)'
        ,streak: '📑 !streak : 현재 진행중인 연승 기록을 보여줍니다.'
        ,rank: '📑 !rank :  상위 플레이어의 전적을 보여줍니다.'
    }
    ,about: '📄 이 방은 Haxbotron🤖 봇에 의해 운영됩니다. 봇 시작 {_LaunchTime}.\n💬 [디스코드 채팅] https://discord.gg/qfg45B2'
    ,stats: {
        _ErrorNoPlayer: '❌ 접속중이지 않습니다. #숫자아이디 의 형식이어야 합니다. (예: !stats #12)'
        ,statsMsg: '📊 {targetName}#{targetID}님의 전적 : 총 {targetStatsTotal}판(승률 {targetStatsWinRate}%), 골 {targetStatsGoals}, 자책 {targetStatsOgs}, 실점 {targetStatsLosepoints}\n📊 (이어서) 경기당 {targetStatsGoalsPerGame}골, {targetStatsOgsPerGame}자책, {targetStatsLostGoalsPerGame}실점\n📊 (이어서) {targetStatsStreaks}연승을 기록했으며 최고기록은 {targetStatsBestrecord}연승입니다.'
    }
    ,streak: '📊 현재 {streakCount}판째 연승이 이어지고 있습니다!'
    ,rank: '❌ 준비중인 명령어입니다.'
}

export const onPlayerJoin = {
    welcome: '📢 {targetName}#{targetID}님 반갑습니다! 📄 !help로 도움말을 볼 수 있습니다.'
    ,changename: '📢 {targetName}#{targetID}님의 예전 닉네임은 {targetNameOld} 입니다.'
    ,resetWinStreak: '📢 이전 연승 기록은 이어지지 않습니다.'
    ,startRecord: '📊 충분한 인원이 모였습니다. 지금부터 전적이 기록됩니다.'
    ,stopRecord: '📊 최소 인원이 부족하여 전적이 기록되지 않습니다.'
    ,doubleJoinningMsg: '🚫 {targetName}#{targetID}님이 중복 접속하였습니다.'
    ,doubleJoinningKick: '🚫 중복 접속으로 퇴장'
}

export const onPlayerLeave = {
    startRecord: '📊 충분한 인원이 모였습니다. 지금부터 전적이 기록됩니다.'
    ,stopRecord: '📊 최소 인원이 부족하여 전적이 기록되지 않습니다.'
    ,giveupGame: '📢 {targetName}#{targetID}님이 기권하여 대신 남은 사람이 승리합니다.'
}

export const onGameTick = {
    kickAfkPlayer: '🚫 잠수'
    ,warningAfkPlayer: '📢 공을 차지 않으면 잠수로 퇴장될 수 있습니다 !'
}

export const onGamePause = {
    readyForStart: '📢 잠시 후 게임이 시작됩니다. 준비하세요!'
}

export const onGameStart = {
    startGame: '📢 도전 시작! {redTargetName}님 대 {blueTargetName}님의 경기입니다 !!\n📢 공을 차지 않으면 잠수로 퇴장될 수 있습니다 !'
}

export const onTeamGoal = {
    goal: '⚽️ {targetName}#{targetID}님의 득점 !!'
    ,og: '⚽️ {targetName}#{targetID}님이 자책골을 넣었습니다...'
}

export const onTeamVictory = {
    victory: '🎉 경기 종료! 스코어 {redScore}:{blueScore} !! ⚽️'
    ,burning: '🔥 {targetName}#{targetID}님이 {streakWinCount}연승중입니다 !!'
}