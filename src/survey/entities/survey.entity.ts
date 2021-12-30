import {Field, ObjectType} from '@nestjs/graphql';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Question} from "../../questions/entities/question.entity";

@Entity("Survey")
@ObjectType()
export class Survey {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Field()
    @Column()
    url: string;
    
    @Field()
    @Column()
    name: string;
    
    @OneToMany(() => Question, (question: Question) => question.survey, { cascade: true })
    @Field(() => [Question])
    questions: Question[];
}