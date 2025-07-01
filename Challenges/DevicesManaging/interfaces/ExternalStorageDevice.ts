import StorageDevice from "./StorageDevice";


interface ExternalStorageDevice extends StorageDevice{
  portType: string;
  isHotSwappable: boolean;
}

export default ExternalStorageDevice;