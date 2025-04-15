import { Provider } from '@nestjs/common';
import { Files } from '@google/genai';
import { GenAIService } from '../genai.service';
import { GENAI_FILES } from '../constants/genai.constants';

export const FilesProvider: Provider<Files> = {
  provide: GENAI_FILES,
  useFactory: (service: GenAIService) => service.getGenAI().files,
  inject: [GenAIService],
};
