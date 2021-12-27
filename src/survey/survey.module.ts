import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyResolver } from './survey.resolver';
import { Survey } from "./entities/survey.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import {Question} from "../questions/entities/question.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Survey, Question])],
  providers: [SurveyService, SurveyResolver]
})
export class SurveyModule {}
