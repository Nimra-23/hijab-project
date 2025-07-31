
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => (
  <div className="bg-[#1E293B] text-white w-64 min-h-screen px-6 py-8 shadow-xl">
    <h1 className="text-3xl font-bold mb-10 text-center">Admin Panel</h1>
    <ul className="space-y-6 text-lg">
      <li className="hover:text-blue-400 cursor-pointer"><Link to="/">🏠 Dashboard</Link></li>
      <li className="hover:text-blue-400 cursor-pointer"><Link to="Admin">👤 Admin</Link></li>
      <li className="hover:text-blue-400 cursor-pointer"><Link to="/AddNewProduct">📊 Add New Products</Link></li>
      <li className="hover:text-blue-400 cursor-pointer"><Link>⚙️ Settings</Link></li>
      <li className="hover:text-red-400 cursor-pointer mt-10"><Link>🚪 Logout</Link></li>
    </ul>
  </div>
);
const Header = () => (
  <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
    <h2 className="text-2xl font-semibold">Dashboard</h2>
    <div className="flex items-center space-x-4">
      <div className="text-gray-600">Welcome, Admin</div>
      <img
        src="https://i.pravatar.cc/40"
        alt="profile"
        className="w-10 h-10 rounded-full"
      />
    </div>
  </div>
);

const DashboardCard = ({ title, value, color }) => (
  <div className={`p-6 rounded-xl shadow bg-${color}-100 text-${color}-900`}>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);



export default function AdminpageDesign() {
  return (


    <div className="flex bg-gray-100 min-h-screen">
      {/* <div>
        <Link to='/admin' className="bg-amber-400 px-[15px ] py-2"> Back</Link>
      </div> */}
      <Sidebar />
      <main className="flex-1">
        <Header />
        <div>
          <Outlet />
        </div>
      </main>

    </div>
  );
}
