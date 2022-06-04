import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from './dialog.interface';

@Component({
  selector: 'form-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  minDate: Date;
  maxDate: Date;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data:DialogData) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 125, 0, 1);
    this.maxDate = new Date();
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
