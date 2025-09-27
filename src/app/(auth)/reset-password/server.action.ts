"use server";

type Input = { email: string; newPassword: string };

export async function resetPasswordAction(data: Input): Promise<true | string | null> {
  try {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      cache: 'no-store'
    });
    const json = await res.json();
    if (res.ok && json?.token) return true;
    return json?.message || 'Reset failed';
  } catch (e) {
    return 'Network error';
  }
}


