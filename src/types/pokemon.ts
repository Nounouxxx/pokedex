export interface Pokemon {
  id: number;
  height: number;
  weight: number;
  image: string;
  types: string[];
  moves: string[];
  names: Record<string, string>;
}