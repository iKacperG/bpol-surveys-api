import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Answer} from "./entities/answer.entity";
import {Question} from "../questions/entities/question.entity";
import {AnswersAddDTO, UserAnswer} from "./dto/add-answers.input";

@Injectable()
export class AnswersService {
  
  constructor( 
      @InjectRepository(Answer) private answersRepository: Repository<Answer>,
      @InjectRepository(Question) private questionsRepository: Repository<Question>
  ) {
  }
  async getAllAnswers(): Promise<Answer[]> {
    return this.answersRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  findById(id: string) {
    return this.answersRepository.find({where: {question: {id: id}}});
  } 
  
  async getAverage(id: string) {
    const answersFromScale = await this.answersRepository.find({where: {question: {id: id, inputType: 'scale'}}});
    let accumulator = 0;
    answersFromScale.forEach((answer) => {
      accumulator += Number(answer.input)
    })
    return {average: accumulator / answersFromScale.length}
  }
  
  async addAnswers(answersAddDTO: AnswersAddDTO): Promise<{response: string}> {
    
     answersAddDTO.userAnswers.map(async (answerData: UserAnswer) => {
       await this.answersRepository.save({
         input: answerData.input,
         question: {
           id: answerData.questionId,
         },
       })
    })
    return { response: 'OK' }
  }
}
