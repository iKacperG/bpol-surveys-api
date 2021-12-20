import {Resolver, Query, Args, Int, Mutation} from '@nestjs/graphql';
import { QuestionsService } from './questions.service';
import { Question } from './entities/question.entity';
import {Survey} from "../survey/entities/survey.entity";
import {SurveyCreateDTO} from "../survey/dto/create-survey.input";

@Resolver(() => Question)
export class QuestionsResolver {
  constructor(private readonly questionsService: QuestionsService) {}
  

  @Query(() => [Question], { name: 'questions' })
  findAll() {
    return this.questionsService.getAllQuestions();
  }

  @Query(() => Question, { name: 'question' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.questionsService.findOne(id);
  }

  @Mutation(() => Question, { name: 'createQuestion'})
  create(@Args('text') text:string, @Args('surveyId') surveyId:string) {
    return this.questionsService.createQuestion(text, surveyId);
  }
  
}
