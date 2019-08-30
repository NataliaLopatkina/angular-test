import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = new FormControl('');
  lastName = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  personalInfo = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    })
  })

  personalInfoBuilder = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    })
  })

  personalInfoArray = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),

    aliases: this.fb.array([
      this.fb.control('')
    ])
  })

  get aliases() {
    return this.personalInfoArray.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  handlerSubmit() {
    console.log(this.name);
  }

  handlerSubmitGroup() {
    console.log(this.profileForm);
  }

  updateName() {
    this.name.setValue('Nancy');
  }

  handlerSubmitNestedGroup() {
    console.log(this.personalInfo);
  }

  updatePersonalInfo() {
    this.personalInfo.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      }
    })
  }

  updatePersonalInfoBuilder() {
    this.personalInfoBuilder.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      }
    })
  }

  constructor(private fb: FormBuilder) {}
}
