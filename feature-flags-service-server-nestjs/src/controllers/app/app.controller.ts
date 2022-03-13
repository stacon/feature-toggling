import { Controller, Get } from '@nestjs/common';

import { FlagsService } from '../../services/flags.service';

@Controller()
export class AppController {
  constructor(private readonly FlagsService: FlagsService) {}

  @Get()
  getStatus(): string {
    return 'This server is up and running';
  }
}
