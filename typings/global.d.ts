import { RoomConfig } from '../models/RoomConfig';
declare global {
    interface Window {
        // haxball
        HBInit(config: RoomConfig): any
        onHBLoaded(): void
    }
}