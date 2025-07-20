import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TemplatesModule } from './templates/templates.module';
import { CreditsModule } from './credits/credits.module';
import { ResumesModule } from './resumes/resumes.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AuthModule, TemplatesModule, CreditsModule, ResumesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
