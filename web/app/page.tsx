export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full border-collapse text-left">
          <tbody>
            <tr className="border-b border-gray-200">
              <th className="w-1/2 bg-gray-50 px-6 py-4 font-semibold text-gray-900">Author</th>
              <td className="px-6 py-4 text-gray-700">Desislava Todorova</td>
            </tr>
            <tr className="border-b border-gray-200">
              <th className="w-1/2 bg-gray-50 px-6 py-4 font-semibold text-gray-900">Email</th>
              <td className="px-6 py-4 text-gray-700">dpt2024@students.softuni.bg</td>
            </tr>
            <tr className="border-b border-gray-200">
              <th className="w-1/2 bg-gray-50 px-6 py-4 font-semibold text-gray-900">GitHub Repo</th>
              <td className="px-6 py-4 text-gray-700">https://github.com/dpt2024it/db-hw</td>
            </tr>
            <tr className="border-b border-gray-200">
              <th className="w-1/2 bg-gray-50 px-6 py-4 font-semibold text-gray-900">Web Project Live URL</th>
              <td className="px-6 py-4 text-gray-700">https://dbhw.netlify.app</td>
            </tr>
            <tr className="border-b border-gray-200">
              <th className="w-1/2 bg-gray-50 px-6 py-4 font-semibold text-gray-900">Expo Project Live URL</th>
              <td className="px-6 py-4 text-gray-700">…</td>
            </tr>
            <tr>
              <th className="w-1/2 bg-gray-50 px-6 py-4 font-semibold text-gray-900">Credentials for testing (login + pass)</th>
              <td className="px-6 py-4 text-gray-700">…</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
