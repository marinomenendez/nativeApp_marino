import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton } from '@ionic/angular/standalone';
import { Native } from '../services/native';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, RouterLink],
})
export class HomePage {

  lat: number | null = null;
  lng: number | null = null;
  dato: string | null = null;

  constructor(private native: Native) {}


  async obtenerUbicacion() {
    const coords = await this.native.getLocation();
    this.lat = coords.latitude;
    this.lng = coords.longitude;
  }

  async guardar() {
    await this.native.guardarDato('clave', 'valor Ionic');
  }

  async leer() {
    this.dato = await this.native.obtenerDato('clave');
  }

}
