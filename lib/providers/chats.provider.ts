import { Provider } from '@nestjs/common';
import { Chats } from '@google/genai';
import { GenAIService } from '../genai.service';
import { GENAI_CHATS } from '../constants/genai.constants';

export const ChatsProvider: Provider<Chats> = {
  provide: GENAI_CHATS,
  useFactory: (service: GenAIService) => service.getGenAI().chats,
  inject: [GenAIService],
};
