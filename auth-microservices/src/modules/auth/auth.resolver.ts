import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from '@/modules/auth/auth.service';
import { MessagePattern } from '@nestjs/microservices';
import { Auth } from '@/modules/auth/models/dbmodels/auth.model';
import { Controller } from '@nestjs/common';

@Controller()
@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => String)
  async authenticate(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<string> {
    // In real-world cases, implement your authentication logic here
    return `Authenticated ${username} with password ${password}`;
  }

  // @EventPattern('user_created')
  // handleUserCreated(data: CreateUserEvent) {
  //   this.appService.handleUserCreated(data);
  // }

  @MessagePattern('get_analytics')
  getAnalytics() {
    return 'hello world 123';
  }
}
