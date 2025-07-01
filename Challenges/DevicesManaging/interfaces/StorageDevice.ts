import DeviceInter from "./DeviceInter";

interface StorageDevice extends DeviceInter{
  capacityInGB: number;
  StorageType: 'HDD' | 'SSD' | 'NVMe' | 'USB'; // Here I union type
  readSpeed: number;
  writeSpeed: number;
}

export default StorageDevice;