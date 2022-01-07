import {Resolver, Query, Args, Mutation} from '@nestjs/graphql';
import { AnswersService } from './answers.service';
import {Answer} from "./entities/answer.entity";
import {AnswersAddDTO} from "./dto/add-answers.input";
import {QuestionInformations} from "../types/questionInformations.type";
import {AnswerResponse} from "../types/answerResponse.type";

@Resolver(() => Answer)
export class AnswersResolver {
  constructor(private readonly answersService: AnswersService) {}
  

  @Query(() => [Answer], { name: 'answers' })
  findAll() {
    return this.answersService.getAllAnswers();
  }

  @Query(() => [Answer], { name: 'findAnswers' })
  findMatching(@Args('id') id:string,) {
    return this.answersService.findById(id);
  }  
  
  @Query(() => QuestionInformations, { name: 'getAverage' })
  getAverage(@Args('id') id:string,) {
    return this.answersService.getAverage(id);
  }

  @Mutation(() => AnswerResponse, { name: 'addAnswers'})
  create(@Args('answerInput', {type: () => AnswersAddDTO}) answers: AnswersAddDTO) {
    return this.answersService.addAnswers(answers);
  }
}
