import { DynamicModule, Module, Provider } from '@nestjs/common';
import { GENAI_MODULE_OPTIONS } from './constants/genai.constants';
import { GenAIService } from './genai.service';
import { GenAIModuleAsyncOptions, GenAIModuleOptions } from './interfaces';
import { CachesProvider, ChatsProvider, FilesProvider, ModelsProvider } from './providers';

@Module({
  providers: [],
  exports: [],
})
export class GenAIModule {
  static forRoot(options: GenAIModuleOptions): DynamicModule {
    const optionsProvider: Provider = {
      provide: GENAI_MODULE_OPTIONS,
      useValue: options,
    };

    return {
      module: GenAIModule,
      providers: [optionsProvider, GenAIService, CachesProvider, ChatsProvider, FilesProvider, ModelsProvider],
      exports: [GenAIService, CachesProvider, ChatsProvider, FilesProvider, ModelsProvider],
    };
  }

  static forRootAsync(options: GenAIModuleAsyncOptions): DynamicModule {
    const optionsProvider: Provider = {
      provide: GENAI_MODULE_OPTIONS,
      useFactory: options.useFactory,
      inject: options.inject || [],
    };

    return {
      module: GenAIModule,
      imports: options.imports,
      providers: [optionsProvider, GenAIService, CachesProvider, ChatsProvider, FilesProvider, ModelsProvider],
      exports: [GenAIService, CachesProvider, ChatsProvider, FilesProvider, ModelsProvider],
    };
  }
}
