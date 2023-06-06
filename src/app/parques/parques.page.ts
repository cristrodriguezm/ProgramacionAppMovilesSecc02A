import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.page.html',
  styleUrls: ['./parques.page.scss'],
})
export class ParquesPage {
  images: string[] = [
    'assets/images/letreros/letrero1.jpg',
    'assets/images/letreros/letrero2.png',
    'assets/images/letreros/letrero3.jpg',
  ];
  currentImage?: string;
  currentIndex?: number;
 

  parques: any[] = [
    { id: 1, nombre: 'Parque La Campana' },
    { id: 2, nombre: 'Parque Metropolitano de Santiago' },
  ];

  constructor(private router: Router) {}

  verDetalleParque(parqueId: number) {
    if (parqueId === 1) {
      this.router.navigate(['/parques/campana']);
    } else if (parqueId === 2) {
      this.router.navigate(['/parques/metropolitano']);
    }
  }

  ngOnInit() {
    this.currentIndex = 0;
    this.currentImage = this.images[this.currentIndex];

    setInterval(() => {
      this.currentIndex = (this.currentIndex! + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 2000); // Cambia de imagen cada 5 segundos (5000 milisegundos)
  }
}
