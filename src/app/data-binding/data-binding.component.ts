import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  nom="nada";
  surname="benfarah"


updateName(newName:string) {
console.log(newName)
this.surname = newName.toString();
console.log(this.nom);
}
getSuName() {
return this.surname;
}
getName() {
return this.nom;
}


  message: string = 'Bonjour, monde!';

   color="blue";

  changerMessage(): void {
    this.message = 'Helloo ,benfarah nada!';
    }




}