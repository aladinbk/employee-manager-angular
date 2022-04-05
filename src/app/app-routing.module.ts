import { NgModule } from '@angular/core';
import { AddemployeeComponent } from './dashadmin/addemployee/addemployee.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './dashadmin/login/login.component';
import { HomeComponent } from './dashadmin/home/home.component';
import { GestionComponent } from './dashadmin/gestion/gestion.component';
import { HomeuserComponent } from './dashuser/homeuser/homeuser.component';
import { DemandecongeComponent } from './dashuser/demandeconge/demandeconge.component';
import { ListdemandesComponent } from './dashuser/listdemandes/listdemandes.component';
import { ListesdesdemandesComponent } from './dashadmin/listesdesdemandes/listesdesdemandes.component';
import { PageadminComponent } from './dashadmin/pageadmin/pageadmin.component';
import { ContactadminComponent } from './dashadmin/contactadmin/contactadmin.component';
import { DemandercongeComponent } from './dashadmin/demanderconge/demanderconge.component';
import { EditemployeeComponent } from './dashadmin/editemployee/editemployee.component';
import { EditcongeComponent } from './dashadmin/editconge/editconge.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'addemployee', component: AddemployeeComponent},
  {path: 'gestionemployee', component: GestionComponent},
  {path: 'homeemployee', component: HomeuserComponent},
  {path: 'demandeconge', component: DemandecongeComponent},
  {path: 'listdemandes', component: ListdemandesComponent},
  {path: 'listconges', component: ListesdesdemandesComponent},
  {path: 'pageadmin', component: PageadminComponent},
  {path: 'contactadmin', component: ContactadminComponent},
  {path: 'congeadmin', component: DemandercongeComponent},
  {path: 'updateemployee/:id_employer', component: EditemployeeComponent},
  {path: 'updateconge/:idC', component: EditcongeComponent},
  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
