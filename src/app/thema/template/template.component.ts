import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  public menu = [];

  constructor() { }

  ngOnInit() {
    this.menu = this.getMenu();
  }
  getMenu() {
    return [
      {
        descripcion: 'DashBoard',
        link: '/pages/dashboard',
        child: false,
        childrens: []
      },
      {
        descripcion: 'Biblioteca',
        link: '',
        child: true,
        childrens: [
          {
            descripcion: 'Areas',
            link: '/pages/biblioteca/areas',
          },
          {
            descripcion: 'Autores',
            link: '/pages/biblioteca/autores',
          },
          {
            descripcion: 'Editorial',
            link: '/pages/biblioteca/editorial',
          },
          {
            descripcion: 'Exitencia',
            link: '/pages/biblioteca/existencia',
          },
          {
            descripcion: 'Libros',
            link: '/pages/biblioteca/libros',
          },
          {
            descripcion: 'Tipos',
            link: '/pages/biblioteca/tipo',
          },
        ],
      },
      {
        descripcion: 'Academico',
        link: '',
        child: true,
        childrens: [
          {
            descripcion: 'Aulas',
            link: '/pages/academico/aulas',
          },
          {
            descripcion: 'Docentes',
            link: '/pages/academico/docentes',
          },
          {
            descripcion: 'Estudiantes',
            link: '/pages/academico/estudiantes',
          },
          {
            descripcion: 'Grados',
            link: '/pages/academico/grados',
          },
          {
            descripcion: 'Materias',
            link: '/pages/academico/materias',
          }
        ],
      },
      {
        descripcion: 'Administracion',
        link: '',
        child: true,
        childrens: [
          {
            descripcion: 'Modulos',
            link: '/pages/administracion/modulos',
          },
          {
            descripcion: 'Roles',
            link: '/pages/administracion/roles',
          },
          {
            descripcion: 'Usuarios',
            link: '/pages/administracion/usuarios',
          }
        ],
      }

    ];
  }

}
