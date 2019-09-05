import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {

  items: string[] = [];
  constructor(private dataService: DataService) { }

  addItem(name: string) {

    this.dataService.addData(name);
  }
  ngOnInit() {
    this.items = this.dataService.getData();
  }

}
