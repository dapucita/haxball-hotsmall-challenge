// YOU CAN USE A PLACEHOLDER FOR INTERPOLATION. FOR EXAMPLE, 'Hello, My name is {name}.'
// THE TYPES OF PLACEHOLDER ARE LIMITED BY STRING SET.

export const commontexts = {
    advertise: '📢 haxball-hotsmall-challenge\n💬 [디스코드 채팅] https://discord.gg/qfg45B2'
    ,shutdown: '📢 방이 곧 닫힙니다. 이용해주셔서 감사합니다.'
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
    startGame: '📢 도전 시작! {redTargetName}님 대 {blueTargetName}님의 경기입니다 !!'
}

export const onTeamGoal = {
    goal: '⚽️ {targetName}#{targetID}님의 득점 !!'
    ,og: '⚽️ {targetName}#{targetID}님이 자책골을 넣었습니다...'
}

export const onTeamVictory = {
    victory: '🎉 경기 종료! 스코어 {redScore}:{blueScore} !! ⚽️'
    ,burning: '🔥 {targetName}#{targetID}님이 {streakWinCount}연승중입니다 !!'
}