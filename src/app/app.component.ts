import { Component } from '@angular/core';
import { Persona } from './entities/Persona';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

const samples = [
  new Persona('Juan', 'Perez', 43, '12345678A', 'Amarillo', 'Hombre', new Date()),
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Agenda';
  displayedColumns: string[] = ['nombre', 'apellidos', 'fechaNacimiento', 'edad', 'dni', 'color', 'sexo', 'actions'];
  personas: Persona[] = samples;
  personaActual: Persona = new Persona();
  editMode: boolean = false;
  
  constructor(public dialog: MatDialog) {}

  onAddPersona() {
    this.personaActual = new Persona();
    this.editMode = false;
    this.openDialog();
  }

  onEditPersona(index: number) {
    this.personaActual = this.personas[index];
    this.editMode = true;
    this.openDialog();
  }

  onDeletePersona(index: number) {
    this.personas.splice(index, 1);
    this.personas = [ ...this.personas ];
  }

  addPersona(personaData: any) {
    const persona = new Persona(
      personaData.nombre, 
      personaData.apellidos, 
      personaData.edad,
      personaData.dni,
      personaData.color,
      personaData.sexo,
      personaData.fechaNacimiento
    );
    this.personas = [...this.personas, persona];
  }

  editPersona(personaData: any) {
    this.personaActual.nombre = personaData.nombre;
    this.personaActual.apellidos = personaData.apellidos;
    this.personaActual.edad = personaData.edad;
    this.personaActual.dni = personaData.dni;
    this.personaActual.color = personaData.color;
    this.personaActual.sexo = personaData.sexo;
    this.personaActual.fechaNacimiento = personaData.fechaNacimiento;
    this.personas = [...this.personas];
  }

  openDialog(): void {
    const dialgoRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        persona: this.personaActual.toObject(),
        editMode: this.editMode
      }
    });

    dialgoRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      console.log('result :>> ', result);

      if (this.editMode) {
        this.editPersona(result);
      } else {
        this.addPersona(result);
      } 
      
      console.log(this.personas);
      this.personaActual = new Persona();
    });
    
  }
}
