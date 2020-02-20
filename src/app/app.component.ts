import { Component } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sellercenter';
  formlogin: FormGroup =new FormGroup({
name:new FormControl(null,[Validators.required,Validators.minLength(5)]),
email:new FormControl(null,[Validators.required,Validators.email]),
phone:new FormControl(null,[Validators.required]),
address:new FormGroup({
  street:new FormControl(null,[Validators.required]),
city:new FormControl(null,[Validators.required]),

}),
  })
  login(f){ 
    console.log(f);
  }

}
