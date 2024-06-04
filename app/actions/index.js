"use server";

import { signIn, signOut } from "@/auth";
import { addProductToCart } from "@/lib/queries/carts";
import { getSearchedProducts } from "@/lib/queries/products";
import { addOrRemoveFromWishList } from "@/lib/queries/wishlist";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function login(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    throw new Error(error["cause"].err.message);
  }
  revalidatePath("/");
}

async function removeSession() {
  try {
    const signOutPromise = signOut();

    const clearCookiePromise = new Promise((resolve) => {
      cookies().set("session", "", { expires: new Date(0) });
      resolve();
    });

    await Promise.all([signOutPromise, clearCookiePromise]);
  } catch (error) {
    throw error;
  }
  revalidatePath("/");
}

async function updateWishList(userId, productId) {
  try {
    await addOrRemoveFromWishList(userId, productId);
  } catch (error) {
    throw error;
  }
  revalidatePath("/");
}

async function addToCart(userId, productId, quantity) {
  try {
    await addProductToCart(userId, productId, quantity);
  } catch (error) {
    throw error;
  }
  revalidatePath("/");
}

async function searchedProducts(searchTerm) {
  try {
    const products = await getSearchedProducts(searchTerm);
    return products;
  } catch (error) {
    throw error;
  }
  revalidatePath("/");
}

export { addToCart, login, removeSession, searchedProducts, updateWishList };
