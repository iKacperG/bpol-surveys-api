import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersResolver } from './answers.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Answer} from "./entities/answer.entity";
import {Question} from "../questions/entities/question.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Answer, Question])],
  providers: [AnswersResolver, AnswersService],
})
export class AnswersModule {}
