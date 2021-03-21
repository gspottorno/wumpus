import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManualComponent } from './components/manual/manual.component';
import { JuegoComponent } from './components/juego/juego.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'manual', component: ManualComponent },
  { path: 'juego', component: JuegoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
