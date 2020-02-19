import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToCelsius'
})
export class ConvertToCelsiusPipe implements PipeTransform {

  transform(value:number ): number {
    const kelvin = value;
    const celsius = value - 273.15;
    return +celsius.toFixed(2);
  }

}
