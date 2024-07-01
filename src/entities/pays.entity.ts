import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Continents } from "../enum/continents.enum";

@Entity("pays")
@ObjectType()
class PaysEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: "varchar", length: 2, unique: true })
  code: string;

  @Field()
  @Column({ type: "varchar", length: 50, unique: true })
  nom: string;

  @Field({ nullable: true })
  @Column({ type: "varchar", length: 1, nullable: true })
  emoji: string;

  @Field(() => Continents, { nullable: true })
  @Column({
    type: "text",
    enum: Continents,
    nullable: true,
  })
  continent: Continents;
}

// ---

@InputType()
export class PaysCreateEntity {
  @Field()
  nom: string;
  @Field()
  code: string;
  @Field({ nullable: true })
  emoji: string;
  @Field(() => Continents, { nullable: true })
  continent: Continents;
}

// obliger de mettre nullable: true si on veut modifier que certain champs
@InputType()
export class PaysUpdateEntity {
  @Field()
  nom: string;
  @Field()
  code: string;
  @Field({ nullable: true })
  emoji: string;
  @Field(() => Continents, { nullable: true })
  continent: Continents;
}

export default PaysEntity;
