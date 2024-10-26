import React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface ReportsListProps {
    startDate: string;
    endDate: string;
}

interface Report {
    id: number;
    date: Date;
    totalLoans: number;
    totalAmount: number;
    activeLoans: number;
    completedLoans: number;
}

const ReportsList: React.FC<ReportsListProps> = () => {
    // Mock data - replace with actual data fetching
    const reports: Report[] = [
        {
            id: 1,
            date: new Date(2024, 2, 1),
            totalLoans: 15,
            totalAmount: 7500,
            activeLoans: 10,
            completedLoans: 5,
        },
        {
            id: 2,
            date: new Date(2024, 2, 15),
            totalLoans: 12,
            totalAmount: 6000,
            activeLoans: 8,
            completedLoans: 4,
        },
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Fecha
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Préstamos Totales
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Monto Total
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Préstamos Activos
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Préstamos Completados
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {reports.map((report) => (
                            <tr key={report.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {format(report.date, "dd MMM yyyy", {
                                            locale: es,
                                        })}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {report.totalLoans}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        ${report.totalAmount.toFixed(2)}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {report.activeLoans}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {report.completedLoans}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportsList;
