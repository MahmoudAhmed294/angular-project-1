import { Component, OnInit } from '@angular/core';
import { AuthsService } from '../../services/auths.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auths:AuthsService,private router:Router) { }

  ngOnInit() {
  }
  login(){
    this.auths.isloggedin=! this.auths.isloggedin;
    this.router.navigate(['/details/h']);

    // console.log(this.auths.isloggedin);
  }
}
