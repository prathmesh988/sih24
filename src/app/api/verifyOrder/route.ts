import { NextResponse } from "next/server";
import { Cashfree } from "cashfree-pg";

export async function POST(request: Request, response: Response) {
  try {
    const requestBody = await request.json();
    Cashfree.PGOrderFetchPayments("2023-08-01", requestBody.orderId)
      .then((response) => {
        NextResponse.json(response.data);
      })
      .catch((error) => {
        NextResponse.json(error);
      });
  } catch (error) {
    console.log(error);
  }
  return;
}
