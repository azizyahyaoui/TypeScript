import KeyboardLayout from "./Enums/KeyboardLayout";
import DeviceInter from "./interfaces/DeviceInter";

const devices: DeviceInter[] = [
  {
    id: "kbd-001",
    deviceType: "keyboard",
    brand: "RedDragon",
    layout: KeyboardLayout.AZERTY,
    connect() {
      console.log("Keyboard connected.");
    },
  },
  {
    id: "usb-007",
    deviceType: "storage",
    connect() {
      console.log("Storage device mounted.");
    },
    capacity: 128,
  },
  {
    id: "aud-004",
    deviceType: "audio",
    connect() {
      console.log("Audio device ready.");
    },
    bitrate: 320,
  },
];