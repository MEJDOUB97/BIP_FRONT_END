import { Component,OnInit  } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
export interface PeriodicElement {
  name_recipient: string;
  receiveDate: Date;
  montant: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { receiveDate: new Date('2024-03-16'), name_recipient: 'M. Jean Dupont', montant: 100 },
  { receiveDate: new Date('2024-03-16'), name_recipient: 'Mme Sophie Dubois', montant: 150 },
  { receiveDate: new Date('2024-03-18'), name_recipient: 'M. Michel Leclerc', montant: 200 },
  { receiveDate: new Date('2024-03-19'), name_recipient: 'Mme Caroline Rousseau', montant: 50 },
  { receiveDate: new Date('2024-03-19'), name_recipient: 'M. Thomas Moreau', montant: 75 },
  { receiveDate: new Date('2024-03-19'), name_recipient: 'Mme Laura Girard', montant: 120 },
  { receiveDate: new Date('2024-03-22'), name_recipient: 'M. Paul Martin', montant: 80 },
  { receiveDate: new Date('2024-03-22'), name_recipient: 'Mme Émilie Lefevre', montant: 90 },
  { receiveDate: new Date('2024-03-24'), name_recipient: 'M. Olivier Leroy', montant: 110 },
  { receiveDate: new Date('2024-03-25'), name_recipient: 'Mme Lucie Lambert', montant: 70 },
];

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',

})
export class HistoryComponent implements OnInit {
  groupedTransactions: [string, PeriodicElement[]][] = [];

  ngOnInit(): void {
    // Créer un objet pour regrouper les transactions par date
    const transactionsGroupedByDate: { [key: string]: PeriodicElement[] } = {};

    // Regrouper les transactions par date
    ELEMENT_DATA.forEach(transaction => {
      const transactionDate = transaction.receiveDate.toDateString();
      if (!transactionsGroupedByDate[transactionDate]) {
        transactionsGroupedByDate[transactionDate] = [];
      }
      transactionsGroupedByDate[transactionDate].push(transaction);
    });

    // Convertir l'objet en tableau pour itérer dessus dans le template
    this.groupedTransactions = Object.entries(transactionsGroupedByDate);
  }


  displayedColumns: string[] = ['receiveDate', 'name_recipient',  'montant'];
  dataSource = ELEMENT_DATA;
}

