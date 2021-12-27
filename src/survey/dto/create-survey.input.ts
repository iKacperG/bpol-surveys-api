import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class SurveyCreateDTO {

    @Field(() => String)
    name: string;

    @Field(() => [String])
    questions: string[];
}