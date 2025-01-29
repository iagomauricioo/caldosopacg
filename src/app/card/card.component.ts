import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  menuItems = [
    {
      name: "Caldo de Frango",
      options: [
        { size: "350ml", price: 12.00 },
        { size: "500ml", price: 15.00 }
      ]
    },
    {
      name: "Caldo de Frango, bacon e calabresa",
      options: [
        { size: "350ml", price: 13.00 },
        { size: "500ml", price: 16.00 }
      ]
    },
    {
      name: "Caldo de Charque",
      options: [
        { size: "350ml", price: 15.00 },
        { size: "500ml", price: 18.00 }
      ]
    },
    {
      name: "Caldo de Feijão",
      options: [
        { size: "350ml", price: 10.00 },
        { size: "500ml", price: 13.00 }
      ]
    },
    {
      name: "Caldo de Camarão",
      options: [
        { size: "350ml", price: 15.00 },
        { size: "500ml", price: 18.00 }
      ]
    },
    {
      name: "Sopa",
      options: [
        { size: "900ml", price: 18.00 }
      ]
    }
  ];
}
