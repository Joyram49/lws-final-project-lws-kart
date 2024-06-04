import connectToDatabase from "@/lib/dbConnect";
import { checkoutModel } from "@/models/checkoutModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { checkoutInfo, products, sub_total } = await request.json();
    const orderInfo = {
      firstName: checkoutInfo.firstName,
      lastName: checkoutInfo.lastName,
      company: checkoutInfo.company,
      region: checkoutInfo.region,
      street_address: checkoutInfo.street_address,
      city: checkoutInfo.city,
      contact: checkoutInfo.contact,
      email: checkoutInfo.email,
      products,
      sub_total,
      total_amount: sub_total,
    };
    await connectToDatabase();
    await checkoutModel.create(orderInfo);
    return new NextResponse("Congrates!! Your order is completed.", {
      status: 201,
    });
  } catch (err) {
    if (err.message.includes("ECONNREFUSED")) {
      return new NextResponse("Database connection refused", { status: 503 });
    }

    return new NextResponse(err.message || "Internal Server Error", {
      status: 500,
    });
  }
};
