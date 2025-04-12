import { DynamicModule, Module, Provider } from '@nestjs/common';
import { GeminiModuleOptions } from './interfaces/module-options.interface';
import { GEMINI_MODULE_OPTIONS } from './constants/gemini.constants';
import { GeminiService } from './gemini.service';
import { GeminiModuleAsyncOptions } from './interfaces/gemini-module-async-options.interface';

@Module({})
export class GeminiModule {
  static forRoot(options: GeminiModuleOptions): DynamicModule {
    const optionsProvider: Provider = {
      provide: GEMINI_MODULE_OPTIONS,
      useValue: options,
    };

    return {
      module: GeminiModule,
      providers: [optionsProvider, GeminiService],
      exports: [GeminiService],
    };
  }

  static forRootAsync(options: GeminiModuleAsyncOptions): DynamicModule {
    const optionsProvider: Provider = {
      provide: GEMINI_MODULE_OPTIONS,
      useFactory: options.useFactory,
      inject: options.inject || [],
    };

    return {
      module: GeminiModule,
      providers: [optionsProvider, GeminiService],
      exports: [GeminiService],
    };
  }
}
