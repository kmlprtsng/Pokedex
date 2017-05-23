import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capatilize'
})
export class CapatilizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.charAt(0).toUpperCase() + value.substr(1);
  }

}
