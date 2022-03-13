import { Controller, Get, Patch, Post, Delete, Param } from '@nestjs/common';
import { FlagsService } from 'src/services/flags.service';
import { FeaturesFlagState } from 'src/types';

@Controller('back-office')
export class BackOfficeController {
  constructor(private readonly FlagsService: FlagsService) {}

  @Get('config')
  getBackOfficeConfig(): FeaturesFlagState {
    return this.FlagsService.flagState();
  }

  @Patch(':id/:attribute/:toggle')
  changeAttribute(
    @Param()
    {
      id,
      attribute,
      toggle,
    }: {
      id: string;
      attribute: string;
      toggle: string;
    },
  ): FeaturesFlagState {
    return this.FlagsService.changeAttribute(id, attribute, toggle);
  }

  @Post('create/:id')
  createFlag(@Param() { id }: { id: string }): FeaturesFlagState {
    return this.FlagsService.createNewFlag(id);
  }

  @Delete(':id')
  deleteFlag(@Param() { id }: { id: string }): FeaturesFlagState {
    return this.FlagsService.deleteFlag(id);
  }
}
