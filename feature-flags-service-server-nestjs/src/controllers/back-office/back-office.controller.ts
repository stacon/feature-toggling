import { Controller, Get, Patch, Body, Post, Delete } from '@nestjs/common';
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
    @Body() id: string,
    @Body() attribute: string,
    @Body() toggle: string,
  ): FeaturesFlagState {
    return this.appService.changeAttribute(id, attribute, toggle);
  }

  @Post('create/:id')
  createFlag(@Body() id: string): FeaturesFlagState {
    return this.appService.createNewFlag(id);
  }

  @Delete(':id')
  deleteFlag(@Body() id: string): FeaturesFlagState {
    return this.appService.deleteFlag(id);
  }
}
