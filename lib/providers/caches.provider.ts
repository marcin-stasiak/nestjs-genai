import { Provider } from '@nestjs/common';
import { Caches } from '@google/genai';
import { GenAIService } from '../genai.service';
import { GENAI_CACHES } from '../constants/genai.constants';

export const CachesProvider: Provider<Caches> = {
  provide: GENAI_CACHES,
  useFactory: (service: GenAIService) => service.getGenAI().caches,
  inject: [GenAIService],
};
