import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageadmin',
  templateUrl: './pageadmin.component.html',
  styleUrls: ['./pageadmin.component.css']
})
export class PageadminComponent implements OnInit {
  user;
  prenom;
  nom;
  grade;
  adresse;
  telephone;
  constructor() { }

  ngOnInit() {
     this.user = JSON.parse(localStorage.getItem('employee'));
    console.log(this.user);
    this.prenom=this.user.prenom;
    this.nom=this.user.nom;
    this.grade=this.user.grade;
    this.adresse=this.user.adresse;
    this.telephone=this.user.telephone;
  }
  

}
