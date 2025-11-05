import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private usersService: UsersService) {}

  async verifyFirebaseTokenAndGetJwt(idToken: string) {
    try {
      const decoded = await admin.auth().verifyIdToken(idToken);
      const uid = decoded.uid;
      const email = decoded.email;
      const name = decoded.name || decoded.displayName;
      const picture = decoded.picture || decoded.firebase?.identities?.picture;
      const phoneNumber = decoded.phone_number;

      const user = await this.usersService.upsertFromFirebase({
        uid,
        email,
        name,
        picture,
        phoneNumber,
        provider: 'google',
      });

      return { user };
    } catch (err) {
      this.logger.error('Firebase token verification failed', err);
      throw new UnauthorizedException('Invalid Firebase ID token');
    }
  }
}
