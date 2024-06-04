import connectToDatabase from "@/lib/dbConnect";
import { replaceMongoIdInObject } from "@/lib/utils/data-util";
import { productModel } from "@/models/productModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { productId } = params;
    await connectToDatabase();
    const product = await productModel.findById(productId).lean();
    const response = replaceMongoIdInObject(product);

    if (response?.id) {
      return NextResponse.json(response, { status: 200 });
    }
  } catch (err) {
    return new NextResponse(err.message || "Internal Server Error", {
      status: 500,
    });
  }
}
