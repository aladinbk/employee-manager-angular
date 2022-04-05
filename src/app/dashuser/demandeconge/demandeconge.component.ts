import { Component, OnInit } from '@angular/core';
import { Conge } from '../../conge';
import { CongeService } from '../../conge.service';
import { FormGroup } from '@angular/forms/src/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-demandeconge',
  templateUrl: './demandeconge.component.html',
  styleUrls: ['./demandeconge.component.css']
})
export class DemandecongeComponent implements OnInit {
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
  res:any;

  constructor(private congesService: CongeService,public datepipe: DatePipe, private router:Router) { }

  ngOnInit() {
   const  user = JSON.parse(localStorage.getItem('employee'));
   console.log(user);
   this.cong.dure;

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
    this.router.navigateByUrl('listdemandes');

  }


}
