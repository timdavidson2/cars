import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
// import { join } from 'path';

const URI = process.env.MONGODB_URL;
// const definitionsFactory = new GraphQLDefinitionsFactory();
@Module({
  imports: [
    MongooseModule.forRoot( 'mongodb://mongodb:27017/nestjs', {
      connectionFactory: (connection) => {
        connection.plugin(require('mongoose-autopopulate'));
        return connection;
      }
    }),
    GraphQLModule.forRoot({ 
      playground:  true,
      debug:  true,
      installSubscriptionHandlers: true,
      autoSchemaFile:true,
}),
],
    controllers: [AppController],   
    providers: [AppService],
})
export class AppModule {}

