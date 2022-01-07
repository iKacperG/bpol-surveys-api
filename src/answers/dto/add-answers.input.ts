import {Field, InputType} from "@nestjs/graphql";
import {UserAnswer} from "../../types/userAnswer.type";

@InputType()
export class AnswersAddDTO {

    @Field(() => [UserAnswer])
    userAnswers: UserAnswer[];
}