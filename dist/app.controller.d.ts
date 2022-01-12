import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './users/create-user.dto';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(user: CreateUserDto): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
