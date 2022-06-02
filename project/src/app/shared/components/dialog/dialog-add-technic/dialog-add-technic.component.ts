import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ProductsService } from 'src/app/modules/products/services/product.service';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';

@Component({
  selector: 'app-add-technic',
  templateUrl: './dialog-add-technic.component.html',
  styleUrls: ['./dialog-add-technic.component.scss'],
})
export class DialogAddTechnick {
  public statuses:any[] = ["expectation",
    "during",
    "ready"];
  public user!: any;
  public checked = false;
  public formGroup!: FormGroup;
  private id:string = this.persistanceService.get('id');
  constructor(
    public dialogRef: MatDialogRef<DialogAddTechnick>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder:FormBuilder,
    private productService:ProductsService,
    private persistanceService:PersistanceService

  ) {
    this.user = data.user[0];
    this.initializeForm();
  }
  initializeForm(){
    this.formGroup = this.formBuilder.group({
      name:[''],
      description:[''],
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  submit():void{
    console.log("dialog",this.formGroup.value);
    this.productService.addProduct( {name:this.formGroup.value.name, description:this.formGroup.value.description,clientId:this.id}).subscribe();
    
  }
  back():void{
    this.dialogRef.close();
  }
}
