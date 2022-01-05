import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SurveyModule } from './survey/survey.module';
import { QuestionsModule } from './questions/questions.module';
import {UrlGeneratorModule} from "nestjs-url-generator";
import {AnswersModule} from "./answers/answers.module";
@Module({
  imports: [
    SurveyModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql')
    }),
    TypeOrmModule.forRoot(),
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
