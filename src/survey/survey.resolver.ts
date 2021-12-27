import {Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import { Survey } from "./entities/survey.entity";
import {SurveyService} from "./survey.service";
import {SurveyCreateDTO} from "./dto/create-survey.input";

@Resolver(() => Survey)
export class SurveyResolver {
    constructor( private surveyService: SurveyService) {

    }
    @Query(() => Survey, { name: 'getSurvey'})
    getSingle(@Args('id') id:string) {
        return this.surveyService.getSurvey(id);
    } 
    
    @Query(() => [Survey], { name: 'getAllSurveys'})
    findAll() {
        return this.surveyService.getAllSurveys();
    }
    
    @Mutation(() => Survey, { name: 'createSurvey'})
    create(@Args('surveyInput') survey:SurveyCreateDTO) {
       return this.surveyService.createSurvey(survey)
    }

}
