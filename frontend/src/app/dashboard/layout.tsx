// src/components/DashboardLayout/DashboardLayout.tsx
import Sidebar from '../components/Sidebar/Sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8">{children}</div> {/* Dashboard content will be rendered here */}
    </div>
  )
}
