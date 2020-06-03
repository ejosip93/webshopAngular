import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from './translate.service';

@Pipe({
  name: 'translator',
  pure: false
})
export class TranslatorPipe implements PipeTransform {
constructor(private translateService: TranslateService) {}
  transform(value: any, args?: any): any {
    return this.translateService.translate(value);
  }
}
