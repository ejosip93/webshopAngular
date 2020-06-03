import {Injectable} from '@angular/core';
import {GeolocationService} from './geolocation.service';

export class TranslateSet {
  public loc: string;
  public values: {[key: string]: string} = {};
}

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  location;

  public loc = 'sl';

  constructor(private geolocationService: GeolocationService) {
    setTimeout(() => {
      this.location = this.geolocationService.getCurrentCountry();
      if (this.location.lat < 46.014 && this.location.lat > 45.714 && this.location.lng < 16.22 && this.location.lng > 15.74) {
        this.loc = 'hr';
      } else {
        this.loc = 'sl';
      }
    }, 500);
  }

  private dictionary: { [key: string]: TranslateSet} =
    {
      hr: {
        loc: 'hr',
        values: {
          Mandarine: '10',
          Šipci: '15',
          Marmelada: '45',
          valuta: 'kn'
        },
      },
      sl: {
        loc: 'sl',
        values: {
          Mandarine: '2',
          Šipci: '3',
          Marmelada: '7',
          valuta: 'eur'
        },
      },
    }



    translate(value): string {
      return this.dictionary[this.loc].values[value];
    }


}
