import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({name: 'customDatePipe'})
export class CustomDatePipe implements PipeTransform {
  transform(value: Date): string {
    const datePipe = new DatePipe('en-US');
    const today = new Date();
    if (today.getDate() === value.getDate() && today.getMonth() === value.getMonth() && today.getFullYear() === value.getFullYear()) {
      return datePipe.transform(value, 'hh:mmaa');
    } else {
      return datePipe.transform(value, 'MMM, d');
    }
  }
}