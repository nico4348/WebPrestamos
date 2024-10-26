import { useState } from "react";
import { Calendar, Download } from "lucide-react";
import ReportsList from "../components/reports/ReportsList";

const Reports = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Reportes</h1>
                <button
                    onClick={() => {
                        /* TODO: Implement export functionality */
                    }}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700 transition-colors"
                >
                    <Download className="w-5 h-5 mr-2" />
                    Exportar
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Fecha Inicial
                        </label>
                        <div className="relative">
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Fecha Final
                        </label>
                        <div className="relative">
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                        </div>
                    </div>
                </div>
            </div>

            <ReportsList startDate={startDate} endDate={endDate} />
        </div>
    );
};

export default Reports;
