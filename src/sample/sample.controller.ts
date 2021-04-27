import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('sample')
export class SampleController {

    @Get()
  findAll(): string {
    return 'FIND ALL';
  }

  @Get(':id')
  find(): string {
    return 'FIND ALL USING ID';
  }

  @Post()
  create(): string {
    return 'CREATE';
  }

  @Put()
  update(): string {
    return 'UPDATE';
  }

  @Put(':id')
  Update(): string {
    return 'UPDATE USING ID';
  }
  
  @Delete('del')
  delete(): string {
    return 'DELETE';
  }

  @Delete(':id')
  Delete(): string {
    return 'DELETE USING ID';
  }

}

