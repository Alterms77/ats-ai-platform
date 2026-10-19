import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export enum CriterionType {
  EXPERIENCE = 'EXPERIENCE',
  TECHNICAL_SKILLS = 'TECHNICAL_SKILLS',
  CERTIFICATIONS = 'CERTIFICATIONS',
  EDUCATION = 'EDUCATION',
  LANGUAGES = 'LANGUAGES',
  TOOLS = 'TOOLS',
  COMPETENCIES = 'COMPETENCIES',
}

export class VacancyCriterionDto {
  @IsEnum(CriterionType)
  type: CriterionType;

  @IsString()
  label: string;

  @IsBoolean()
  required: boolean;

  @IsNumber()
  @Min(0)
  @Max(100)
  weight: number;

  @IsOptional()
  @IsString()
  minValue?: string;
}

export class CreateVacancyDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  minScoreThreshold?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(20)
  minCandidatesDisplay?: number;

  @IsArray()
  criteria: VacancyCriterionDto[];
}

export class UpdateVacancyDto extends CreateVacancyDto {}
