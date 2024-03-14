import { Injectable } from "@angular/core";
import { TransactionDTO } from "./transaction/Transaction";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TransactionService {
  baseURL: string = "http://localhost:8080/";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  saveTransaction(transaction: TransactionDTO): Observable<TransactionDTO> {
    return this.http
      .post<TransactionDTO>(this.baseURL, transaction, this.httpOptions)
      .pipe(
        tap((newTransaction: TransactionDTO) =>
          this.log(`add hero ${newTransaction}`)
        )
      );
  }

  private log(message: string) {
    console.log(message);
  }
}
