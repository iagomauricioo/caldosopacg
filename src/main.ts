import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import ScrollReveal from 'scrollreveal';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

ScrollReveal().reveal('.reveal', {
  delay: 150,
  distance: '50%',
  duration: 800,
  easing: 'ease-in',
  origin: 'top', // Vem de baixo para cima
  opacity: 0,
  scale: 1,
  reset: false,
  mobile: true,
  viewFactor: 0.2,
});
