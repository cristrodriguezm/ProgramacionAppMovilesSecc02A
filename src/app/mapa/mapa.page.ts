import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { CapacitorGoogleMaps, Geolocation } = Plugins;

@Component({
  selector: 'app-mapa',
  templateUrl: 'mapa.page.html',
  styleUrls: ['mapa.page.scss'],
})
export class MapaPage implements OnInit {
  constructor() {}

  async ngOnInit() {
    const mapElement = document.getElementById('map');

    if (mapElement) {
      const map = await CapacitorGoogleMaps['create']({
        id: 'my-map',
        element: mapElement,
        apiKey: 'AlzaSyBqUGhkLQ95ojLjQiM2SzrVcmIQyaFgM_Q',
        config: {
          zoom: 8,
        },
      });

      // Obtener las coordenadas de ubicación actual
      const coordinates = await Geolocation['getCurrentPosition']();

      // Agregar un marcador en la ubicación actual
      const marker = await map.addMarker({
        position: {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude,
        },
      });

      // Mover la cámara a la ubicación actual
      await map.moveCamera({
        target: {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude,
        },
        zoom: 10,
      });
    }
  }
}
