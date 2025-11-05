import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { FirebaseTokenDto } from './dto/firebase-token.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('firebase')
  @ApiBody({
    type: FirebaseTokenDto,
    description: 'Firebase ID token dari client',
  })
  @ApiResponse({
    status: 201,
    description: 'User berhasil login atau didaftarkan.',
  })
  @ApiResponse({ status: 401, description: 'Token Firebase tidak valid.' })
  async firebaseSignIn(@Body() body: FirebaseTokenDto) {
    const { idToken } = body;
    return this.authService.verifyFirebaseTokenAndGetJwt(idToken);
  }
}
