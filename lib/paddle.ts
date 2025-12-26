import { initializePaddle } from "@paddle/paddle-js";

let paddlePromise: ReturnType<typeof initializePaddle> | null = null;

export function getPaddle() {
  if (!paddlePromise) {
    paddlePromise = initializePaddle({
      environment: process.env.NEXT_PUBLIC_PADDLE_ENV!,
      token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN!,
    });
  }
  return paddlePromise;
}
