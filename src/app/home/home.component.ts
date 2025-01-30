import { Component} from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { PrincipalComponent } from "../principal/principal.component";
import {MatDividerModule} from '@angular/material/divider';
import { CardapioComponent } from "../cardapio/cardapio.component";
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent,
    PrincipalComponent,
    DividerModule,
    CardapioComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
