import { TestBed } from '@angular/core/testing';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';
import { DBTaskService } from './db-task.service';

describe('DBTaskService', () => {
  let service: DBTaskService;
  let storage: Storage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicStorageModule.forRoot()],
      providers: [DBTaskService],
    }).compileComponents();

    service = TestBed.inject(DBTaskService);
    storage = TestBed.inject(Storage);
    await storage.create();
  });

  afterEach(async () => {
    await storage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize storage on initialization', async () => {
    spyOn(storage, 'create').and.returnValue(Promise.resolve(storage));
    await service.init();
    expect(storage.create).toHaveBeenCalled();
  });

  it('should create the table if it does not exist', async () => {
    await service.createTable();
    const table = await storage.get(service['TABLE_NAME']);
    expect(table).toEqual([]);
  });

  it('should set an object in the table', async () => {
    const data = { username: 'test', password: '123' };
    await service.setObject(data);
    const table = await storage.get(service['TABLE_NAME']);
    expect(table).toEqual([data]);
  });

  it('should check if there is an active session', async () => {
    const session1 = { username: 'user1', password: 'pass1', active: true };
    const session2 = { username: 'user2', password: 'pass2', active: false };
    await storage.set(service['TABLE_NAME'], [session1, session2]);

    const hasActiveSession = await service.hasActiveSession();

    expect(hasActiveSession).toBe(true);
  });

  it('should validate a user', async () => {
    const session1 = { username: 'user1', password: 'pass1', active: true };
    const session2 = { username: 'user2', password: 'pass2', active: false };
    await storage.set(service['TABLE_NAME'], [session1, session2]);

    const isValidUser = await service.validateUser('user1', 'pass1');

    expect(isValidUser).toBe(true);
  });

  it('should register a session', async () => {
    const session = { username: 'user1', password: 'pass1', active: true };
    await service.registerSession(session.username, session.password);
    const table = await storage.get(service['TABLE_NAME']);
    expect(table).toEqual([session]);
  });

  it('should update the active state of a session', async () => {
    const session1 = { username: 'user1', password: 'pass1', active: true };
    const session2 = { username: 'user2', password: 'pass2', active: false };
    await storage.set(service['TABLE_NAME'], [session1, session2]);

    await service.updateSessionActiveState('user1', false);

    const table = await storage.get(service['TABLE_NAME']);
    expect(table).toEqual([
      { username: 'user1', password: 'pass1', active: false },
      { username: 'user2', password: 'pass2', active: false },
    ]);
  });

  it('should logout all sessions', async () => {
    const session1 = { username: 'user1', password: 'pass1', active: true };
    const session2 = { username: 'user2', password: 'pass2', active: true };
    const session3 = { username: 'user3', password: 'pass3', active: false };
    await storage.set(service['TABLE_NAME'], [session1, session2, session3]);

    await service.logout();

    const table = await storage.get(service['TABLE_NAME']);
    expect(table).toEqual([
      { username: 'user1', password: 'pass1', active: false },
      { username: 'user2', password: 'pass2', active: false },
      { username: 'user3', password: 'pass3', active: false },
    ]);
  });

  // Resto de las pruebas y funcionalidades del servicio...

  // Función para verificar y asegurar que el almacenamiento esté inicializado
  async function checkStorage(): Promise<Storage> {
    if (!service['_storage']) {
      await service.init();
    }
    return service['_storage'] as Storage;
  }
});
