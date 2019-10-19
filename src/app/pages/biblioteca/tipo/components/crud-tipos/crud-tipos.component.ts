import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-crud-tipos',
  templateUrl: './crud-tipos.component.html',
  styleUrls: ['./crud-tipos.component.css']
})
export class CrudTiposComponent implements OnInit {

  // 1) declarar propiedad tipo FormGroup
  public tiposForm: FormGroup;
// 2) Inyectar from builder en el constructor
  constructor(protected  fb: FormBuilder) {

    // 4llamar createTiposForm en el constructor
    this.createTiposForm();
  }
  // 3) crear metodo para construir formulario
  createTiposForm() {
    this.tiposForm = this.fb.group({
      codigo: ['' , [Validators.required, Validators.maxLength(5)]],
      descripcion: '',
      titulo: '',
      year: ''
    });
  }

  ngOnInit() {
  }

  // metodo para salvar la informacion
  salveForm(data){
    alert(JSON.stringify(data));
  }

}
