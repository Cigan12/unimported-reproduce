import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [
                `./src/server/.env.${process.env.NODE_ENV}`,
                './src/server/.env',
            ],
            isGlobal: true,
        }),
        GraphQLModule.forRoot({
            playground: {
                settings: {
                    'request.credentials': 'include',
                },
            },
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            context: ({ req, res }) => ({ req, res }),
            cors: {
                origin: process.env.ORIGIN,
                credentials: true,
            },
        }),
    ],
    providers: [AppService],
})
export class AppModule {}
