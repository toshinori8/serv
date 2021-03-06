import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './elements/nav/nav.component';
import { JumbotronComponent } from './elements/jumbotron/jumbotron.component';
import { AlbumsComponent } from './albums/albums.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlbumComponent } from './albums/album/album.component';
import { FooterComponent } from './elements/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AlbumsService } from './albums/albums.service';
import { SecretComponent } from './pages/secret/secret.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { BleinterfacesComponent } from './pages/bleinterfaces/bleinterfaces.component';
import { HeaderComponent } from './elements/header/header.component';
import { BleScanService} from './services/ble-scan.service';
var fs = require('fs');
//declare var noble: any;
declare var mqtt: any;

declare var fs:any;




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    JumbotronComponent,
    AlbumsComponent,
    AlbumComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    SecretComponent,
    AlbumDetailsComponent,
    AlbumListComponent,
    DashboardComponent,
    BleinterfacesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard, AuthService, AlbumsService, BleScanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
