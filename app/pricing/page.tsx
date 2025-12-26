"use client";

import { getPaddle } from "../../lib/paddle";
export default function PricingPage() {
  const handleCheckout = async () => {
    const paddle = await getPaddle();

    paddle?.Checkout.open({
      items: [
        {
          priceId: "pri_TEST_ID", // luego lo cambiamos
          quantity: 1,
        },
      ],
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleCheckout}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        Pagar con Paddle
      </button>
    </div>
  );
}
