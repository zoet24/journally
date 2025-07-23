import Layout from "@/components/Layout";
import Add from "@/pages/Add";
import Entries from "@/pages/Entries";
import Goals from "@/pages/Goals";
import Today from "@/pages/Today";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/today"
          element={
            <Layout heading="Today">
              <Today />
            </Layout>
          }
        />
        <Route
          path="/add"
          element={
            <Layout heading="Add Entry">
              <Add />
            </Layout>
          }
        />
        <Route
          path="/entries"
          element={
            <Layout heading="Entries">
              <Entries />
            </Layout>
          }
        />
        <Route
          path="/goals"
          element={
            <Layout heading="Goals">
              <Goals />
            </Layout>
          }
        />
        <Route path="/" element={<Navigate to="/today" replace />} />
      </Routes>
    </Router>
  );
}
