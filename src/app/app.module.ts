import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ActivitiesComponent } from './activities/activities.component';
import { PublicationsComponents } from './publications/publications.component';
import { ContactsComponent } from './contacts/contacts.component';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

// const config: SocketIoConfig = { url: 'http://nodejsjuanprojects-tweetnode.rhcloud.com/', options: { reconnect: false } };
const config: SocketIoConfig = { url: 'http://127.0.0.1:8080/', options: { reconnect: false } };

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CurriculumComponent,
    ActivitiesComponent,
    PublicationsComponents,
    ContactsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'bem-vindo', component: HomeComponent },
      { path: 'curriculo', component: CurriculumComponent },
      { path: 'areas-de-actividade', component: ActivitiesComponent },
      { path: 'publicações', component: PublicationsComponents },
      { path: 'contactos', component: ContactsComponent },
      { path: '', redirectTo: 'bem-vindo', pathMatch: 'full' },
      { path: '**', redirectTo: 'bem-vindo', pathMatch: 'full' }
    ]),
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
