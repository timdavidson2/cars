import { Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

const URI = process.env.MONGODB_URL;
@Module({
  providers:[
  {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (): Promise<Db> => {
        try {
          const client = await MongoClient.connect( 'mongodb://mongodb:27017/nestjs', { });
            return client.db(URI);
        } catch (e) {
          throw e;
        }
      }
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}



