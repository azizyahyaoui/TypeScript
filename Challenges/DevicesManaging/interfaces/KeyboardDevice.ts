import KeyboardLayout from "../Enums/KeyboardLayout";
import DeviceInter from "./DeviceInter";

interface KeyboardDevice extends DeviceInter{
  tag : "Keyboard"
  layout: KeyboardLayout; // Here I utilized enums
  light():void;
}

export default KeyboardDevice;