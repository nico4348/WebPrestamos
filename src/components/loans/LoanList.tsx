import React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface Loan {
    id: number;
    clientName: string;
    amount: number;
    date: Date;
    status: "active" | "completed" | "overdue";
    dueDate: Date;
}

interface LoanListProps {
    searchQuery: string;
}

const LoanList: React.FC<LoanListProps> = ({ searchQuery }) => {
    // Mock data - replace with actual data fetching
    const loans: Loan[] = [
        {
            id: 1,
            clientName: "Juan Pérez",
            amount: 1000,
            date: new Date(2024, 2, 1),
            status: "active",
            dueDate: new Date(2024, 3, 1),
        },
        {
            id: 2,
            clientName: "María García",
            amount: 500,
            date: new Date(2024, 2, 15),
            status: "overdue",
            dueDate: new Date(2024, 2, 28),
        },
    ];

    const filteredLoans = loans.filter((loan) =>
        loan.clientName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getStatusColor = (status: Loan["status"]) => {
        switch (status) {
            case "active":
                return "bg-green-100 text-green-800";
            case "completed":
                return "bg-gray-100 text-gray-800";
            case "overdue":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Cliente
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Monto
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Fecha
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Vencimiento
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Estado
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {filteredLoans.map((loan) => (
                        <tr key={loan.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">
                                    {loan.clientName}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                    ${loan.amount.toFixed(2)}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                    {format(loan.date, "dd MMM yyyy", {
                                        locale: es,
                                    })}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                    {format(loan.dueDate, "dd MMM yyyy", {
                                        locale: es,
                                    })}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                                        loan.status
                                    )}`}
                                >
                                    {loan.status === "active" && "Activo"}
                                    {loan.status === "completed" &&
                                        "Completado"}
                                    {loan.status === "overdue" && "Vencido"}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LoanList;
