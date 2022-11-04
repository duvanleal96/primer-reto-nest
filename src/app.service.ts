import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Este es mi primera aplicación en Nest';
  }
}
