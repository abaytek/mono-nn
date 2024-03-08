import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { add } from '@mono/sample-lib';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(add());
  await app.listen(3000);
}
bootstrap();
