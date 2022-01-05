import {Field, ObjectType} from '@nestjs/graphql';
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Survey} from "../../survey/entities/survey.entity";
import {Answer} from "../../answers/entities/answer.entity";

@ObjectType()
export class QuestionInformation {

    @Field()
    average: Number;
}

@Entity("Question")
@ObjectType()
export class Question {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Field(() => String)
  @Column()
  text: string;
  
 @Field(() => String)
  @Column({nullable: true})
  inputType: string;
 
 @Field(() => Number)
  @Column({nullable: true})
  average: number;

  @ManyToOne(() => Survey, (survey: Survey) => survey.questions)
  @Field(() => Survey)
  survey: Survey;

  @OneToMany(() => Answer, (answer: Answer) => answer.question, { cascade: true })
  @Field(() => [Answer])
  answers: Answer[];
}