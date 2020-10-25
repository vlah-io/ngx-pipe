import {DatePipe} from '@angular/common';
import {Inject, Pipe, PipeTransform} from '@angular/core';
import {DatePipeConfigInterface} from '../../interface/ngx-pipe.interface';
import {VLAHIO_DATE_PIPE_CONFIG} from '../../service/injection-token';

@Pipe({name: 'vlahioDate'})
export class VlahioDatePipe implements PipeTransform {

  constructor(@Inject(VLAHIO_DATE_PIPE_CONFIG) private configs: DatePipeConfigInterface) {
  }

  transform(
    value: string | Date | null,
    format?: string,
    timezone?: string,
    locale?: string
  ): string | null {
    const date: DatePipe = new DatePipe(this.configs?.locale || 'en-US');

    return date.transform(
      value,
      format || this.configs?.date_format || 'dd-MM-yyyy',
      timezone || this.configs?.date_timezone || 'GMT',
      locale || this.configs?.locale || 'en-US'
    );
  }
}
