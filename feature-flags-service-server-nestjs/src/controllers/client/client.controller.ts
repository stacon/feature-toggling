import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { ClientAttributes, FlagList } from 'src/types';

@Controller('client')
export class ClientController {
  constructor(private readonly appService: AppService) {}

  @Post('config')
  getClientConfig(@Body() attributes: ClientAttributes): FlagList {
    return this.appService.getClientConfig(attributes);
  }
}
