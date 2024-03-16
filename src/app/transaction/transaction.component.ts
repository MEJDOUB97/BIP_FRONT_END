import { AfterViewInit, Component, OnInit } from "@angular/core";
import { UserDTO } from "./User";
import { TransactionDTO } from "./Transaction";
import { Router } from "@angular/router";

@Component({
  selector: "app-transaction",
  templateUrl: "./transaction.component.html",
  styleUrls: ["./transaction.component.css"],
})
export class TransactionComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit(): void {}

  sender: UserDTO = {
    accountDebit: 0,
    accountNum: 0,
    firstName: '',
    lastName: '',
    id: 0,
  };
  receiver: UserDTO = {
    accountDebit: 0,
    accountNum: 0,
    firstName: '',
    lastName: '',
    id: 0,
  };
  transaction: TransactionDTO = {
    sender: this.sender,
    receiver: this.receiver,
    amount: 0,
    reason: '',
    transactionType: true,
    id: 0,
  };
  user: UserDTO | undefined;

  ngOnInit() {
    
    //this.sender = JSON.parse(sessionStorage.getItem("user"));
    console.log("after");
    console.log(this.sender);
  }
  
  send(user: any) {
    // Implementation of the send function
}

choiceReci(){
  this.router.navigateByUrl("/choice-recipient");

}


}
