import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bankCard',
  standalone: true
})
export class BankCardPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let res = "";
    let i = 0;
    while(i < value.length){
      res += value[i]
      i++;
      if(i%3==0 && i < value.length-1){
        res += "-";
      }
    }
    return res;
  }

}
