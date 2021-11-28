import { Component, Inject, OnInit } from '@angular/core';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { CloseManageWindowComponent } from '../close-manage-window/close-manage-window.component';
import { Product } from '../product';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-manage-window',
  templateUrl: './manage-window.component.html',
  styleUrls: ['./manage-window.component.css']
})

export class ManageWindowComponent implements OnInit {

  form!: FormGroup;
  id: string = '';
  name: string = '';
  price: number = 0;
  description: string = '';

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialog: MatDialog,
    private readonly dialogRef: MatDialogRef<ManageWindowComponent>,
    @Inject(MAT_DIALOG_DATA) data : Product) {
      this.name = data.name;
      this.price = data.price;
      this.description = data.description;

      this.form = this.fb.group({
        id: [data.id],
        name: [data.name, [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
        price: [data.price, [Validators.required, Validators.min(0), Validators.max(Number.MAX_VALUE)]],
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

  delete(): void{
    this.openCloseManageDialog();
  }

  openCloseManageDialog(): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    
    const dialogRef = this.dialog.open(CloseManageWindowComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data){
          this.dialogRef.close(data); // close the parent modal window if element should be deleted
        }
      }
    ); 
  }

}
