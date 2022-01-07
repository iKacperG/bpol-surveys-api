import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class AnswerResponse {

    @Field()
    response: string;
}