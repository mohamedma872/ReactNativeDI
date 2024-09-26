// src/services/GreetingService.ts
import { injectable } from 'inversify';
import { IGreetingService } from './IGreetingService';

@injectable()
export class GreetingService implements IGreetingService {
  getGreeting(): string {
    return 'Hello from GreetingService using inversify-react!';
  }
}
