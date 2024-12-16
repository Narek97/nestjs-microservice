import { Module } from '@nestjs/common';
import { AuthResolver } from '@/modules/auth/auth.resolver';
import { AuthService } from '@/modules/auth/auth.service';

@Module({
  providers: [AuthResolver, AuthService],
  controllers: [AuthResolver],
  imports: [],
  exports: [AuthService],
})
export class AuthModule {}
