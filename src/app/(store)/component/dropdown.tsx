"use client"
import Link from "next/link";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className="relative font-[sans-serif] w-max mx-auto">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="px-5 py-2.5 rounded text-black text-sm  border-none outline-none  active:bg-gray-200"
      >
        Date Added
        <svg
          className="w-3 fill-black inline ml-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clipRule="evenodd"
            data-original="#000000"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute block shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto"
          role="date added"
          aria-orientation="vertical"
          aria-labelledby="calender"
        >
          {/* <div className="py-1" role="none">
            <Link
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
            >
              Account Settings
            </Link>
            <Link
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
            >
              Support
            </Link>
            <Link
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
            >
              License
            </Link>
          </div>
          <div className="py-1" role="none">
            <button
              type="button"
              className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
            >
              Sign out
            </button>
          </div> */}
           <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="relative rounded-md border py-1"
            
          />
        </div>
      )}
    </div>
  );
}
