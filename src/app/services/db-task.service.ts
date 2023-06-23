import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable()
export class DBTaskService {
  private _storage: Storage | null = null;
  private TABLE_NAME = 'sesion_data';

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Función para crear la tabla necesaria para el funcionamiento de la aplicación
  async createTable() {
    await this.checkStorage();
    const isTableExists = await this._storage?.get(this.TABLE_NAME);
    if (!isTableExists) {
      await this._storage?.set(this.TABLE_NAME, []);
    }
  }

  // Función para setear un objeto en la tabla
  async setObject(data: any) {
    await this.checkStorage();
    const table = (await this._storage?.get(this.TABLE_NAME)) || [];
    table.push(data);
    await this._storage?.set(this.TABLE_NAME, table);
  }

  // Función para consultar si existe alguna sesión activa
  async hasActiveSession(): Promise<boolean> {
    await this.checkStorage();
    const table = await this._storage?.get(this.TABLE_NAME);
    const activeSessions = table?.filter((session: any) => session.active === true);
    return activeSessions?.length > 0;
  }

  // Función para validar la existencia de un usuario que inicia sesión
  async validateUser(username: string, password: string): Promise<boolean> {
    await this.checkStorage();
    const table = await this._storage?.get(this.TABLE_NAME);
    const user = table?.find((session: any) => session.user_name === username && session.password === password);
    return !!user;
  }

  // Función para registrar una sesión
  async registerSession(username: string, password: string) {
    await this.checkStorage();
    const session = {
      user_name: username,
      password: password,
      active: true
    };
    const table = (await this._storage?.get(this.TABLE_NAME)) || [];
    table.push(session);
    await this._storage?.set(this.TABLE_NAME, table);
  }

  // Función para actualizar el estado "active" de una sesión
  async updateSessionActiveState(username: string, active: boolean) {
    await this.checkStorage();
    const table = await this._storage?.get(this.TABLE_NAME);
    const session = table?.find((session: any) => session.user_name === username);
    if (session) {
      session.active = active;
      await this._storage?.set(this.TABLE_NAME, table);
    }
  }

  // Función para cerrar sesión
  async logout() {
    await this.checkStorage();
    const table = await this._storage?.get(this.TABLE_NAME);
    const activeSessions = table?.filter((session: any) => session.active === true);
    activeSessions.forEach((session: any) => {
      session.active = false;
    });
    await this._storage?.set(this.TABLE_NAME, table);
  }

  // Resto de métodos y funcionalidades del servicio...

  // Función para verificar y asegurar que el almacenamiento está inicializado
  private async checkStorage() {
    if (!this._storage) {
      await this.init();
    }
  }
}
