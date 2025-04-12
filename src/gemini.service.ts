import { Inject, Injectable } from '@nestjs/common';
import { GEMINI_MODULE_OPTIONS } from './constants/gemini.constants';
import { GeminiModuleOptions } from './interfaces/module-options.interface';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class GeminiService {
  private readonly ai: GoogleGenerativeAI;

  constructor(
    @Inject(GEMINI_MODULE_OPTIONS)
    private readonly options: GeminiModuleOptions,
  ) {
    this.ai = new GoogleGenerativeAI(options.apiKey);
  }

  public getGenerativeAI() {
    return this.ai;
  }
}
