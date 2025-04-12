import { GeminiModuleOptions } from './module-options.interface';

export interface GeminiModuleAsyncOptions {
  useFactory: (...args: any[]) => Promise<GeminiModuleOptions> | GeminiModuleOptions;
  inject?: any[];
}