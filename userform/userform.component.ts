import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormService} from './form.service';
import {CartService} from '../cart/cart.service';
import {HomeService} from '../home/home.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent {
  order;
  constructor(private formService: FormService, private cartService: CartService, private homeService: HomeService) { }

  user = new User();

  onSubmit() {
    this.user.items = this.cartService.getItemsAsString();
    this.formService.sendForm(this.user).subscribe(user => console.log(user));
    this.user.reset();
    this.cartService.removeAllItems();
    this.homeService.resetWeights();
  }
}
