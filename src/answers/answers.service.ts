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

  findMatching(id: string) {
    return this.answersRepository.find({where: {question: {id: id}}});
  }
  
  async addAnswers(answersAddDTO: AnswersAddDTO): Promise<Answer[]> {
    const answersArray: Answer[] = [];
    
     answersAddDTO.userAnswers.map(async (answerData: UserAnswer) => {
       const savedAnswer = await this.answersRepository.save({
         input: answerData.input,
         question: {
           id: answerData.questionId
         }
       })
       answersArray.push(savedAnswer)
    })
    
    return answersArray
  }
}
