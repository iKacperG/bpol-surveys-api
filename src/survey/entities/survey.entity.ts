import {Field, ObjectType} from '@nestjs/graphql';
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("Survey")
@ObjectType()
export class Survey {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Field()
    @Column()
    name: string;
    @Field({ nullable: true })
    @Column({ nullable: true })
    questions: string;
}