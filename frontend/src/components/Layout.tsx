import { CalendarDays, List, PlusCircle, Target } from "lucide-react";
import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/today", label: "Today", icon: CalendarDays },
  { to: "/add", label: "Add", icon: PlusCircle },
  { to: "/entries", label: "Entries", icon: List },
  { to: "/goals", label: "Goals", icon: Target },
];

function formatDate(date: Date) {
  const days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = days[date.getDay()];
  const d = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  // Ordinal suffix
  const j = d % 10,
    k = d % 100;
  let suffix = "th";
  if (j === 1 && k !== 11) suffix = "st";
  else if (j === 2 && k !== 12) suffix = "nd";
  else if (j === 3 && k !== 13) suffix = "rd";
  return `${day} ${d}${suffix} ${month} ${year}`;
}

export default function Layout({
  children,
  heading,
}: {
  children: ReactNode;
  heading: string;
}) {
  const today = new Date(2025, 6, 23); // July is month 6 (0-indexed)
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="px-4 pt-6 pb-2 bg-white shadow-sm">
        <h1 className="text-2xl font-bold mb-1">{heading}</h1>
        <div className="text-gray-500 text-sm">{formatDate(today)}</div>
      </header>
      <main className="flex-1 px-4 pb-20 pt-4">{children}</main>
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
