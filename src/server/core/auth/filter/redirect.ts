import { ArgumentsHost, Catch, ExceptionFilter, HttpException, UnauthorizedException } from '@nestjs/common'

@Catch(UnauthorizedException)
export class RedirectFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse()
    console.log("redirect")
    res.status(302).redirect('/auth')
  }
}
