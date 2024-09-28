import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className="h-screen w-full grid place-items-center">
    <div className="flex flex-col gap-5 max-w-xs w-full">
      {/* <img src="/public/images/meroticket-logo.png" alt="" /> */}
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-blue hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
          >
            Sign in
          </button>
        </div>
      </form>
      <p className="text-xs text-center">
        By continuing, you have read and agree to our Terms and Conditions
        and Privacy Statement.
      </p>
      <p className="mt-5 text-center text-sm text-gray-500">
        Need an account ?&nbsp;
        <Link href="/register" className="font-semibold leading-6 text-blue">
          Register
        </Link>
      </p>
      <Link
        href="/"
        className="text-gray-400 hover:text-gray-600 duration-300 ease-in-out transform text-center mt-5 underline text-xs"
      >
        Back to home
      </Link>
    </div>
  </div>
  )
}

export default Login