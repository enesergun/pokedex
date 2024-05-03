export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  past_types: PokemonTypePast[];
  sprites: PokemonSprites;
  cries: PokemonCries;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];
}
export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}
export interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource;
}
export interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
}
export interface PokemonHeldItemVersion {
  version: NamedAPIResource;
  rarity: number;
}
export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
}
export interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
}
export interface PokemonTypePast {
  generation: NamedAPIResource;
  types: PokemonType;
}
export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}
export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}
export interface PokemonCries {
  latest: string;
  legacy: string;
}
export interface PokemonStat {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
}
export interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: NamedAPIResource;
  names: Name[];
  effect_entries: VerboseEffect[];
  effect_changes: AbilityEffectChange[];
  flavor_text_entries: AbilityFlavorText[];
  pokemon: AbilityPokemon[];
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface Name {
  name: string;
  language: NamedAPIResource;
}

export interface VerboseEffect {
  effect: string;
  short_effect: string;
  language: NamedAPIResource;
}

export interface AbilityEffectChange {
  effect_entries: Effect[];
  version_group: NamedAPIResource;
}

export interface Effect {
  effect: string;
  language: NamedAPIResource;
}

export interface AbilityFlavorText {
  flavor_text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface AbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: NamedAPIResource;
}
export enum PokemonTypes {
  NORMAL = "normal",
  FIRE = "fire",
  WATER = "water",
  ELECTRIC = "electric",
  GRASS = "grass",
  ICE = "ice",
  FIGHTING = "fighting",
  POISON = "poison",
  GROUND = "ground",
  FLYING = "flying",
  PSYCHIC = "psychic",
  BUG = "bug",
  ROCK = "rock",
  GHOST = "ghost",
  DRAGON = "dragon",
  DARK = "dark",
  STEEL = "steel",
  FAIRY = "fairy",
}
export type PokeListPropTypes = {
  data: PokemonListElementTypes[];
};
export type PokemonListElementTypes = {
  name: string;
  url: string;
};
