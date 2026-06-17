import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taxPipeline',
})
export class TaxPipelinePipe implements PipeTransform {
  transform(value: number, ...args: string[]): number{
    if(args[0] == 'M'){
      return value * 0.15;
    }
    return value * 0.1;
  }
}
