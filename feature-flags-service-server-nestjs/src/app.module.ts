import { Module } from '@nestjs/common';
import { AppController } from './controllers/app/app.controller';
import { ClientController } from './controllers/client/client.controller';
import { BackOfficeController } from './controllers/back-office/back-office.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, ClientController, BackOfficeController],
  providers: [AppService],
})
export class AppModule {}
