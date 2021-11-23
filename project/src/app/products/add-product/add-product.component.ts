import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent {
  
  name: string = '';
  price: number = 0;

  addForm = this.formBuilder.group(
    {
      name: '',
      price: ''
    });
  
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly location: Location
  ) { }

  onSubmit(): void {
    console.log(this.addForm.value);
  }

  getBack(): void{
    this.location.back();
  }
}
