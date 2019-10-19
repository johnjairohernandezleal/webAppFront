import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { EditorialComponent } from './editorial/editorial.component';
import { AutoresComponent } from './autores/autores.component';
import { TipoComponent } from './tipo/tipo.component';
import { AreasComponent } from './areas/areas.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { LibrosComponent } from './libros/libros.component';
import { ListarEditorialComponent } from './editorial/components/listar-editorial/listar-editorial.component';
import { CrudEditorialComponent } from './editorial/components/crud-editorial/crud-editorial.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CrudAreasComponent } from './areas/components/crud-areas/crud-areas.component';
import { ListarAreasComponent } from './areas/components/listar-areas/listar-areas.component';
import { CrudAutoresComponent } from './autores/components/crud-autores/crud-autores.component';
import { ListarAutoresComponent } from './autores/listar-autores/listar-autores.component';
import { CrudLibrosComponent } from './libros/components/crud-libros/crud-libros.component';
import { ListarLibrosComponent } from './libros/components/listar-libros/listar-libros.component';
import { CrudTiposComponent } from './tipo/components/crud-tipos/crud-tipos.component';
import { ListarTiposComponent } from './tipo/components/listar-tipos/listar-tipos.component';


@NgModule({
  declarations: [
    EditorialComponent,
    AutoresComponent,
    TipoComponent,
    AreasComponent,
    ExistenciaComponent,
    LibrosComponent,
    ListarEditorialComponent,
    CrudEditorialComponent,
    CrudAreasComponent,
    ListarAreasComponent,
    CrudAutoresComponent,
    ListarAutoresComponent,
    CrudLibrosComponent,
    ListarLibrosComponent,
    CrudTiposComponent,
    ListarTiposComponent
  ],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BibliotecaModule { }
