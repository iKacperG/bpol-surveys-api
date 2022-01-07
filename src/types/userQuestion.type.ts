import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class UserQuestion {

    @Field()
    text: string;
    @Field({nullable: true})
    inputType: string;
}