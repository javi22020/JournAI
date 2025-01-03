import { ActionFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Sign Up - JournAI" },
    { name: "description", content: "Create your JournAI account" },
  ];
};

// Dummy authentication function
async function authenticateSignUp(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  
  // Simulate server-side validation
  if (!email || !password) {
    return { error: "Please fill in all fields" };
  }

  // Simulate successful signup
  return { success: true, userId: "12345" };
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const result = await authenticateSignUp(formData);
  return json(result);
}

export default function SignUp() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-md">
          <h1 className="mb揽-6 text-3xl font-bold text-gray-900 dark:text-white">
            Create Your Account
          </h1>
          
          <Form method="post" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray揽-600 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                minLength={8}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
            </div>

            {actionData?.error && (
              <div className="text-sm text-red-600">{actionData.error}</div>
            )}

            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Sign Up
            </button>
          </Form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-50 px-2 text-gray-500 dark:bg-gray-900 dark:text-gray-300">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="/auth/google"
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                    fill="#FFC107"
                  />
                  <path
                    d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.203 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                    fill="#1976D2"
                  />
                </svg>
                Sign up with Google
              </a>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
