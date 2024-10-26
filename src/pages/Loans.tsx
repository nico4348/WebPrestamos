import { useState } from "react";
import { Plus, Search } from "lucide-react";
import LoanList from "../components/loans/LoanList";
import CreateLoanModal from "../components/loans/CreateLoanModal";

const Loans = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Préstamos</h1>
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    Nuevo Préstamo
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 border-b">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar préstamos..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                    </div>
                </div>

                <LoanList searchQuery={searchQuery} />
            </div>

            <CreateLoanModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
            />
        </div>
    );
};

export default Loans;
