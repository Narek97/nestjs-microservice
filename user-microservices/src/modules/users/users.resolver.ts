import { Query, Resolver } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

@Resolver()
export class UsersResolver {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientProxy,
  ) {}

  @Query(() => String)
  getAnalytics() {
    return this.authClient.send('get_analytics', {});
  }
}
