import "reflect-metadata";
import dataSource from "../lib/datasource";
import { CreatePays } from "./pays.fixtures";

const numberPays = 10;

async function indexFixtures() {
  try {
    await dataSource.initialize();

    // Insérer les données de test pour chaque entité
    const pays = await CreatePays(dataSource, numberPays);

    console.log("Données de test insérées avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'insertion des données de test :", error);
  } finally {
    await dataSource.destroy();
  }
}

indexFixtures();
