import { NextResponse } from "next/server";
import { Cashfree } from "cashfree-pg";
import crypto from "crypto";

Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;
function generateOrderId() {
  const uniqueId = crypto.randomBytes(16).toString("hex");

  const hash = crypto.createHash("sha256");
  hash.update(uniqueId);

  const orderId = hash.digest("hex");

  return orderId.substr(0, 12);
}

async function createOrder() {
  let request = {
    order_amount: 1.0,
    order_currency: "INR",
    order_id: await generateOrderId(),
    customer_details: {
      customer_id: "order01",
      customer_phone: "9999999999",
      customer_name: "Shreyal",
      customer_email: "example@gmail.com",
    },
  };
  try {
    let res = await Cashfree.PGCreateOrder("2023-08-01", request);

    return res.data;
  } catch (err) {
    return err;
  }
}
export async function POST(request: Request, response: Response) {
  const body: any = await request.json();
  const order: any = await createOrder();
  console.log(order);
  return NextResponse.json(order);
}
