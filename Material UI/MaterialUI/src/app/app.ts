import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material-module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogExample } from './dialog-example/dialog-example';

@Component({
  selector: 'app-root',
  imports: [FormsModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {
    for (let i = 0; i < 1000; i++) {
      this.numbers.push(i);
    }
  }

  protected title = 'MaterialUI';
  name = '';
  greeting = '';
  opened = false;
  sayHello() {
    this.greeting = this.name
      ? `Hello, ${this.name}! 👋`
      : 'Please enter your name.';
  }
  options = ['Option 1', 'Option 2', 'Option 3'];

  formControl = new FormControl();

  masterSelected = false;

  items = [
    { name: 'Item 1', checked: false },
    { name: 'Item 2', checked: false },
    { name: 'Item 3', checked: false },
  ];

  masterToggle() {
    this.items.forEach((item) => (item.checked = this.masterSelected));
  }

  itemChange() {
    const allChecked = this.items.every((item) => item.checked);
    this.masterSelected = allChecked;
  }

  isIndeterminate(): boolean {
    const allChecked = this.items.every((item) => item.checked);
    const someChecked = this.items.some((item) => item.checked);

    return someChecked && !allChecked;
  }
  openSnackBar(message: string, action: string) {
    let snackBarRef = this.snackBar.open(message, action);
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered!');
    });
  }
  openDialog() {
    this.dialog.open(DialogExample);
  }

  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;

  numbers: number[] = [];
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
