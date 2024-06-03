import { Component } from '@angular/core';
import {ModalPreGameComponent} from "../../components/modal-pre-game/modal-pre-game.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ModalPreGameComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
