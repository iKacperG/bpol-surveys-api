import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class UpdateSurveyInput {
    
    @Field()
    id: string
    @Field()
    name: string
    @Field(() => Int)
    code: number
}