import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Injectable()
export class CandidateService {
  private candidates = [
    {
      id: 'cand-001',
      name: 'Ana García',
      email: 'ana.garcia@email.com',
      phone: '+34 600 123 456',
      yearsExperience: 7,
      skills: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Docker'],
      certifications: ['AWS Solutions Architect', 'SCRUM'],
      education: 'Ingeniería Informática',
      languages: ['Español', 'Inglés'],
      status: 'SHORTLISTED',
    },
    {
      id: 'cand-002',
      name: 'Luis Ramírez',
      email: 'luis.ramirez@email.com',
      phone: '+52 555 234 778',
      yearsExperience: 5,
      skills: ['React', 'Node.js', 'MongoDB', 'GraphQL'],
      certifications: ['AWS Cloud Practitioner'],
      education: 'Licenciatura en Sistemas',
      languages: ['Español', 'Inglés'],
      status: 'IN_REVIEW',
    },
  ];

  create(dto: CreateCandidateDto) {
    return {
      message: 'Candidate created successfully',
      data: { id: `cand-${Date.now()}`, ...dto },
    };
  }

  findAll() {
    return this.candidates;
  }

  findOne(id: string) {
    return this.candidates.find((candidate) => candidate.id === id) ?? null;
  }

  update(id: string, dto: UpdateCandidateDto) {
    return {
      message: `Candidate ${id} updated`,
      data: { id, ...dto },
    };
  }
}
