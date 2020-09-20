import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', canActivate: [AuthGuard]
  },
  { path:  'register', loadChildren:  './auth/register/register.module#RegisterPageModule' },
  { path:  'login', loadChildren:  './auth/login/login.module#LoginPageModule' },
  { path:  'crudoperation', loadChildren:  './crudoperation/crudoperation.module#CrudoperationPageModule',canActivate: [AuthGuard] },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
