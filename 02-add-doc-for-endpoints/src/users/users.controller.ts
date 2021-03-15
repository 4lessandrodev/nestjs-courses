import {
  Controller,
  Post,
  Body,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
import { User, SignupRsp, LoginRsp } from './interfaces/user';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles-guard';
import {
  ApiUseTags,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiUnauthorizedResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@Controller('users')
@ApiUseTags('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('signup')
  @ApiCreatedResponse({ description: 'User has successfully created' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  async signUp(@Body() user: CreateUserDTO): Promise<SignupRsp> {
    return await this.userService.signup(user);
  }
  @Post('login')
  @ApiCreatedResponse({ description: 'User has successfully loggedIn' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  async login(@Body() user: CreateUserDTO): Promise<LoginRsp> {
    return await this.userService.login(user);
  }
  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  @UseGuards(RolesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: 'User has successfully found the profile',
  })
  @ApiUnauthorizedResponse({ description: 'UnAuthorized' })
  async profile(@Request() req) {
    return req.user;
  }
}
