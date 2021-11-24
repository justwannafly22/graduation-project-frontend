import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent {
  
  formGroup!: FormGroup;
  titleAlert: string = 'This field is required and must be between 5 and 50';
  post: any = '';

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    let numberRegEx = /^\d*[1-9]\d*$/;

    this.formGroup = this.formBuilder.group({
      'name': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      'price': [null, [Validators.required, Validators.pattern(numberRegEx)]],
      'weight': [null, [Validators.required, Validators.pattern(numberRegEx)]]
    });
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  getErrorPrice() {
    return this.formGroup.get('price')?.hasError('required') ? 'Field is required' :
      this.formGroup.get('price')?.hasError('pattern') ? 'Not a valid price. Price can be only a positive number.' : '';
  }

  getErrorWeight(){
    return this.formGroup.get('weight')?.hasError('required') ? 'Field is required' :
      this.formGroup.get('weight')?.hasError('pattern') ? 'Not a valid weight. Weight can be only a positive number.' : '';
  }

  onSubmit(post: any) {
    this.post = post;
  }

}