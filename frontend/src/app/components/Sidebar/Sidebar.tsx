// src/components/Sidebar/Sidebar.tsx
export default function Sidebar() {
    return (
      <div className="w-64 bg-gray-800 text-white h-full p-4">
        <h2 className="text-lg font-bold">Sidebar</h2>
        <ul>
          <li><a href="/" className="block py-2">Home</a></li>
          <li><a href="/dashboard" className="block py-2">Dashboard</a></li>
          {/* Add more links as necessary */}
        </ul>
      </div>
    )
  }
  