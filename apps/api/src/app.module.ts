import { Module } from '@nestjs/common';
import { VacancyModule } from './modules/vacancies/vacancy.module';
import { CandidateModule } from './modules/candidates/candidate.module';
import { EvaluationModule } from './modules/evaluations/evaluation.module';
import { HealthController } from './health.controller';

@Module({
  imports: [VacancyModule, CandidateModule, EvaluationModule],
  controllers: [HealthController],
})
export class AppModule {}
