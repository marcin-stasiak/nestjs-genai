import { Provider } from '@nestjs/common';
import { Models } from '@google/genai';
import { GenAIService } from '../genai.service';
import { GENAI_MODELS } from '../constants/genai.constants';

export const ModelsProvider: Provider<Models> = {
  provide: GENAI_MODELS,
  useFactory: (service: GenAIService) => service.getGenAI().models,
  inject: [GenAIService],
};
