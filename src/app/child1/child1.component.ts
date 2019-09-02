import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test(){
    console.log('test');
  }

  profileForm = new FormGroup({
    gender: new FormControl(''),
    age: new FormControl(''),
  })

  onSubmit() {
    // console.log(this.profileForm.value)
  }
}
