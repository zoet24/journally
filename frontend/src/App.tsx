import SharedLayout from "@/components/layout/SharedLayout/SharedLayout";
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
            <SharedLayout heading="Today">
              <Today />
            </SharedLayout>
          }
        />
        <Route
          path="/add"
          element={
            <SharedLayout heading="Add Entry">
              <Add />
            </SharedLayout>
          }
        />
        <Route
          path="/entries"
          element={
            <SharedLayout heading="Entries">
              <Entries />
            </SharedLayout>
          }
        />
        <Route
          path="/goals"
          element={
            <SharedLayout heading="Goals">
              <Goals />
            </SharedLayout>
          }
        />
        <Route path="/" element={<Navigate to="/today" replace />} />
      </Routes>
    </Router>
  );
}
