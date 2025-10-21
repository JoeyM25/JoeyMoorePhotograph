import { Component, model, signal } from '@angular/core';
import { ImgCar } from '../../components/img-car/img-car';
import { MatAnchor } from "@angular/material/button";
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

export interface DialogData {
  name: string;
  animal: string;
}

@Component({
  selector: 'app-home',
  imports: [ImgCar, MatAnchor, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  readonly name = signal('');
  readonly animal = model('');
  readonly dialog = inject(MatDialog);

  openBookDialog() {
    const dialogRef = this.dialog.open(bookdialog, {
      data: {name: this.name(), animal: this.animal()},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != undefined) {
        console.log("ballz")
      }
    });
  }
}

@Component({
  selector: 'bookdialog',
  templateUrl: './bookdialog.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class bookdialog {
  readonly dialogRef = inject(MatDialogRef<bookdialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly animal = model(this.data.animal);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
