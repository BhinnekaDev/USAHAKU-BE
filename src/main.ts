import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  const env = configService.get<string>('NODE_ENV') || 'development';

  app.enableCors({
    origin: '*',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(port);

  console.log('🚀 Usahaku Backend API is running');
  console.log(`🌍 Environment: ${env}`);
  console.log(`🔗 Server: http://localhost:${port}`);
}
bootstrap().catch((err) => {
  console.error('❌ Failed to start application:', err);
  process.exit(1);
});
