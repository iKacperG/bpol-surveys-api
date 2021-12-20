import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsResolver } from './questions.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Question} from "./entities/question.entity";
import {Survey} from "../survey/entities/survey.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Question, Survey])],
  providers: [QuestionsResolver, QuestionsService]
})
export class QuestionsModule {}
