import { Inject, Injectable } from '@nestjs/common';
import { GENAI_MODULE_OPTIONS } from './constants/genai.constants';
import { GoogleGenAI } from '@google/genai';
import { GenAIModuleOptions } from './interfaces';

@Injectable()
export class GenAIService {
  private readonly ai: GoogleGenAI;

  constructor(
    @Inject(GENAI_MODULE_OPTIONS)
    private readonly options: GenAIModuleOptions,
  ) {
    if (!options) {
      throw new Error('No option has been set!');
    }

    this.ai = new GoogleGenAI(options);
  }

  public getGenAI(): GoogleGenAI {
    return this.ai;
  }
}
