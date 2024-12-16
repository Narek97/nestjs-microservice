import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DatabaseModule } from '@/database/database.module';
import Modules from '@/modules'; // Assuming you export all your modules from here
import { performance } from 'node:perf_hooks';

@Module({
  imports: [
    // GraphQL Module setup
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        installSubscriptionHandlers: true,
        autoSchemaFile: true, // Automatically generates the schema
        include: Modules, // Including all the modules dynamically
        path: '/graphql', // Path to your GraphQL endpoint
        buildSchemaOptions: {
          dateScalarMode: 'timestamp', // Custom scalar for date
          numberScalarMode: 'integer', // Custom scalar for numbers
          noDuplicatedFields: true, // Ensure no duplicated fields in the schema
        },
        context: ({ req }) => {
          // You can also log or track request-specific performance here
          const apiStartTime = performance.now();
          return { apiStartTime, user: req.user }; // Pass user or other info if needed
        },
        introspection: true, // Enable introspection for GraphQL
        sortSchema: true, // Sort the schema for better readability
        plugins: [], // Add any plugins for GraphQL (like logging, tracing)
      }),
    }),

    // Dynamically imported modules
    ...Modules, // Ensure Modules contains a valid array of NestJS modules

    // Database module
    DatabaseModule,
  ],
  controllers: [], // You can add your controllers if needed
})
export class AppModule {}
