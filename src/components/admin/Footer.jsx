export default function Footer() {
  return (
    <footer className="">
      <div className="bg-white border border-slate-200/70 px-5 py-4 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="text-[12px] text-slate-500">
            © 2024 FONEST Digital Gadgets. All rights reserved.
          </div>

          <div className="flex items-center gap-5 text-[12px]">
            <button className="text-slate-500 hover:text-indigo-700 transition" type="button">
              System Status
            </button>
            <button className="text-slate-500 hover:text-indigo-700 transition" type="button">
              Help Desk
            </button>
            <button className="text-slate-500 hover:text-indigo-700 transition" type="button">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}