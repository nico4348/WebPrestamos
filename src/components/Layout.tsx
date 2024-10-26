import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    FileText,
    PieChart,
    LogOut,
    Menu,
    X,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    const location = useLocation();
    const { logout } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navigation = [
        { name: "Dashboard", href: "/", icon: LayoutDashboard },
        { name: "Préstamos", href: "/loans", icon: FileText },
        { name: "Clientes", href: "/clients", icon: Users },
        { name: "Reportes", href: "/reports", icon: PieChart },
    ];

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Mobile header */}
            <div className="lg:hidden bg-white shadow-sm">
                <div className="flex items-center justify-between px-4 py-3">
                    <h1 className="text-lg font-bold text-gray-800">
                        Sistema de Préstamos
                    </h1>
                    <button
                        onClick={toggleSidebar}
                        className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            <div className="flex h-[calc(100vh-56px)] lg:h-screen">
                {/* Overlay */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
                        onClick={toggleSidebar}
                    />
                )}

                {/* Sidebar */}
                <div
                    className={`fixed lg:static inset-y-0 left-0 transform ${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0 z-30 w-64 bg-white shadow-md transition-transform duration-300 ease-in-out`}
                >
                    <div className="h-full flex flex-col">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex items-center justify-between flex-shrink-0 px-4 lg:hidden">
                                <h1 className="text-xl font-bold text-gray-800">
                                    Menú
                                </h1>
                                <button
                                    onClick={toggleSidebar}
                                    className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="hidden lg:flex items-center flex-shrink-0 px-4">
                                <h1 className="text-xl font-bold text-gray-800">
                                    Sistema de Préstamos
                                </h1>
                            </div>
                            <nav className="mt-8 flex-1 px-2 space-y-1">
                                {navigation.map((item) => {
                                    const isActive =
                                        location.pathname === item.href;
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            onClick={() =>
                                                setIsSidebarOpen(false)
                                            }
                                            className={`${
                                                isActive
                                                    ? "bg-blue-50 text-blue-600"
                                                    : "text-gray-600 hover:bg-gray-50"
                                            } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                                        >
                                            <Icon
                                                className={`${
                                                    isActive
                                                        ? "text-blue-600"
                                                        : "text-gray-400"
                                                } mr-3 h-5 w-5`}
                                            />
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                            <button
                                onClick={logout}
                                className="flex items-center text-gray-600 hover:text-gray-900"
                            >
                                <LogOut className="h-5 w-5 mr-2" />
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    <main className="flex-1 overflow-y-auto p-4 lg:p-6">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Layout;
