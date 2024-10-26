import { TrendingUp, Users, AlertCircle, CheckCircle } from "lucide-react";

function Dashboard() {
    const stats = [
        {
            name: "Préstamos Activos",
            value: "24",
            icon: TrendingUp,
            change: "+4.75%",
            changeType: "positive",
        },
        {
            name: "Total Clientes",
            value: "58",
            icon: Users,
            change: "+2.5%",
            changeType: "positive",
        },
        {
            name: "Préstamos Vencidos",
            value: "3",
            icon: AlertCircle,
            change: "-1.5%",
            changeType: "negative",
        },
        {
            name: "Préstamos Completados",
            value: "147",
            icon: CheckCircle,
            change: "+12.5%",
            changeType: "positive",
        },
    ];

    return (
        <div>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={item.name}
                            className="bg-white overflow-hidden shadow rounded-lg"
                        >
                            <div className="p-4 lg:p-5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-gray-400" />
                                    </div>
                                    <div className="ml-4 lg:ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">
                                                {item.name}
                                            </dt>
                                            <dd className="flex items-baseline">
                                                <div className="text-xl lg:text-2xl font-semibold text-gray-900">
                                                    {item.value}
                                                </div>
                                                <div
                                                    className={`ml-2 flex items-baseline text-sm font-semibold ${
                                                        item.changeType ===
                                                        "positive"
                                                            ? "text-green-600"
                                                            : "text-red-600"
                                                    }`}
                                                >
                                                    {item.change}
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Dashboard;
