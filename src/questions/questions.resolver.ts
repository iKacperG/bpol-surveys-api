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
  
  @Query(() => [Question], { name: 'findMatching' })
  findMatching(@Args('id') id:string,) {
    return this.questionsService.findMatching(id);
  }

  @Query(() => Question, { name: 'question' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.questionsService.findOne(id);
  }

  @Mutation(() => Question, { name: 'createQuestion'})
  create(@Args('text') text:string, @Args('surveyId') surveyId:string) {
    return this.questionsService.createQuestion(text, surveyId);
  }
  
}
