import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('')
export class HelloController {

    @Get()
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url)
        response.status(200).send({ message: 'Hello World'});
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage(){
        return { message: 'Page not found' };
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num + 4;
    }

    @Get('active/:status')
    @UseGuards(AuthGuard)
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        console.log(typeof status);
        return status;
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: { name: string, age: number }) {
        console.log(typeof query.age);
        console.log(typeof query.name);
        return `Hello ${query.name}, you are ${query.age} years old!`;
    }


        
}
