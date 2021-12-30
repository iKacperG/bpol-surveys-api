import {Resolver, Query, Args, Int, Mutation} from '@nestjs/graphql';
import { AnswersService } from './answers.service';
import {Answer} from "./entities/answer.entity";
import {AnswersAddDTO} from "./dto/add-answers.input";

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
    return this.answersService.findMatching(id);
  }

  @Mutation(() => [Answer], { name: 'addAnswers'})
  create(@Args('answerInput') answers: AnswersAddDTO) {
    return this.answersService.addAnswers(answers);
  }
  
}
