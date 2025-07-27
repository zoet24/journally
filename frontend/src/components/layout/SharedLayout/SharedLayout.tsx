import { format } from "date-fns";
import { CalendarDays, List, PlusCircle, Target } from "lucide-react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/today", label: "Today", icon: CalendarDays },
  { to: "/add", label: "Add", icon: PlusCircle },
  { to: "/entries", label: "Entries", icon: List },
  { to: "/goals", label: "Goals", icon: Target },
];

export default function SharedLayout({
  children,
  heading,
}: {
  children: ReactNode;
  heading: string;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
        <div className="px-4 pt-6 pb-2">
          <h1 className="text-2xl font-bold mb-1">{heading}</h1>
          <div className="text-gray-500 text-sm">
            {format(new Date(), "EEE do MMMM yyyy")}
          </div>
        </div>
      </header>
      <main className="flex-1 px-4 pb-20 pt-24">{children}</main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 z-10">
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs px-2 py-1 transition-colors ${
                isActive ? "text-blue-600" : "text-gray-500"
              }`
            }
          >
            <Icon className="w-6 h-6 mb-1" />
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
