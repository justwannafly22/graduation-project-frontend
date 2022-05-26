import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-virtual-cv',
  templateUrl: './dialog-virtual-cv.component.html',
  styleUrls: ['./dialog-virtual-cv.component.scss'],
})
export class DialogVirtualCvComponent {
  public user!: any;
  public checked = false;
  public formGroup!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogVirtualCvComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder:FormBuilder
  ) {
    this.user = data.user[0];
    this.initializeForm();
  }
  initializeForm(){
    this.formGroup = this.formBuilder.group({
      name:[''],
      location:[''],
      description:[''],
      diagnostic:['']
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  submit():void{
    console.log("dialog",this.formGroup.value);
    
  }
}