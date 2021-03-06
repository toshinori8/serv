import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';



import { BleinterfacesComponent } from './pages/bleinterfaces/bleinterfaces.component'


import { SecretComponent } from './pages/secret/secret.component';


import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'albums',
    component: AlbumsComponent,
    children: [
      { path: '', component: AlbumListComponent },
      { path: 'view/:id', component: AlbumDetailsComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'setup', component: AboutComponent },
  { path: 'bleinterfaces', component: BleinterfacesComponent },
  { path: 'secret', component: SecretComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
