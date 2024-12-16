import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class GraphqlResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello from GraphQL!';
  }
}
