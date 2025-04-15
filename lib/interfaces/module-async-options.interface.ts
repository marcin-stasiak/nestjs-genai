import { GenAIModuleOptions } from './module-options.interface';
import { ModuleMetadata } from '@nestjs/common';

export interface GenAIModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (...args: any[]) => Promise<GenAIModuleOptions> | GenAIModuleOptions;
  inject?: any[];
}
