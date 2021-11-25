import { Component, Inject, OnInit } from '@angular/core';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { CloseManageWindowComponent } from '../close-manage-window/close-manage-window.component';
import { Product } from '../product';

@Component({
  selector: 'app-manage-window',
  templateUrl: './manage-window.component.html',
  styleUrls: ['./manage-window.component.css']
})

export class ManageWindowComponent implements OnInit {

  form!: FormGroup;
  name: string = '';
  price: number = 0;
  description: string = '';

  constructor(private readonly fb: FormBuilder, private readonly dialog: MatDialog,
    private readonly dialogRef: MatDialogRef<ManageWindowComponent>,
    @Inject(MAT_DIALOG_DATA) data : Product) {
      this.name = data.name;
      this.price = data.price;
      this.description = data.description;

      this.form = this.fb.group({
        id: [data.id],
        name: [data.name, [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
        price: [data.price, [Validators.required, Validators.pattern(/^\d*[1-9]\d*$/), Validators.min(0), Validators.max(1.79769313486232E+308)]],
        description: [data.description, [Validators.required, Validators.minLength(5), Validators.maxLength(500)]]
      });
    }

  ngOnInit(): void {
    
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }

  getErrorPrice() {
    return this.form.get('price')?.hasError('required') ? 'Field is required' :
      this.form.get('price')?.hasError('pattern') ? 'Not a valid price.' : '';
  }

  delete(): void{
    this.openCloseManageDialog();
  }

  openCloseManageDialog(): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    
    const dialogRef = this.dialog.open(CloseManageWindowComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data) // delete = true, cancel = nothing
    ); 
  }

}
