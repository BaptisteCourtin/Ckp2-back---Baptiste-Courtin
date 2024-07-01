import { faker } from "@faker-js/faker/locale/fr";
import { DataSource } from "typeorm";

import PaysEntity from "../entities/pays.entity";
import { Continents } from "../enum/continents.enum";

export async function CreatePays(dataSource: DataSource, numPays: number) {
  const paysRepository = dataSource.getRepository(PaysEntity);
  const continents = Object.values(Continents);

  // ---------------------------------------------------------------------------------

  const paysTab = [];
  for (let i = 0; i < numPays; i++) {
    const randomContinent =
      continents[Math.floor(Math.random() * continents.length)];

    // création pays
    const pays = new PaysEntity();
    pays.code = faker.location.countryCode();
    pays.nom = faker.location.country();
    pays.emoji = faker.internet.emoji({ types: ["flag"] });
    pays.continent = randomContinent;

    // ---------------------------------------------------------------------------------

    paysTab.push(pays);
  }

  return await paysRepository.save(paysTab);
}
