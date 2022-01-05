import {Resolver, Query, Args, Int, Mutation} from '@nestjs/graphql';
import { AnswersService } from './answers.service';
import {Answer, AnswerResponse} from "./entities/answer.entity";
import {AnswersAddDTO} from "./dto/add-answers.input";
import {QuestionInformation} from "../questions/entities/question.entity";

@Resolver(() => Answer)
export class AnswersResolver {
  constructor(private readonly answersService: AnswersService) {}
  

  @Query(() => [Answer], { name: 'answers' })
  findAll() {
    return this.answersService.getAllAnswers();
  }

  @Query(() => Answer, { name: 'answer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.answersService.findOne(id);
  }

  @Query(() => [Answer], { name: 'findAnswers' })
  findMatching(@Args('id') id:string,) {
    return this.answersService.findById(id);
  }  
  
  @Query(() => QuestionInformation, { name: 'getAverage' })
  getAverage(@Args('id') id:string,) {
    return this.answersService.getAverage(id);
  }

  @Mutation(() => AnswerResponse, { name: 'addAnswers'})
  create(@Args('answerInput', {type: () => AnswersAddDTO}) answers: AnswersAddDTO) {
    return this.answersService.addAnswers(answers);
  }
}
