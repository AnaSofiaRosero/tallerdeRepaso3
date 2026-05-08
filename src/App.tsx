import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route
        path="/proyecto/:id"
        element={<ProjectDetail />}
      />
    </Routes>
  );
}

export default App;