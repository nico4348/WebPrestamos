import React, { useState } from "react";
import { X } from "lucide-react";

interface CreateLoanModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreateLoanModal: React.FC<CreateLoanModalProps> = ({
    isOpen,
    onClose,
}) => {
    const [formData, setFormData] = useState({
        clientId: "",
        amount: "",
        dueDate: "",
        description: "",
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement loan creation
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">
                        Nuevo Préstamo
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cliente
                        </label>
                        <select
                            value={formData.clientId}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    clientId: e.target.value,
                                })
                            }
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Seleccionar cliente</option>
                            {/* TODO: Add client options */}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Monto
                        </label>
                        <input
                            type="number"
                            value={formData.amount}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    amount: e.target.value,
                                })
                            }
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                            min="0"
                            step="0.01"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Fecha de Vencimiento
                        </label>
                        <input
                            type="date"
                            value={formData.dueDate}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    dueDate: e.target.value,
                                })
                            }
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Descripción
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                })
                            }
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            rows={3}
                        />
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Crear Préstamo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateLoanModal;
