import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent {
  
  formGroup!: FormGroup;
  titleAlert: string = 'This field is required and must be between 5 and 50';
  data: any = '';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly dialogRef: MatDialogRef<AddProductComponent>) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      price: [null, [Validators.required, Validators.min(0), Validators.max(Number.MAX_VALUE)]],
      description: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(500)]]
    });
  }

  onSubmit() {
    console.log()
    this.dialogRef.close(this.formGroup.value);
  }

  close() {
    this.dialogRef.close();
  }

}