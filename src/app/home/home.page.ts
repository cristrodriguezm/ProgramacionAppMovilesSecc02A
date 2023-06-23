import { Component, OnInit } from '@angular/core';
import { DBTaskService } from '../services/db-task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  segmentValue: string = '';

  constructor(private dbTaskService: DBTaskService) {}

  ngOnInit() {
    this.checkActiveSession();
  }

  async checkActiveSession() {
    const hasActiveSession = await this.dbTaskService.hasActiveSession();

    if (hasActiveSession) {
      console.log('Hay una sesión activa');
      // Realiza las acciones necesarias cuando hay una sesión activa
    } else {
      console.log('No hay una sesión activa');
      // Realiza las acciones necesarias cuando no hay una sesión activa
    }
  }
}
