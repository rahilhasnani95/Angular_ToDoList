import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String = '';
  password: String = '';
  invalidLogin: boolean = false;
  errorMessage: String = 'Invalid Login Credentials!!';

  //using router dependency inj to navigate to pages
  constructor(private router: Router, private hardcodedauthenticationservice : HardcodedauthenticationService) { }

  ngOnInit() {
  }

  handleLogin()
  {
    if(this.hardcodedauthenticationservice.authenticate(this.username, this.password))
    {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }
    else{
      this.invalidLogin = true;
    }
  }
}
