import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SurveyCreateDTO {
    
    @Field()
    name: string;
    @Field({ nullable: true })
    questions: string;
}