// Check DeviceType Guard

import KeyboardDevice from "../interfaces/KeyboardDevice";


const isKeyboardDevice = (insertedDevice:KeyboardDevice) : boolean => {
  let isItKeyboard = false;
  if (insertedDevice.tag === "Keyboard") {
    isItKeyboard = true; 
  }
  return isItKeyboard;
};

const isStorageDevice = ()=>{
  //check if a normal storage

  //check if an external storage

  
};

const isAudioDevice = ()=>{
  
};

export default {isKeyboardDevice, isStorageDevice, isAudioDevice};