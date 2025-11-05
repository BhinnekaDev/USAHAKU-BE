import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';
import { AppModule } from './app.module';

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

  const config = new DocumentBuilder()
    .setTitle('Usahaku API')
    .setDescription(
      'API documentation untuk backend Usahaku (NestJS + MongoDB + Firebase Auth)',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  if (!getApps().length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: (process.env.FIREBASE_PRIVATE_KEY ?? '').replace(
          /\\n/g,
          '\n',
        ),
      }),
    });
    console.log('🔥 Firebase admin initialized in main.ts');
  } else {
    console.log('⚙️ Firebase already initialized, reusing existing app');
  }

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(port);

  console.log('🚀 Usahaku Backend API is running');
  console.log(`🌍 Environment: ${env}`);
  console.log(`🔗 Server: http://localhost:${port}`);
}
bootstrap().catch((err) => {
  console.error('❌ Failed to start application:', err);
  process.exit(1);
});
