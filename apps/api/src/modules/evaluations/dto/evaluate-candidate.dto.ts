import { IsEnum, IsObject, IsOptional, IsString } from 'class-validator';

export class EvaluateCandidateDto {
  @IsObject()
  candidate: any;

  @IsObject()
  vacancy: any;

  @IsOptional()
  @IsEnum(['EXCELLENT', 'GOOD', 'REGULAR', 'NOT_VERIFIED'])
  referenceRating?: string;
}
