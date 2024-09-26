// src/inversify.config.ts
import 'reflect-metadata';
import { Container } from 'inversify';
import { IGreetingService } from './services/IGreetingService';
import { GreetingService } from './services/GreetingService';
import TYPES  from './types/types';

const container = new Container();

container.bind<IGreetingService>(TYPES.IGreetingService).to(GreetingService);

export { container };
