import { Component} from '@angular/core';
import { CardComponent } from '../card/card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { PrincipalComponent } from "../principal/principal.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    MatGridListModule,
    NavComponent,
    FooterComponent,
    PrincipalComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
