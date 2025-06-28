export interface ComputerInter {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam:(newRam: number) => number;
}