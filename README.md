This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
lws-kart
├─ .env
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     └─ heads
│  │        └─ master
│  ├─ objects
│  │  ├─ 0d
│  │  │  └─ c9ea2bcc4104b736ec1c0cf6e6e0d8d82ab07d
│  │  ├─ 18
│  │  │  └─ 2cd5e1b7b0f624758c8b796521d0e5584cecbe
│  │  ├─ 1a
│  │  │  └─ 69fd2a450afc3bf47e08b22c149190df0ffdb4
│  │  ├─ 2a
│  │  │  └─ 2e4b3bf8ba1c86d96fc2f5786597ad77a0e5e9
│  │  ├─ 46
│  │  │  └─ 78774e6d606704bce1897a5dab960cd798bf66
│  │  ├─ 51
│  │  │  └─ 74b28c565c285e3e312ec5178be64fbeca8398
│  │  ├─ 71
│  │  │  └─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  ├─ 78
│  │  │  └─ ebc4e710e1caad46480c919eca9241b11a0694
│  │  ├─ 87
│  │  │  └─ 5c01e819b90038f0c3e4aee2a4dcc2086b0e14
│  │  ├─ 9a
│  │  │  └─ ef1df7d6c3d50515ab62f578c5cc963a1243a7
│  │  ├─ a7
│  │  │  └─ c20368391e36f75ac6fa7468a714610377d595
│  │  ├─ bf
│  │  │  └─ fb357a7122523ec94045523758c4b825b448ef
│  │  ├─ c5
│  │  │  └─ a9341a0671d9e3e8374ce5971bbdf7228f58e4
│  │  ├─ c8
│  │  │  └─ 7505312bcc9b76328e5f4f4cdc7a96cbb21d8e
│  │  ├─ c9
│  │  │  └─ 21e1fbd81ece49ec69314dae201597ec7cc5a1
│  │  ├─ d2
│  │  │  └─ f84222734f27b623d1c80dda3561b04d1284af
│  │  ├─ e0
│  │  │  └─ 3304285aebe3bea002f1fde336679d3f323b45
│  │  ├─ fb
│  │  │  └─ 94137227613046771254624f2141fe405ce848
│  │  ├─ fd
│  │  │  └─ 3dbb571a12a1c3baf000db049e141c888d05a8
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     └─ tags
├─ .gitignore
├─ app
│  ├─ (auth)
│  │  ├─ @modal
│  │  │  ├─ (..)
│  │  │  └─ default.js
│  │  ├─ login
│  │  │  └─ page.js
│  │  └─ register
│  │     └─ page.js
│  ├─ (public)
│  │  ├─ account
│  │  │  └─ [userId]
│  │  │     ├─ checkout
│  │  │     │  └─ page.js
│  │  │     ├─ page.js
│  │  │     └─ wishlist
│  │  │        └─ page.js
│  │  ├─ layout.js
│  │  ├─ product-details
│  │  │  └─ [productId]
│  │  │     └─ page.js
│  │  └─ shop
│  │     └─ page.js
│  ├─ actions
│  │  └─ index.js
│  ├─ api
│  │  ├─ auth
│  │  │  ├─ refreshToken
│  │  │  │  └─ route.js
│  │  │  ├─ register
│  │  │  │  └─ route.js
│  │  │  └─ [...nextauth]
│  │  │     └─ route.js
│  │  ├─ checkout
│  │  │  └─ route.js
│  │  ├─ user
│  │  │  └─ [userId]
│  │  │     └─ route.js
│  │  └─ wishlist
│  │     └─ [productId]
│  │        └─ route.js
│  ├─ context
│  │  └─ index.js
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ hooks
│  │  ├─ useCheckout.js
│  │  ├─ usePreviousRoute.js
│  │  └─ useQuantity.js
│  ├─ layout.js
│  ├─ page.js
│  └─ provider
│     ├─ AuthProvider.js
│     ├─ CheckoutProvider.js
│     └─ QuantityProvider.js
├─ auth.js
├─ components
│  ├─ account
│  │  ├─ BillingAddress.jsx
│  │  ├─ Profile.jsx
│  │  └─ ShippingAddress.jsx
│  ├─ auth
│  │  ├─ LoginForm.jsx
│  │  ├─ RegistratioForm.jsx
│  │  ├─ SocialLogin.jsx
│  │  └─ SubmitButton.jsx
│  ├─ checkout
│  │  ├─ Checkout.jsx
│  │  ├─ OrderBtn.jsx
│  │  ├─ OrderItem.jsx
│  │  └─ OrderSummary.jsx
│  ├─ common
│  │  ├─ CopyRight.jsx
│  │  ├─ Footer.jsx
│  │  ├─ header
│  │  │  ├─ Account.jsx
│  │  │  ├─ Header.jsx
│  │  │  ├─ ShoppingCartBtn.jsx
│  │  │  └─ WishListBtn.jsx
│  │  ├─ modal
│  │  │  ├─ billing
│  │  │  │  ├─ BillingModal.jsx
│  │  │  │  └─ UpdateForm.jsx
│  │  │  ├─ cart
│  │  │  │  ├─ CartItemCard.jsx
│  │  │  │  └─ CartsModal.jsx
│  │  │  ├─ profileModal
│  │  │  │  ├─ ProfileModal.jsx
│  │  │  │  └─ UpdateForm.jsx
│  │  │  ├─ shipping
│  │  │  │  ├─ ShippingModal.jsx
│  │  │  │  └─ UpdateForm.jsx
│  │  │  └─ wishList
│  │  │     ├─ WishItemCard.jsx
│  │  │     └─ WishListModal.jsx
│  │  ├─ navbar
│  │  │  ├─ Logout.jsx
│  │  │  ├─ Navbar.jsx
│  │  │  └─ NavigationBars.jsx
│  │  ├─ Portal.jsx
│  │  └─ ui
│  │     ├─ AddToCartBtn.jsx
│  │     ├─ AddToWishList.jsx
│  │     ├─ BreadCrumb.jsx
│  │     ├─ loader
│  │     │  └─ LoadingSpinner.jsx
│  │     ├─ Rating.jsx
│  │     ├─ SocialSharing.jsx
│  │     ├─ Star.jsx
│  │     └─ WishListBtn.jsx
│  ├─ home
│  │  ├─ Ads.jsx
│  │  ├─ Banner.jsx
│  │  ├─ category
│  │  │  ├─ CategoryItem.jsx
│  │  │  └─ CategoryList.jsx
│  │  ├─ Features.jsx
│  │  ├─ newArrival
│  │  │  ├─ NewArrivalItem.jsx
│  │  │  └─ NewArrivalList.jsx
│  │  ├─ ShopBtn.jsx
│  │  └─ trending
│  │     ├─ ProductItem.jsx
│  │     └─ ProductList.jsx
│  ├─ productDetails
│  │  ├─ description
│  │  │  └─ ProductDescription.jsx
│  │  ├─ details
│  │  │  ├─ Availlbility.jsx
│  │  │  ├─ Details.jsx
│  │  │  ├─ ModifyQuantity.jsx
│  │  │  └─ ProductImageGallery.jsx
│  │  └─ related
│  │     ├─ RelatedProductItem.jsx
│  │     └─ RelatedProductList.jsx
│  ├─ shop
│  │  ├─ Drawer.jsx
│  │  ├─ IonIcon.jsx
│  │  ├─ products
│  │  │  ├─ ProductItem.jsx
│  │  │  └─ ProductList.jsx
│  │  └─ sidebar
│  │     ├─ Categories.jsx
│  │     ├─ Price.jsx
│  │     ├─ Sidebar.jsx
│  │     └─ Sizes.jsx
│  └─ wishlist
│     ├─ RemoveWishListBtn.jsx
│     ├─ WishList.jsx
│     └─ WishListItem.jsx
├─ jsconfig.json
├─ lib
│  ├─ dbConnect.js
│  ├─ mongoClientPromise.js
│  ├─ queries
│  │  ├─ carts
│  │  │  └─ index.js
│  │  ├─ categories
│  │  │  └─ index.js
│  │  ├─ products
│  │  │  └─ index.js
│  │  ├─ reviews
│  │  │  └─ index.js
│  │  ├─ users
│  │  │  └─ index.js
│  │  └─ wishlist
│  │     └─ index.js
│  └─ utils
│     ├─ data-util.js
│     ├─ decryptToken.js
│     ├─ getAverageRating.js
│     ├─ getNewToken.js
│     ├─ getPriceAfterDiscount.js
│     ├─ getSession.js
│     ├─ getStarFillArray.js
│     ├─ getSubtotal.js
│     ├─ removeSession.js
│     └─ updateToken.js
├─ middleware.js
├─ models
│  ├─ addressModel.js
│  ├─ cartModel.js
│  ├─ categoryModel.js
│  ├─ checkoutModel.js
│  ├─ productModel.js
│  ├─ reviewModel.js
│  ├─ userModel.js
│  └─ wishListModel.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ images
│  │  ├─ avatar.png
│  │  ├─ banner-bg.jpg
│  │  ├─ category
│  │  │  ├─ category-1.jpg
│  │  │  ├─ category-2.jpg
│  │  │  ├─ category-3.jpg
│  │  │  ├─ category-4.jpg
│  │  │  ├─ category-5.jpg
│  │  │  ├─ category-6.jpg
│  │  │  └─ index.js
│  │  ├─ complete.png
│  │  ├─ favicon
│  │  │  ├─ about.txt
│  │  │  ├─ android-chrome-192x192.png
│  │  │  ├─ android-chrome-512x512.png
│  │  │  ├─ apple-touch-icon.png
│  │  │  ├─ favicon-16x16.png
│  │  │  ├─ favicon-32x32.png
│  │  │  ├─ favicon.ico
│  │  │  └─ site.webmanifest
│  │  ├─ icons
│  │  │  ├─ bed-2.svg
│  │  │  ├─ bed.svg
│  │  │  ├─ delivery-van.svg
│  │  │  ├─ index.js
│  │  │  ├─ money-back.svg
│  │  │  ├─ office.svg
│  │  │  ├─ outdoor-cafe.svg
│  │  │  ├─ phone.svg
│  │  │  ├─ restaurant.svg
│  │  │  ├─ service-hours.svg
│  │  │  ├─ sofa.svg
│  │  │  └─ terrace.svg
│  │  ├─ logo-white.svg
│  │  ├─ logo.svg
│  │  ├─ methods.png
│  │  ├─ offer.jpg
│  │  └─ products
│  │     ├─ index.js
│  │     ├─ product1.jpg
│  │     ├─ product10.jpg
│  │     ├─ product11.jpg
│  │     ├─ product12.jpg
│  │     ├─ product2.jpg
│  │     ├─ product3.jpg
│  │     ├─ product4.jpg
│  │     ├─ product5.jpg
│  │     ├─ product6.jpg
│  │     ├─ product7.jpg
│  │     ├─ product8.jpg
│  │     └─ product9.jpg
│  ├─ next.svg
│  └─ vercel.svg
├─ README.md
└─ tailwind.config.js

```