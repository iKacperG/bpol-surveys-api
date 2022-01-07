import {Field, InputType} from "@nestjs/graphql";
import {UserQuestion} from "../../types/userQuestion.type";

@InputType()
export class SurveyCreateDTO {

    @Field(() => String)
    name: string;

    @Field(() => [UserQuestion])
    questions: UserQuestion[];
}