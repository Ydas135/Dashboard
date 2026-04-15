import { Link } from "react-router"

export default function Sidebar() {
  return (
    <aside className='lg:w-80 bg-slate-950/80 backdrop-blur-xl border-white/10 border-b lg:border-r lg:border-b-0'>
        <div className="flex h-full flex-col px-5 py-6 lg:px-6">
          <div className="mt-8">
            <h2 className="px-3 text-xs font-medium uppercase text-slate-500">
                Navigation
            </h2>
            <nav className="mt-4 space-y-2 gap-4 flex lg:flex-col">
              <Link to="/">Home</Link>
              <Link to="/about">About Me</Link>
              
              <div className="flex flex-col gap-2">
                <Link to="/todo-module" className="font-semibold text-orange-400">
                  Todo - Module
                </Link>
                <Link to="/todo-module/todo" className="ml-4 text-sm">
                  TODO
                </Link>
                <Link to="/todo-module/completed" className="ml-4 text-sm">
                  Completed
                </Link>
                <Link to="/todo-module/priority" className="ml-4 text-sm">
                  Priority
                </Link>
              </div>
            </nav>
          </div>
        </div>
    </aside>
  )
}
