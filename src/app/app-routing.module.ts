import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { CapitulosComponent } from './components/capitulos/capitulos.component';
import { PermissionsGuard } from './guards/permissions.guard';

const routes: Routes = [
{path:'', redirectTo: 'login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'registro', component: RegistroComponent},
{path: 'personajes', component: PersonajesComponent, canActivate:[PermissionsGuard],  },
{path: 'capitulos', component: CapitulosComponent, canActivate:[PermissionsGuard],  },
{path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)],
  exports: [
  RouterModule]
  })

export class AppRoutingModule { }
