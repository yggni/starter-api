import { Module } from '@nestjs/common';
import { AppController } from './routers/app.controller';
import { AppService } from './use-cases/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
