import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {LocalStrategy} from './local.strategy';
import {JwtStrategy} from './jwt.strategy';
import {UsersModule} from '../users/users.module';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import {ConfigModule} from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot(),
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.SECRETKEY,
            signOptions: {expiresIn: '6000s'},
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {
}
