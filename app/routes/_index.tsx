import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "JournAI - AI-Powered Memory Journal" },
    { name: "description", content: "Your intelligent companion for capturing and reflecting on life's moments" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            JournAI
          </h1>
          <div className="flex items-center space-x-4">
            <a
              href="/login"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Log in
            </a>
            <a
              href="/signup"
              className="rounded-lg bg-blue揽-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white sm:text-6xl">
          Smarter Journaling, <br className="hidden sm:inline" />
          Powered by AI
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
          JournAI helps you capture, organize, and reflect on your memories with
          intelligent insights and personalized prompts.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <a
            href="/signup"
            className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white hover:bg-blue-700"
          >
            Start Your Journey
          </a>
          <a
            href="/features"
            className="rounded-lg border border-gray-300 px-8 py-3 text-lg font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
          >
            How It Works
          </a>
        </div>
      </main>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              AI-Powered Insights
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Get meaningful patterns and reflections from your entries.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Smart Organization
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Automatically categorize and tag your memories.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Personalized Prompts
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Get tailored questions to deepen your reflections.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} JournAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
