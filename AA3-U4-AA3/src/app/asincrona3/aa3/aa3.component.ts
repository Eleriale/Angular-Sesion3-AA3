import { Component } from '@angular/core';

@Component({
  selector: 'app-aa3',
  templateUrl: './aa3.component.html',
  styleUrls: ['./aa3.component.css']
})
export class Aa3Component {

//cursos!:string[];
cursos = [''];

constructor() {
  this.cursos = [];
}

addCurso(nombrec:string){
    //alert(nombrec);
this.cursos.push(String(nombrec));
}

}
