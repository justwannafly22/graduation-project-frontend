import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ProductsService } from 'src/app/modules/products/services/product.service';
import { RepairsService } from 'src/app/modules/repairs/services/repairs.service';
import { ProductResponseInterface } from 'src/app/shared/interfaces/product/product-response.interface';
import { RepairsRequestInterface } from 'src/app/shared/interfaces/repairs/repairs-request.interface';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';
import { DialogAddTechnick } from '../dialog-add-technic/dialog-add-technic.component';

@Component({
  selector: 'app-dialog-virtual-cv',
  templateUrl: './dialog-virtual-cv.component.html',
  styleUrls: ['./dialog-virtual-cv.component.scss'],
})
export class DialogVirtualCvComponent {
  public part:string = this.persistanServ.get('part');
  public id:string = this.persistanServ.get('id');
  public user!: any;
  public checked = false;
  public formGroup!: FormGroup;
  private diagnostick!:boolean;
  public listProducts!:any;
  constructor(
    public dialogRef: MatDialogRef<DialogVirtualCvComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder:FormBuilder,
    public dialog: MatDialog,
    private persistanServ:PersistanceService,
    private repairService:RepairsService,
    private productService:ProductsService
  ) {
    this.user = data.user[0];
    this.initializeForm();
    this.productService.getProductByClient(this.id).subscribe(item=>{
this.listProducts = item;
    })
  }
  /* "name": "string",
  "date": "2022-05-28T09:51:14.179Z",
  "advancedInfo": "string",
  "status": "string",
  "masterId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "clientId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"*/
  initializeForm(){
    this.formGroup = this.formBuilder.group({
      name:[''],
      date:[''],
      product:[''],
      advancedInfo:[''],
     // diagnostic:['']
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  addTechnic():void{
    const dialogRef = this.dialog.open(DialogAddTechnick, {
      width: 'auto',
      data: { user: 'sdcsdc', data: 'sdcsdc' },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
  submit():void{
    /*name: string, +
    date: Date, + 
    advancedInfo: string, + 
    status: string, - 
    masterId:string, - 
    clientId:string */ + 
    console.log("dialog",this.formGroup.value);
//diagnostick
    let rep:RepairsRequestInterface = {name:this.formGroup.value.name,product:this.formGroup.value.product,date:this.formGroup.value.date,advancedInfo:this.formGroup.value.advancedInfo,status:"PENDING",masterId:undefined,clientId:this.id}
    this.repairService.addRepair(rep).subscribe()
    if(this.diagnostick == true){
      rep.name = 'diagnostick';
      this.repairService.addRepair(rep).subscribe();
    }
    
  }
}
