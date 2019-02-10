import { HardcodedAuthenticationService } from './../services/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }


  private validation: boolean = true;
  onSubmit() {
    this.validation = this.hardcodedAuthenticationService.authericateUser(this.username, this.password);

    if (this.validation) {
      this.router.navigate(['welcome','bals']);
    }
    else {

    }


  }


}
