import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.scss']
})
export class AddcartComponent implements OnInit {
  constructor() { }



  res :number = 0;
add(){
  this.res +=1;
  }
  minc(){
    if(this.res <1){
  alert('stop');
  }
  else{
    
    this.res -=1;
    }
  }

  ngOnInit() {
  }
}
