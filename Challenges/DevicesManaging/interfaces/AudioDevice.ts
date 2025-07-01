import DeviceInter from "./DeviceInter";

interface AudioDevice extends DeviceInter {
  volume: number;
  mute(): void;
  unmute(): void;
}

export default AudioDevice;