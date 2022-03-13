import { Controller, Post, Body } from '@nestjs/common';
import { FlagsService } from 'src/services/flags.service';
import { ClientAttributes, FlagList } from 'src/types';

@Controller('client')
export class ClientController {
  constructor(private readonly FlagsService: FlagsService) {}

  @Post('config')
  getClientConfig(@Body() attributes: ClientAttributes): FlagList {
    return this.FlagsService.getClientConfig(attributes);
  }
}
