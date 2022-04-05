import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headeremployee',
  templateUrl: './headeremployee.component.html',
  styleUrls: ['./headeremployee.component.css']
})
export class HeaderemployeeComponent implements OnInit {
  usernom;
  constructor() { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('employee'));
    this.usernom = user.username;
  }

}
