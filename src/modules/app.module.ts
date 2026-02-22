import { Module } from '@nestjs/common';
import { AppService } from 'src/application/app.service';
import { AppController } from 'src/infra/app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
