"use client";
import React, { useState, useEffect } from "react";

import { load } from "@cashfreepayments/cashfree-js";

let cashfree: any;
let initializeSDK = async function () {
  cashfree = await load({
    mode: "sandbox",
  });
};

const getSessionId = async (setOrderId: (id: string) => void) => {
  try {
    let res = await fetch("http://localhost:3000/api/createOrder", {
      method: "POST",
      body: JSON.stringify({}),
    });
    let data = await res.json();
    console.log(data);
    if (data.payment_session_id) {
      setOrderId(data.payment_session_id);
    }
  } catch (error) {
    console.log(error);
  }
};

const verifyPayment = async (e: any) => {
  try {
    let res = await fetch("http://localhost:3000/api/verifyOrder", {
      method: "POST",
      body: JSON.stringify({ orderId: e }),
    });

    let data = await res.json();
    console.log("verfied", data);

    alert("Payment Verified!");
  } catch (error) {
    console.log(error);
  }
};
interface HandleCheckoutProps {
  setOrderId: (id: string) => void;
  orderId: string;
  setClick: React.Dispatch<React.SetStateAction<() => void>>;
}
const HandleCheckout: React.FC<HandleCheckoutProps> = ({
  setOrderId,
  orderId,
  setClick,
}) => {
  const handlePayment = async () => {
    try {
      await initializeSDK();
      await getSessionId(setOrderId);
      let checkoutOption = {
        paymentSessionId: orderId,
        redirectTarget: "_blank",
      };

      let checkout = await cashfree.checkout(checkoutOption);
      checkout.on("paymentStatus", (e: any) => {
        console.log(e);
        verifyPayment(e);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setClick(handlePayment);
  }, []);

  return <></>;
};

export default HandleCheckout;
