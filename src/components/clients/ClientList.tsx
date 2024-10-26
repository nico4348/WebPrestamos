import React from "react";

interface Client {
    id: number;
    name: string;
    email: string;
    phone: string;
    activeLoans: number;
}

interface ClientListProps {
    searchQuery: string;
}

const ClientList: React.FC<ClientListProps> = ({ searchQuery }) => {
    // Mock data - replace with actual data fetching
    const clients: Client[] = [
        {
            id: 1,
            name: "Juan Pérez",
            email: "juan@example.com",
            phone: "555-0123",
            activeLoans: 2,
        },
        {
            id: 2,
            name: "María García",
            email: "maria@example.com",
            phone: "555-0124",
            activeLoans: 1,
        },
    ];

    const filteredClients = clients.filter((client) =>
        client.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nombre
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Teléfono
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Préstamos Activos
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {filteredClients.map((client) => (
                        <tr key={client.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">
                                    {client.name}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                    {client.email}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                    {client.phone}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                    {client.activeLoans}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClientList;
