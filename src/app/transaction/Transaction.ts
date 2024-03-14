import { UserDTO } from "./User";

export interface TransactionDTO {
  id: number;
  sender: UserDTO;
  receiver: UserDTO;
  amount: number;
  reason: string;
  transactionType: boolean;
}
