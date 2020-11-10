import { KickStack } from "../../models/BallKickTrace";
import { PlayerObject } from "../../models/PlayerObject";

export function onPlayerBallKickListener(player: PlayerObject, ballKickStack: KickStack): void {
    ballKickStack.push(player.id); //record who kicked the ball

    switch(window.afkDetector.teamPicker) {
        case 1: { // turn for red kicks the ball
            window.afkDetector.redActivity = true;
            break;
        }
        case 2: { // turn for blue kicks the ball
            window.afkDetector.blueActivity = true;
            break;
        }
    }
}