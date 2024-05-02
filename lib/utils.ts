import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Pokemon, PokemonAbility } from "./definitions";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function combineData(data: any, obj1: string, obj2: string) {
  const arr = [];
  for (const obj of data) {
    arr.push(obj[obj1][obj2]);
  }
  const combinedElements = arr.join(", ");
  return combinedElements;
}
export function decimeterToCentimeter(decimeterValue: Pokemon["height"]) {
  return decimeterValue * 10;
}
export function hectogramsToKilograms(hectograms: Pokemon["weight"]) {
  return (hectograms * 0.1).toFixed(2);
}
export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
