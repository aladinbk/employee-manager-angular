import { Component, OnInit } from '@angular/core';
import { CongeService } from '../../conge.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Conge } from '../../conge';

@Component({
  selector: 'app-demanderconge',
  templateUrl: './demanderconge.component.html',
  styleUrls: ['./demanderconge.component.css']
})
export class DemandercongeComponent implements OnInit {
  cong: Conge = new Conge();
  DateFin: any;
  DateDebut: any;
  description: any;
  type: any;
  nbr: number;

  calc = false;
  start: any;
  end: any;
  date: Date;
  date1: Date;
  Dateb:any;
  DateF:any;
  constructor(private congesService: CongeService,public datepipe: DatePipe, private router:Router) { }

  ngOnInit() {
   
  }
   user = JSON.parse(localStorage.getItem('employee'));

 



  demander(data: any) {  
    console.log(data);
    this.DateF = new Date(data.dateFin).getTime();
    data.DateFin =this.datepipe.transform(this.DateF, 'yyyy-MM-dd');
    this.cong.dateFin = data.DateFin;
    console.log(this.cong.dateFin);
    this.Dateb = new Date(data.dateDebut).getTime();
    data.DateDebut =this.datepipe.transform(this.Dateb, 'yyyy-MM-dd');
    this.cong.dateDebut = data.DateDebut;
    console.log(this.cong.dateDebut);
    this.cong.description = data.description;
    this.Dateb = new Date(data.DateDebut).getTime();
    this.DateF = new Date(data.DateFin).getTime();
  
    this.cong.dure= (this.DateF - this.Dateb)/ 86400000;
    this.cong.status = "0";
    this.cong.type = data.type;
    this.cong.id_employer=this.user.id_employer;
    console.log(this.cong);
    this.congesService.AddConge(this.cong);
    alert('Votre demande est effectué');
    this.router.navigateByUrl('listconges');
  }


}
