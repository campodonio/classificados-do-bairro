import { Menu, Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-blue-600 text-white px-4 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-blue-700 rounded-lg transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl">Classificados</h1>
        </div>
        <button className="p-2 hover:bg-blue-700 rounded-lg transition-colors relative">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
}
