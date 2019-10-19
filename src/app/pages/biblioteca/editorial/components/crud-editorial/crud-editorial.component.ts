import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-editorial',
  templateUrl: './crud-editorial.component.html',
  styleUrls: ['./crud-editorial.component.css']
})
export class CrudEditorialComponent implements OnInit {

  public codigo: string;
  public descripcion: string;
  private numeroDeCaracteres: any;

  constructor() { }

  ngOnInit() {
  }

  salveForm(){
    alert('la informacion salvada es:' + this.descripcion);
  }

  showLength(data, max) {
    if (data.length > max){
      this.numeroDeCaracteres = data.length;

      alert('el maximo de caracteres es de ' + max + 'numero de caracteres' + this.numeroDeCaracteres);
    }
    console.log(data);
  }

}
