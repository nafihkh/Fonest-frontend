import {
  Search,
  Bell,
  Sun,
  
} from "lucide-react";
export default function Topbar() {
  return (
    <header className="h-[68px] bg-white border-b border-slate-200/70 px-6 flex items-center justify-between gap-4">
      <div className="text-[12px] font-semibold text-slate-500 uppercase tracking-wide">
        Dashboard Overview
      </div>

      <div className="flex-1 max-w-[520px]">
        <div className="flex items-center gap-2 px-3 py-2">
          <span className="text-slate-400"><Search size={16} className="text-[#565D6D]" /></span>
          <input
            className="w-full bg-transparent outline-none text-[14px] text-slate-700 placeholder:text-[#565D6D]"
            placeholder="Search gadgets, orders, users..."
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="w-10 h-10">
          <Bell size={20} className="text-neutral-900" />
        </button>
        <button className="w-10 h-10">
          <Sun size={20} className="text-neutral-900" />
        </button>
        <div className="text-neutral-300 text-xl">|</div>
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right leading-tight">
            <div className="text-[13px] font-semibold text-slate-900">Admin User</div>
            <div className="text-[12px] text-slate-500">Administrator</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500" />
        </div>
      </div>
    </header>
  );
}