import { Module } from '@nestjs/common';
import { ResumesService } from './resumes.service';

@Module({
  providers: [ResumesService]
})
export class ResumesModule {}
