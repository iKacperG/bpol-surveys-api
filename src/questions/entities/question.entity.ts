import {Field, ObjectType} from '@nestjs/graphql';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Survey} from "../../survey/entities/survey.entity";

@Entity("Question")
@ObjectType()
export class Question {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Field(() => String)
  @Column()
  text: string;

  @ManyToOne(() => Survey, (survey: Survey) => survey.questions)
  @Field(() => Survey)
  survey: Survey;
}