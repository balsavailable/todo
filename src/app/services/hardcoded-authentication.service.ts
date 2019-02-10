import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  constructor() { }
  public authericateUser(username: string, password: string) {
    if (username == "bals" && password == "bals") {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    else {
      return false;
    }
  }
  public isUserLoggedIn() {
    let username: string = sessionStorage.getItem('authenticatedUser');
    return username !== null && username !==undefined;
  }

  public logout()
  {
    sessionStorage.removeItem("authenticatedUser");
  }


}
