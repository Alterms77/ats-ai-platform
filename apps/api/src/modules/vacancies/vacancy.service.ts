import { Injectable } from '@nestjs/common';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';

@Injectable()
export class VacancyService {
  private vacancies = [
    {
      id: 'vac-001',
      title: 'Senior Full Stack Engineer',
      minScoreThreshold: 75,
      minCandidatesDisplay: 4,
      status: 'OPEN',
      criteria: [
        { type: 'EXPERIENCE', label: 'Experiencia', weight: 25, required: true },
        { type: 'TECHNICAL_SKILLS', label: 'JavaScript / TypeScript', weight: 20, required: true },
      ],
    },
  ];

  create(dto: CreateVacancyDto) {
    return {
      message: 'Vacancy created successfully',
      data: { id: 'vac-new', ...dto },
    };
  }

  findAll() {
    return this.vacancies;
  }

  findOne(id: string) {
    return this.vacancies.find((item) => item.id === id) ?? null;
  }

  update(id: string, dto: UpdateVacancyDto) {
    return {
      message: `Vacancy ${id} updated`,
      data: dto,
    };
  }

  remove(id: string) {
    return {
      message: `Vacancy ${id} removed`,
    };
  }
}
