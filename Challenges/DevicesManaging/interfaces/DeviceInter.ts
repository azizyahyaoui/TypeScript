// Device Interface

interface DeviceInter{
  readonly id : string;
  deviceType: string;
  brand: string;
  connect(): void;
};


export default DeviceInter;