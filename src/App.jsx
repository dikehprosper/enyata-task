import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import OverviewPage from "./components/pages/OverviewPage";
import PeoplePage from "./components/pages/PeoplePage";
import StarshipsPage from "./components/pages/StarshipPage";
import { AppContextProvider } from "./Context/Context";
import SpeciesPage from "./components/pages/SpeciesPage";

function App() {
  const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
        <Router>
        <AppContextProvider>
          <Routes>
            <Route path="/">
             <Route path="*" element={<h2>Page Not Found</h2>} />
              <Route index element={<Navigate to="/login" replace />} />
              <Route path="/dashboard/overview" element={<OverviewPage />} />
              <Route path="/dashboard/overview/details" element={<OverviewPage />} />
              <Route path="/dashboard/people" element={<PeoplePage />} />
              <Route path="/dashboard/starships" element={<StarshipsPage />} />
              <Route path="/dashboard/species" element={<SpeciesPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          </AppContextProvider>
        </Router>
      </QueryClientProvider>
      
  );
}

export default App;