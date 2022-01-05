import {Resolver, Query, Args, Mutation} from '@nestjs/graphql';
import { QuestionsService } from './questions.service';
import { Question } from './entities/question.entity';

@Resolver(() => Question)
export class QuestionsResolver {
  constructor(private readonly questionsService: QuestionsService) {}
  

  @Query(() => [Question], { name: 'questions' })
  findAll() {
    return this.questionsService.getAllQuestions();
  }  
  
  @Query(() => [Question], { name: 'findQuestions' })
  findMatching(@Args('id') id:string,) {
    return this.questionsService.findBySurveyId(id);
  }

  @Mutation(() => Question, { name: 'createQuestion'})
  create(@Args('text') text:string, @Args('surveyId') surveyId:string) {
    return this.questionsService.createQuestion(text, surveyId);
  }
  
}
