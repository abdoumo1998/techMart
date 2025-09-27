"use server";

type Input = { email: string };

export async function forgotPasswordAction(data: Input): Promise<true | string | null> {
  try {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      cache: 'no-store'
    });
    const json = await res.json();
    if (res.ok && json?.statusMsg === 'success') return true;
    return json?.message || 'Request failed';
  } catch (e) {
    return 'Network error';
  }
}


