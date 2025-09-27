import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";
import { JWT } from "next-auth/jwt";

interface CustomJWT extends JWT {
  credentialsToken?: string;
}

export async function getUserToken(): Promise<string | null> {
  const cookie = await cookies();
  const sessionToken =
    cookie.get("__Secure-next-auth.session-token")?.value ||
    cookie.get("next-auth.session-token")?.value ||
    cookie.get("Next-Auth.session-Token")?.value ||
    null;

  if (!sessionToken) return null;

  const decodedToken = await decode({
    token: sessionToken,
    secret: process.env.NEXTAUTH_SECRET || ''
  }) as CustomJWT | null;

  return decodedToken?.credentialsToken ?? null;
}