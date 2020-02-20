import { Component, OnInit, Input } from '@angular/core';
import { cartdata } from 'src/app/share/services/cartsdata';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {
// @Input() ss: cartdata;



dataset: cartdata[] = [
  {
    id: 1,
    img: 'assets/img/1.jpg',
    desc: 'laptop',
    name: 'dell',
    price: 2000
  },
  {
    id: 2,
    img: 'assets/img/2.jpg',
    desc: 'laptop',
    name: 'dell',
    price: 2000
  },
  {
    id: 3,
    img: 'assets/img/3.jpg',
    desc: 'laptop',
    name: 'dell',
    price: 2000
  },
  {
    id: 4,
    img: 'assets/img/4.jpg',
    desc: 'laptop',
    name: 'dell',
    price: 2000
  }
  


  
]

  constructor() { }

  ngOnInit() {
  }

}
