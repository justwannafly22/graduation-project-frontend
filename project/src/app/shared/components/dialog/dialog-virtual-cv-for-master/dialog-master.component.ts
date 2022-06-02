import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-master',
  templateUrl: './dialog-master.component.html',
  styleUrls: ['./dialog-master.component.scss'],
})
export class DialogForMaster {
  public statuses:any[] = ["expectation",
    "during",
    "ready"];
  public user!: any;
  public checked = false;
  public formGroup!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogForMaster>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder:FormBuilder
  ) {
    this.user = data.user[0];
    this.initializeForm();
  }
  back():void{
    this.dialogRef.close();
  }
  initializeForm(){
    this.formGroup = this.formBuilder.group({
      name:[''],
      location:[''],
      description:[''],
      diagnostic:[''],
      status:['']
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  submit():void{
    console.log("dialog",this.formGroup.value);
    
  }
}
