import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Survey } from "./entities/survey.entity";
import {SurveyCreateDTO} from "./dto/create-survey.input";

@Injectable()
export class SurveyService {
    constructor(@InjectRepository(Survey) private surveyRepository: Repository<Survey>) {

    }

    async getSurvey(): Promise<Survey> {
        return this.surveyRepository.findOne();
    }
    
    async createSurvey(survey:SurveyCreateDTO): Promise<Survey> {
        let surv = this.surveyRepository.create(survey);
        return this.surveyRepository.save(surv)
    }
}

