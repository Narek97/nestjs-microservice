import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ORIGIN, PORT } from './common/constants';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule, {
  //   abortOnError: false,
  //   autoFlushLogs: true,
  //   bodyParser: true,
  //   cors: true,
  // });
  //
  // app.enableCors({
  //   credentials: true,
  //   origin: ORIGIN,
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   preflightContinue: false,
  //   optionsSuccessStatus: 204,
  // });
  //
  // app.setGlobalPrefix('/api');
  //
  // app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: false }));
  //
  // await app.listen(PORT);

  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 5003,
    },
  });
  await app.startAllMicroservices();
  await app.listen(5001);
}

bootstrap()
  .then(() => console.log(`App is running in port ${PORT}`))
  .catch(console.error);
