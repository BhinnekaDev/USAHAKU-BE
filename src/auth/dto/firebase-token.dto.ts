import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class FirebaseTokenDto {
  @ApiProperty({
    description: 'Firebase ID token yang didapat setelah login dengan Google',
    example: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY5NzJhY...',
  })
  @IsString()
  idToken: string;
}
