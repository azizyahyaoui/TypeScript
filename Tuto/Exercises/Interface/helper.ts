import { ComputerInter } from "./inter/ComputerInter";

export function toStringComputer(computer: ComputerInter): string {
  const { id, brand, ram, storage } = computer;
  return `Computer - ID: ${id}, Brand: ${brand}, RAM: ${ram}GB${storage !== undefined ? `, Storage: ${storage}GB` : ""}`;
}
