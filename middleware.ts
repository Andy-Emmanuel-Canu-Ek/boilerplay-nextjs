import { NextRequest, NextResponse } from 'next/server';
import { SESSION_TOKEN } from 'shared/constants/key_storages';
import { privatePaths, publicPaths } from 'shared/constants/paths';

export default function middleware(req: NextRequest, res: NextResponse, next: any) {
  const { cookies } = req;
  const token = cookies.get(SESSION_TOKEN);
  const sessionHasExpired = !token;
  const url = req.nextUrl.clone();

  if (sessionHasExpired) {
    if (privatePaths.includes(url.pathname)) {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  }

  if (!sessionHasExpired) {
    if (publicPaths.includes(url.pathname)) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
