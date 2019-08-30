import { Component, OnInit } from '@angular/core';
import { Hero } from './clases/hero';

@Component({
  selector: 'app-form-driven',
  templateUrl: './form-driven.component.html',
  styleUrls: ['./form-driven.component.scss']
})
export class FormDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(1, '', 'Super Flexible');

  newHero() {
    this.model = new Hero(1, '', '');
  }

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    console.log(this.model);
  }
}
