  import { Component, model, signal } from '@angular/core';
  import { ImgCar } from '../../components/img-car/img-car';
  import { MatAnchor } from "@angular/material/button";
  import { MatButtonModule } from '@angular/material/button';
  import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogModule } from '@angular/material/dialog';
  import { inject } from '@angular/core';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatInputModule } from '@angular/material/input';
  import { FormsModule } from '@angular/forms';
  import { MatDatepickerModule } from '@angular/material/datepicker';
  import { provideNativeDateAdapter } from '@angular/material/core';
  import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

  export interface DialogData {
    name: string;
  }

  @Component({
    selector: 'app-home',
    standalone: true,
    imports: [ImgCar, MatAnchor, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, CommonModule],
    templateUrl: './home.html',
    styleUrls: ['./home.css']
  })
  export class Home {
    readonly name = signal('');
    readonly dialog = inject(MatDialog);

    openBookDialog() {
      this.dialog.open(BookDialog, {width: '400px'})
    }
  }

  @Component({
    selector: 'bookdialog',
    standalone: true,
    templateUrl: './bookdialog.html',
    providers: [provideNativeDateAdapter()],
    imports: [
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatButtonModule,
      MatDialogTitle,
      MatDialogContent,
      MatDialogActions,
      MatDialogClose,
      MatDatepickerModule,
    ],
  })
  export class BookDialog {
    selectedDate!: Date;

    constructor(private firestore: Firestore, private dialogRef: MatDialogRef<BookDialog>){}
    
    readonly data = inject<DialogData>(MAT_DIALOG_DATA);

    async saveBooking(){
      if (!this.selectedDate){
        alert("Please select a date before booking!");
        return;
      }
      try {
        const bookingsRef = collection(this.firestore, 'Bookings');
        await addDoc(bookingsRef, {
          date: this.selectedDate,
          createdAt: new Date()
        });
        console.log('Booking saved succesfully!');
        this.dialogRef.close();
      }
      catch (err) {
        console.log("Error saving!", err);
      }
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
  }
