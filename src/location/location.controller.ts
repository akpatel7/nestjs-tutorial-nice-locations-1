import { Controller, Get, Render } from '@nestjs/common';

interface ILocationListDto {
  locations: string[];
}

@Controller()
export class LocationController {
  // constructor();

  @Get()
  @Render('list.hbs')
  listLocations(): ILocationListDto {
    return {
      locations: ['Location 1', 'Location 2', 'Location 3'],
    };
  }
}
