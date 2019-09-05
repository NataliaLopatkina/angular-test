import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http/http.service';
import { User } from './classes/user/user';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})

export class AppComponent implements OnInit {
  users: User[]=[];
  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.httpService.getData().subscribe((data:User) => this.users=data['userList'])
  }
}
