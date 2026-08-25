import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Maintenance gate. Set MAINTENANCE_MODE=true in the host env to show
 * the branded downtime page for all HTML routes.
 */
export function proxy(request: NextRequest) {
  if (process.env.MAINTENANCE_MODE !== "true") {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  if (
    pathname === "/maintenance" ||
    pathname.startsWith("/maintenance/")
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
