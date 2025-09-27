import { decode, JWT } from "next-auth/jwt";
import { cookies } from "next/headers";

type CustomJWT = JWT & { credentialsToken?: string };

export async function getUserToken(): Promise<string | null> {
  const cookieStore = await cookies();

  const sessionToken =
    cookieStore.get("__Secure-next-auth.session-token")?.value ||
    cookieStore.get("next-auth.session-token")?.value ||
    cookieStore.get("Next-Auth.session-Token")?.value ||
    null;

  if (!sessionToken) return null;

  const decoded: CustomJWT | null = await decode({
    token: sessionToken,
    secret: process.env.NEXTAUTH_SECRET || "",
  });

  return decoded?.credentialsToken ?? null;
}
