import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const middleware = (req: NextRequest): NextResponse => {
  if (process.env.NODE_ENV !== "production") return NextResponse.next();
  const basicAuth = req.headers.get("authorization");

  if (basicAuth) {
    const [user, pwd] = atob(basicAuth.split(" ")[1]).split(":");
    if (
      user === process.env.BASIC_AUTH_USER &&
      pwd === process.env.BASIC_AUTH_PASSWORD
    )
      return NextResponse.next();
  }

  const url = req.nextUrl;
  url.pathname = "/api/auth";
  return NextResponse.rewrite(url);
};

export { middleware };
