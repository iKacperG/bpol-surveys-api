import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class UserQuestion {

    @Field()
    text: string;
    @Field({nullable: true})
    inputType: string;
}

@InputType()
export class SurveyCreateDTO {

    @Field(() => String)
    name: string;

    @Field(() => [UserQuestion])
    questions: UserQuestion[];
}