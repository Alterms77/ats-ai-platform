import { Body, Controller, Post } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluateCandidateDto } from './dto/evaluate-candidate.dto';

@Controller('evaluations')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Post('score')
  evaluate(@Body() dto: EvaluateCandidateDto) {
    return this.evaluationService.evaluateCandidate(dto);
  }
}
