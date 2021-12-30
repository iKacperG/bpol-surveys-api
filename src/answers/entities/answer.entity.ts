import {Field, ObjectType} from '@nestjs/graphql';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Question} from "../../questions/entities/question.entity";

@Entity("Answer")
@ObjectType()
export class Answer {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Field(() => String)
  @Column()
  input: string;

  @ManyToOne(() => Question, (question: Question) => question.answers)
  @Field(() => Question)
  question: Question;
}