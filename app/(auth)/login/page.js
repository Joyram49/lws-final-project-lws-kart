import LoginForm from "@/components/auth/LoginForm";
import SocialLogin from "@/components/auth/SocialLogin";
import { getSession } from "@/lib/utils/getSession";
import Link from "next/link";
import { redirect } from "next/navigation";

async function LoginPage() {
  const session = await getSession();
  if (session?.id) {
    redirect("/");
  }
  return (
    <main>
      <div className='contain py-16'>
        <div className='max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden'>
          <h2 className='text-2xl uppercase font-medium mb-1'>Login</h2>
          <p className='text-gray-600 mb-6 text-sm'>welcome back customer</p>
          <LoginForm />

          {/* <!-- login with --> */}
          <div className='mt-6 flex justify-center relative'>
            <div className='text-gray-600 uppercase px-3 bg-white z-10 relative'>
              Or login with
            </div>
            <div className='absolute left-0 top-3 w-full border-b-2 border-gray-200'></div>
          </div>
          <SocialLogin />
          {/* <!-- ./login with --> */}

          <p className='mt-4 text-center text-gray-600'>
            Don't have account?
            <Link href='/register' className='text-primary ml-2'>
              Register now
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
