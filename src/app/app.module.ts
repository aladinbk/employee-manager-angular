import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './dashadmin/header/header.component';
import { SidebarComponent } from './dashadmin/sidebar/sidebar.component';
import { FooterComponent } from './dashadmin/footer/footer.component';
import { AddemployeeComponent } from './dashadmin/addemployee/addemployee.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './dashadmin/login/login.component';
import { HomeComponent } from './dashadmin/home/home.component';
import { GestionComponent } from './dashadmin/gestion/gestion.component';
import { HomeuserComponent } from './dashuser/homeuser/homeuser.component';
import { SidebaremployeeComponent } from './dashuser/sidebaremployee/sidebaremployee.component';
import { HeaderemployeeComponent } from './dashuser/headeremployee/headeremployee.component';
import { DemandecongeComponent } from './dashuser/demandeconge/demandeconge.component';
import { CongeService } from './conge.service';
import { DatePipe } from '@angular/common';
import { ListdemandesComponent } from './dashuser/listdemandes/listdemandes.component';
import { ListesdesdemandesComponent } from './dashadmin/listesdesdemandes/listesdesdemandes.component';
import { PageadminComponent } from './dashadmin/pageadmin/pageadmin.component';
import { ContactadminComponent } from './dashadmin/contactadmin/contactadmin.component';
import { DemandercongeComponent } from './dashadmin/demanderconge/demanderconge.component';
import {NgxPrintModule} from 'ngx-print';
import { EditemployeeComponent } from './dashadmin/editemployee/editemployee.component';
import { EditcongeComponent } from './dashadmin/editconge/editconge.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AddemployeeComponent,
    LoginComponent,
    HomeComponent,
    GestionComponent,
    HomeuserComponent,
    SidebaremployeeComponent,
    HeaderemployeeComponent,
    DemandecongeComponent,
    ListdemandesComponent,
    ListesdesdemandesComponent,
    PageadminComponent,
    ContactadminComponent,
    DemandercongeComponent,
    EditemployeeComponent,
    EditcongeComponent
  ],
  imports: [
    BrowserModule,
    NgxPrintModule,
    HttpClientModule,
    FormsModule,
  
    AppRoutingModule,
    
   
  ],
  providers: [EmployeeService,CongeService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
