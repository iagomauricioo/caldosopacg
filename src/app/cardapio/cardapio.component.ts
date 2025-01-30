import { Component, HostListener } from '@angular/core';
import { NgFor } from '@angular/common';
import { MenuItemsDTO } from '../menu-items-dto';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from '../card/card.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [NgFor, MatGridListModule, CardComponent],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css',
})
export class CardapioComponent {
  cols = 1;

  @HostListener('window:resize', ['$event'])
  onResize() {
    const width = window.innerWidth;
    if (width < 600) {
      this.cols = 1; // Celulares
    } else if (width < 960) {
      this.cols = 2; // Tablets
    } else {
      this.cols = 3; // Desktop
    }
  }

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe((result) => {
        if (result.matches) {
          this.cols = 1; // Mobile
        } else {
          this.cols = 3; // Desktop
        }
      });
  }

  menuItems: MenuItemsDTO[] = [
    {
      name: 'Caldo de Frango',
      description:
        'Um caldo cremoso e reconfortante, preparado com frango desfiado, temperos especiais e um toque de carinho.',
      details: '350ml R$ 12,00 / 500ml R$ 15,00',
      price: 12.0,
      image:
        'https://images.pexels.com/photos/1703272/pexels-photo-1703272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      whatsappLink:
        'https://api.whatsapp.com/send?phone=558293127500&text=Quero%20Caldo%20de%20Frango!',
    },
    {
      name: 'Caldo de Frango, Bacon e Calabresa',
      description:
        'A combinação perfeita entre o sabor do frango, a suculência do bacon e o toque defumado da calabresa.',
      details: '350ml R$ 13,00 / 500ml R$ 16,00',
      price: 13.0,
      image:
        'https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      whatsappLink:
        'https://api.whatsapp.com/send?phone=558293127500&text=Quero%20Caldo%20de%20Frango%20Bacon%20e%20Calabresa!',
    },
    {
      name: 'Caldo de Charque',
      description:
        'Um caldo robusto e cheio de sabor, feito com charque cozido lentamente para garantir maciez e um gosto irresistível.',
      details: '350ml R$ 15,00 / 500ml R$ 18,00',
      price: 15.0,
      image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg',
      whatsappLink:
        'https://api.whatsapp.com/send?phone=558293127500&text=Quero%20Caldo%20de%20Charque!',
    },
    {
      name: 'Caldo de Feijão',
      description:
        'Feijão bem temperado e cremoso, feito com especiarias e aquele toque caseiro que aquece o coração.',
      details: '350ml R$ 10,00 / 500ml R$ 13,00',
      price: 10.0,
      image:
        'https://images.pexels.com/photos/724667/pexels-photo-724667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      whatsappLink:
        'https://api.whatsapp.com/send?phone=558293127500&text=Quero%20Caldo%20de%20Feijao!',
    },
    {
      name: 'Caldo de Camarão',
      description:
        'Um caldo sofisticado, preparado com camarões frescos, leite de coco e temperos especiais para um sabor marcante.',
      details: '350ml R$ 15,00 / 500ml R$ 18,00',
      price: 15.0,
      image:
        'https://images.pexels.com/photos/688802/pexels-photo-688802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      whatsappLink:
        'https://api.whatsapp.com/send?phone=558293127500&text=Quero%20Caldo%20de%20Camarao!',
    },
    {
      name: 'Sopa',
      description:
        'Uma sopa rica e bem temperada, com ingredientes selecionados e um aroma irresistível.',
      details: '900ml R$ 18,00',
      price: 18.0,
      image:
        'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      whatsappLink:
        'https://api.whatsapp.com/send?phone=558293127500&text=Quero%20Sopa!',
    },
  ];
}
