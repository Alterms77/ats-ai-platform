import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Post()
  create(@Body() dto: CreateCandidateDto) {
    return this.candidateService.create(dto);
  }

  @Get()
  findAll() {
    return this.candidateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidateService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCandidateDto) {
    return this.candidateService.update(id, dto);
  }
}
