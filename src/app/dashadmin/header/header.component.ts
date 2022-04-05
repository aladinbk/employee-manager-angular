import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usernom;
  constructor() { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('employee'));
    console.log(user);
    this.usernom= user.username;
    
  }

}
