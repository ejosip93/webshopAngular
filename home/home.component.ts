import {Component, OnInit, Renderer2} from '@angular/core';
import { HomeService } from './home.service';
import { CartService } from '../cart/cart.service';
import {TranslateService} from '../translate.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  proizvodi;
  alarm: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(homeService: HomeService, private cartService: CartService, private translateService: TranslateService, private renderer: Renderer2) {
    this.proizvodi = homeService.getData();
  }

  ngOnInit() {
  }

  addToCart(proizvod) {
    this.alarm = true;
    this.cartService.addToCart(proizvod);
    setTimeout(() => {
      this.alarm = false;
    }, 3000);
  }

  moveUp($event: MouseEvent) {
    let pos = 0;
    setInterval(() => {
      if (pos <= 10) {
        this.renderer.setStyle($event.target, 'bottom', pos + 'px');
        pos++;
      }
    }, 10);
  }

  moveDown($event: MouseEvent) {
    let pos = 10;
    setInterval(() => {
      if (pos > 0) {
        this.renderer.setStyle($event.target, 'bottom', pos + 'px');
        pos--;
      }
    }, 10);
  }
}
