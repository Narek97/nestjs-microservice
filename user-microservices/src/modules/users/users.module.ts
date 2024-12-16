import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  providers: [UsersResolver, UsersService],
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_MICROSERVICE',
        transport: Transport.TCP,
        options: { port: 5003 },
      },
    ]),
  ],
  exports: [UsersService],
})
export class UsersModule {}
