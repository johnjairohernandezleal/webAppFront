import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {TemplateComponent} from './thema/template/template.component';


// @ts-ignore
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'pages',
    component: TemplateComponent,
    children: [
      {
        path: 'biblioteca',
        loadChildren: './pages/biblioteca/biblioteca.module#BibliotecaModule'
      }
    ]},
  {
    path: 'pages',
    component: TemplateComponent,
    children: [
      {
        path: 'academico',
        loadChildren: './pages/academico/academico.module#AcademicoModule'
      }
    ]},
  {
    path: 'pages',
    component: TemplateComponent,
    children: [
      {
        path: 'administracion',
        loadChildren: './pages/administracion/administracion.module#AdministracionModule'
      }
    ]},
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
