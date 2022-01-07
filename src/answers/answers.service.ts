import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Answer} from "./entities/answer.entity";
import {Question} from "../questions/entities/question.entity";
import {AnswersAddDTO} from "./dto/add-answers.input";
import {UserAnswer} from "../types/userAnswer.type";

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

  findById(id: string) {
    return this.answersRepository.find({where: {question: {id: id}}});
  } 
  
  async getAverage(id: string) {
    const answersFromScale = await this.answersRepository
        .find({
          where: {
            question: {
              id: id,
              inputType: 'scale'}
          }
        });
    let scaleAccumulator = 0;
    answersFromScale.forEach((answer) => {
      scaleAccumulator += Number(answer.input)
    })
    
    return {
      average: scaleAccumulator / answersFromScale.length
    }
  }

  async addAnswers(answersAddDTO: AnswersAddDTO): Promise<{ response: string }> {

    answersAddDTO.userAnswers
        .map((answer: UserAnswer) => {
          this.answersRepository.save({
            input: answer.input,
            question: {
              id: answer.questionId,
            },
          });
        });
    
    return {
      response: 'OK',
    }
  }
}
