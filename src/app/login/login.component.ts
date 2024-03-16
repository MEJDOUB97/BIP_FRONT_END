import { Component, OnInit } from "@angular/core";
import { TransactionDTO } from "../transaction/Transaction";
import { UserDTO } from "../transaction/User";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
// import { UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  user: UserDTO = {
    accountDebit: 0,
    accountNum: 0,
    firstName: '',
    lastName: '',
    id: 0,
  };
  showSpinner: boolean = false;

  ngOnInit() {}

  register(user: UserDTO): void {
    // this.userService.saveUser(user as UserDTO).subscribe((u) => {
    //   this.storeUserInSessionStorage(u);
    //   this.router.navigateByUrl("/send-transaction");
    // });
    this.router.navigateByUrl("/home");
  }

  storeUserInSessionStorage(user: UserDTO): void {
    console.log("before");
    console.log(user);
    sessionStorage.setItem("user", JSON.stringify(user));
  }
}
