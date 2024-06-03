import React from 'react'
import { AiFillHome, AiFillTool, AiFillSetting } from 'react-icons/ai'
import { MdAnalytics, MdOutlineSettings } from 'react-icons/md'

const Sidebar: React.FC = () => {
  const menuItems = [
    { label: 'Home', icon: <AiFillHome className="h-6 w-6" /> },
    { label: 'Tools', icon: <AiFillTool className="h-6 w-6" /> },
    { label: 'Config', icon: <MdAnalytics className="h-6 w-6" /> },
    { label: 'Analytics', icon: <MdOutlineSettings className="h-6 w-6" /> },
  ]

  return (
    <aside className="sticky top-0 left-0 w-[4rem] h-screen bg-gray-800 text-white flex flex-col justify-between z-10">
      <div className="p-4">
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>

      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className="px-4 py-2 flex items-center hover:bg-gray-700 cursor-pointer"
          >
            {item.icon}
          </li>
        ))}
      </ul>

      <div className="p-4">
        <AiFillSetting className="h-6 w-6" />
      </div>
    </aside>
  )
}

export default Sidebar
