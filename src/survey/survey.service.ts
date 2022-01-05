import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Survey } from "./entities/survey.entity";
import {SurveyCreateDTO, UserQuestion} from "./dto/create-survey.input";
import {Question} from "../questions/entities/question.entity";

@Injectable()
export class SurveyService {
    constructor(
        @InjectRepository(Survey) private surveyRepository: Repository<Survey>,
        @InjectRepository(Question) private questionRepository: Repository<Question>,
    ) {

    }
    async getSurvey(id): Promise<Survey> {
        return this.surveyRepository.findOne({id: id});
    } 
    
    async getAllSurveys(): Promise<Survey[]> {
        return this.surveyRepository.find();
    }
    
    async createSurvey(surveyData: SurveyCreateDTO): Promise<Survey> {
        
        const generatedSurvey = await this.surveyRepository.save({
            name: surveyData.name,
            questions: [],
            url: "",
        });
        
        generatedSurvey.url = String(new URL(`/${generatedSurvey.id}`, 'http://localhost:3001'));
            
        surveyData.questions.forEach(( userQuestion: UserQuestion ) => {
            let question = new Question();
            question.text = userQuestion.text;
            question.inputType = userQuestion.inputType;
            generatedSurvey.questions.push(question);
        })
        
        return this.surveyRepository.save(generatedSurvey);
    }
}

