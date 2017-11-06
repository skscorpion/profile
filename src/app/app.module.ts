//moduleimport --start
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule, MatIconModule, MatCheckboxModule, MatButtonModule, MatCardModule, MatMenuModule, 
  MatToolbarModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
 //module import --end

 //component declare-- start
import { AppComponent } from './app.component';
import { AppService } from '../service/app.service';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
// import { PdfDownloaderComponent } from './pdf-downloader/pdf-downloader.component';
// import { BootstrapModalModule } from 'ng2-bootstrap-modal';
// import { ModalPopupComponent } from './modal-popup/modal-popup.component';
//component declare-- end

const appRoutes: Routes = [
  
   { path: '', redirectTo: 'home', pathMatch:'full' }, 
    { path: 'home', component: HomeComponent }, 
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    NavigationComponent,
    FooterComponent,
    // PdfDownloaderComponent,
    // ModalPopupComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatFormFieldModule, 
    MatInputModule,
    NgxCarouselModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only 
  ) 
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
