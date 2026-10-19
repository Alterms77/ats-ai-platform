import { Module } from '@nestjs/common';
import { VacancyModule } from './modules/vacancies/vacancy.module';
import { HealthController } from './health.controller';

@Module({
  imports: [VacancyModule],
  controllers: [HealthController],
})
export class AppModule {}
