# NestJS Gen AI

## Description

Google Gen AI module for NestJS supports both the Gemini and Vertex AI.

## Installation

```bash
npm i --save nestjs-genai
```

# Usage
```typescript
import { Module } from '@nestjs/common';
import { AIService } from './app.service';
import { GenAIModule } from 'nestjs-genai';

@Module({
  imports: [
    GenAIModule.forRoot({
      apiKey: 'your-api-key-here', // Replace with your actual API key
    }),
  ],
  providers: [AIService],
})
export class AppModule {}
```

```typescript
import { Inject, Injectable } from '@nestjs/common';
import { GENAI_MODELS, Models } from 'nestjs-genai';

@Injectable()
export class AIService {
  constructor(
    @Inject(GENAI_MODELS)
    private readonly models: Models,
  ) {}

  public async getHello(): Promise<string> {
    const response = await this.models.generateContent({
      model: 'gemini-2.0-flash-001', // Replace with your actual model
      contents: 'Say hello to the world in a funny way!', // Replace with your actual content
    });

    return response.text;
  }
}
```

## Stay in touch

[Marcin Stasiak](https://marcinstasiak.pl)

## License

[MIT licensed](https://github.com/marcin-stasiak/nestjs-genai/blob/master/LICENSE)
