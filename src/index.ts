import { buildSchema } from "type-graphql";
import datasource from "./lib/datasource";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// import les resolvers
import PaysResolver from "./resolvers/pays.resolver";

// ---

async function main() {
  const schema = await buildSchema({
    resolvers: [PaysResolver], // mettre les resolvers ici
  });
  const server = new ApolloServer<{}>({
    schema,
  });

  await datasource.initialize();
  await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server lancé sur http://localhost:4000/`);
}
main();
