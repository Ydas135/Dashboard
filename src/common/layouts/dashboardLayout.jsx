import { Outlet } from "react-router"

export  function dashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="flex min-h-screen flex-col lg:flex-row">
            
            <h2>Dashboard</h2>
            <Outlet />
        </div>
        
    </div>
  )
}
