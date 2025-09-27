'use client'

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center p-8 max-w-md shadow-lg rounded-lg bg-white">
          <h2 className="text-2xl font-bold text-red-600 mb-4">⚠️ Oops! Something went wrong.</h2>
          <p className="text-gray-700 mb-6">{error.message}</p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  )
}
