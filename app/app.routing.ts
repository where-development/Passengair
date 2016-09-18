import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterUserComponent }  from './register-user/register-user.component';
import { BecomeHostComponent }  from './become-host/become-host.component';
import { HomePageComponent }  from './homepage/homepage.component';
import { PageNotFoundComponent }  from './pagenotfound.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: HomePageComponent,
    data: {
      title: 'Passengair - Welcome'
    } 
  },
  { 
    path: 'register', 
    component: RegisterUserComponent,
    data: {
      title: 'Register - Passengair'
    } 
  },
  { 
    path: 'become_host', 
    component: HomePageComponent,
    data: {
      title: 'Become Host - Passengair'
   }
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
