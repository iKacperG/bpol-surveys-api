import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class UserAnswer {

    @Field()
    input: string;
    @Field()
    questionId: string;
}