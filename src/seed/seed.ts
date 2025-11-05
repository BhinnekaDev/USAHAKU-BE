import { NestFactory } from '@nestjs/core';
import { getModelToken } from '@nestjs/mongoose';
import { User } from '../users/schemas/user.schema';
import { SeedModule } from './seed.module';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(SeedModule);
  const userModel = appContext.get(getModelToken(User.name));

  // cek apakah sudah ada data
  const count = await userModel.countDocuments();
  if (count > 0) {
    console.log('⚠️  User collection already has data, skipping seed.');
    await appContext.close();
    return;
  }

  // seed data awal
  const users = [
    {
      uid: 'uuid1',
      email: 'superadmin@usahaku.com',
      nama: 'Super Admin',
      provider: 'local',
      roles: [],
      lastLogin: new Date(),
    },
    {
      uid: 'uuid2',
      email: 'admin@usahaku.com',
      nama: 'Admin Biasa',
      provider: 'local',
      roles: [],
      lastLogin: new Date(),
    },
    {
      uid: 'uuid3',
      email: 'pengunjung@usahaku.com',
      nama: 'Pengunjung Awal',
      provider: 'google',
      roles: [],
      lastLogin: new Date(),
    },
  ];

  await userModel.insertMany(users);
  console.log('✅ User seed data inserted successfully.');

  await appContext.close();
}

bootstrap().catch((err) => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
