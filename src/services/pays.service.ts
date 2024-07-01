import datasource from "../lib/datasource";
import { Repository } from "typeorm";

import PaysEntity, {
  PaysCreateEntity,
  PaysUpdateEntity,
} from "../entities/pays.entity";
import { Continents } from "../enum/continents.enum";

class PaysService {
  db: Repository<PaysEntity>;

  constructor() {
    this.db = datasource.getRepository(PaysEntity);
  }

  async getPaysByCode(code: string) {
    const pays: PaysEntity | null = await this.db.findOne({
      where: { code: code },
    });

    if (!pays) {
      throw new Error("Ce code ne correspond à aucun pays");
    }

    return pays;
  }

  async getAllPays() {
    const listPays: PaysEntity[] = await this.db.find();

    if (!listPays) {
      throw new Error("Pas de pays");
    }

    return listPays;
  }

  async getAllPaysByContinent(continent: Continents) {
    const listPays: PaysEntity[] = await this.db.find({
      where: { continent: continent },
    });

    if (!listPays) {
      throw new Error("Pas de pays");
    }

    return listPays;
  }

  // ---
  async createPays(data: PaysCreateEntity) {
    const newPays = this.db.create(data);
    await this.db.save(newPays);

    return newPays;
  }

  async modifyPays(code: string, data: PaysUpdateEntity) {
    const pays = await this.getPaysByCode(code);

    // Mettre à jour les champs et si null, ne rien faire
    for (const key of Object.keys(data) as Array<keyof PaysUpdateEntity>) {
      if (data[key] !== null) {
        (pays as any)[key] = data[key];
      }
    }

    return await this.db.save(pays);
  }

  async deletePays(code: string) {
    const pays = await this.getPaysByCode(code);
    return await this.db.remove(pays);
  }
}

export default PaysService;
