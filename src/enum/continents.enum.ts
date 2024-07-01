import { registerEnumType } from "type-graphql";

export enum Continents {
  Europe = "Europe",
  Asie = "Asie",
  Afrique = "Afrique",
  Oceanie = "Oceanie",
  Amerique = "Amerique",
}

registerEnumType(Continents, {
  name: "Continents",
  description: "Continents enum",
});
