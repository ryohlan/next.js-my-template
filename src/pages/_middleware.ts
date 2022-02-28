import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const requiredBasicAuth = process.env.BASIC_AUTH === 'true'
  const isImageRequest = req.headers.get('accept')?.includes('image/png')
  if (requiredBasicAuth && !isImageRequest) {
    const basicAuth = req.headers.get('authorization')
    if (basicAuth) {
      const auth = basicAuth.split(' ')[1]
      const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

      if (user === process.env.BASIC_AUTH_USER_NAME && pwd === process.env.BASIC_AUTH_USER_PASSWORD) {
        return NextResponse.next()
      }
    }

    return new Response('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  } else {
    return NextResponse.next()
  }
}
