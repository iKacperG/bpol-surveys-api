import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Survey} from "../survey/entities/survey.entity";
import {Repository} from "typeorm";
import {Question} from "./entities/question.entity";

@Injectable()
export class QuestionsService {
  
  constructor( 
      @InjectRepository(Question) private questionsRepository: Repository<Question>,
      @InjectRepository(Survey) private surveyRepository: Repository<Survey>
  ) {
  }
  async getAllQuestions(): Promise<Question[]> {
    return this.questionsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  async createQuestion(text: string, surveyId: string): Promise<Question> {
    return this.questionsRepository.save({
      text,
      survey: {
        id: surveyId,
      }
    })
  }
}
