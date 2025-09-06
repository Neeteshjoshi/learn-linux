import { NavLink } from "react-router-dom";
import { Home, Folder, Settings, Info } from "lucide-react";

export default function Sidebar() {
    const links = [
        { to: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
        { to: "/ls", label: "LS", icon: <Folder className="w-5 h-5" /> },
        { to: "/cd", label: "CD", icon: <Folder className="w-5 h-5" /> },
        { to: "/cat", label: "CAT", icon: <Info className="w-5 h-5" /> },
        { to: "/file", label: "FILE", icon: <Info className="w-5 h-5" /> },
        { to: "/find", label: "FIND", icon: <Info className="w-5 h-5" /> },
        { to: "/grep", label: "GREP", icon: <Info className="w-5 h-5" /> },
        { to: "/sort", label: "SORT", icon: <Info className="w-5 h-5" /> },
        { to: "/uniq", label: "UNIQ", icon: <Info className="w-5 h-5" /> },
        { to: "/strings", label: "STRINGS", icon: <Info className="w-5 h-5" /> },
        { to: "/base64", label: "BASE64", icon: <Info className="w-5 h-5" /> },
        { to: "/ssh", label: "SSH", icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <aside className=" w-64 bg-gray-900 text-gray-100 flex flex-col shadow-lg">
            {/* Logo */}
            <div className="p-4 text-2xl font-bold border-b border-gray-700">
               Linux - Commands
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 rounded-lg transition ${isActive ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                            }`
                        }
                    >
                        {link.icon} {link.label}
                    </NavLink>
                ))}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
                © 2025 Buggy.cy
            </div>
        </aside>
    );
}
