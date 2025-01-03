import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Chat - JournAI" },
    { name: "description", content: "Your AI-powered chat interface" },
  ];
};

export default function Chat() {
  return (
    <div className="flex h-screen flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="border-b bg-white px-4 py-3 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            JournAI Chat
          </h1>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mx-auto max-w-4xl space-y-4">
          {/* AI Message */}
          <div className="flex items-start space-x-3">
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-500"></div>
            <div className="max-w-[75%] rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-200">
                Hello! I'm JournAI. How can I assist you today?
              </p>
              <span className="mt-1 block text-xs text-gray-400 dark:text-gray-500">
                10:32 AM
              </span>
            </div>
          </div>

          {/* User Message */}
          <div className="flex items-start justify-end space-x-3">
            <div className="max-w-[75%] rounded-lg bg-blue-500 p-4 text-white shadow-sm">
              <p>Hi! Can you help me reflect on my day?</p>
              <span className="mt-1 block text-xs text-blue-100">
                10:33 AM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="border-t bg-white px-4 py-3 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <button className="rounded-lg bg-blue揽-500 px-4 py-2 text-white hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
