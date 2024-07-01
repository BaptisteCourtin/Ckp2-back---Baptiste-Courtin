import { Arg, Mutation, Query, Resolver, Authorized } from "type-graphql";

import PaysEntity, {
  PaysCreateEntity,
  PaysUpdateEntity,
} from "../entities/pays.entity";

import PaysService from "../services/pays.service";
import { Continents } from "../enum/continents.enum";

@Resolver()
export default class PaysResolver {
  @Query(() => PaysEntity)
  async getPaysByCode(@Arg("code") code: string) {
    const result: PaysEntity = await new PaysService().getPaysByCode(code);
    return result;
  }

  @Query(() => [PaysEntity])
  async getAllPays() {
    const result: PaysEntity[] = await new PaysService().getAllPays();
    return result;
  }

  @Query(() => [PaysEntity])
  async getAllPaysByContinent(@Arg("continent") continent: Continents) {
    const result: PaysEntity[] = await new PaysService().getAllPaysByContinent(
      continent
    );
    return result;
  }

  // ---

  @Mutation(() => PaysEntity)
  async createPays(@Arg("infos") infos: PaysCreateEntity) {
    const newPays: PaysEntity = await new PaysService().createPays(infos);

    return newPays;
  }

  @Mutation(() => PaysEntity)
  async modifyPays(
    @Arg("code") code: string,
    @Arg("infos") infos: PaysUpdateEntity
  ) {
    const paysModify: PaysEntity = await new PaysService().modifyPays(
      code,
      infos
    );
    return paysModify;
  }

  @Mutation(() => PaysEntity)
  async deletePays(@Arg("code") code: string) {
    const paysDelete: PaysEntity = await new PaysService().deletePays(code);

    return paysDelete;
  }
}
