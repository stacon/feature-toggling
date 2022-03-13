import { Controller, Get, Patch, Post, Delete, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { FeaturesFlagState } from 'src/types';

@Controller('back-office')
export class BackOfficeController {
  constructor(private readonly appService: AppService) {}

  @Get('config')
  getBackOfficeConfig(): FeaturesFlagState {
    return this.appService.flagState();
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
    return this.appService.changeAttribute(id, attribute, toggle);
  }

  @Post('create/:id')
  createFlag(@Param() { id }: { id: string }): FeaturesFlagState {
    return this.appService.createNewFlag(id);
  }

  @Delete(':id')
  deleteFlag(@Param() { id }: { id: string }): FeaturesFlagState {
    return this.appService.deleteFlag(id);
  }
}
