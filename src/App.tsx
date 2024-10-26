import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Loans from "./pages/Loans";
import Clients from "./pages/Clients";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import { useAuth } from "./context/AuthContext";

function App() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Login />;
    }

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/loans" element={<Loans />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Layout>
    );
}

export default App;
