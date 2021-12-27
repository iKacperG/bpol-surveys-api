import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SurveyModule } from './survey/survey.module';
import { Survey } from "./survey/entities/survey.entity";
import { QuestionsModule } from './questions/questions.module';
import {Question} from "./questions/entities/question.entity";
import {UrlGeneratorModule} from "nestjs-url-generator";
import {Answer} from "./answers/entities/answer.entity";
import {AnswersModule} from "./answers/answers.module";

@Module({
  imports: [
    SurveyModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql')
    }),
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "very_strong_password",
      "database": "mysql",
      "entities": [Survey, Question, Answer],
      "synchronize": true,
    }),
    SurveyModule,
    QuestionsModule,
    AnswersModule,
    UrlGeneratorModule.forRoot({
      appUrl: 'https://localhost:3000',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
