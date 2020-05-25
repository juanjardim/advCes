import { ContactsComponent } from './contacts/contacts.component';
import { PublicationsComponent } from './publications/publications.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'bem-vindo', component: HomeComponent },
  { path:'curriculo', component: CurriculumComponent },
  { path:'areas-de-actividade', component: ActivitiesComponent },
  { path:'publicações', component: PublicationsComponent },
  { path:'contactos', component: ContactsComponent },
  { path: '',   redirectTo: 'bem-vindo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
