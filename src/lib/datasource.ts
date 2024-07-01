import { DataSource } from "typeorm";
// import les entities
import PaysEntity from "../entities/pays.entity";

// -----------
// SANS DOCKER
// -----------

export default new DataSource({
  type: "sqlite",
  database: "ckp2.sqlite",
  entities: [PaysEntity],
  synchronize: true,
  logging: ["error", "query"],
});
