import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyResolver } from './survey.resolver';
import { Survey } from "./entities/survey.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Survey])],
  providers: [SurveyService, SurveyResolver]
})
export class SurveyModule {}
