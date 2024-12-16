import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DatabaseModule } from '@/database/database.module';
import Modules from '@/modules';
import { performance } from 'node:perf_hooks';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        installSubscriptionHandlers: true,
        autoSchemaFile: true,
        include: Modules,
        path: '/graphql',
        buildSchemaOptions: {
          dateScalarMode: 'timestamp',
          numberScalarMode: 'integer',
          noDuplicatedFields: true,
        },
        context: () => ({
          apiStartTime: performance.now(),
        }),
        introspection: true,
        sortSchema: true,
        plugins: [],
      }),
    }),
    ...Modules,
    DatabaseModule,
  ],
  controllers: [],
})
export class AppModule {}
