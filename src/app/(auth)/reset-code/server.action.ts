"use server";

type Input = { resetCode: string };

export async function verifyResetCodeAction(data: Input): Promise<true | string | null> {
  try {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      cache: 'no-store'
    });
    const json = await res.json();
    if (res.ok && json?.status === 'Success') return true;
    return json?.message || 'Verification failed';
  } catch (e) {
    return 'Network error';
  }
}


