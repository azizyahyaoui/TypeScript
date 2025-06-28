// Interface exercise

import { toStringComputer } from "./helper";
import { ComputerInter } from "./inter/ComputerInter";

const Dell: ComputerInter = {
  id: 1,
  brand: "Dell",
  ram: 8,
  upgradeRam(newRam: number): number {
    this.ram = newRam;
    return this.ram;
  }
};

const HP: ComputerInter = {
  id: 2,
  brand: "HP",
  ram: 16,
  storage: 512,
  upgradeRam(newRam: number): number {
    this.ram = newRam;
    return this.ram;
  }
};

const Lenovo: ComputerInter = {
  id: 3,
  brand: "Lenovo",
  ram: 32,
  storage: 1024,
  upgradeRam(newRam: number): number {
    this.ram = newRam;
    return this.ram;
  }
};

console.log(Dell.upgradeRam(32))
console.log(toStringComputer(Dell));