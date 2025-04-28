import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Set up React Query client for managing server state
const queryClient = new QueryClient();

function App() {
  return (
    // Provide React Query context to the whole app
    <QueryClientProvider client={queryClient}>
      {/* Set up routing for the app */}
      <BrowserRouter>
        <Routes>
          {/* Main page */}
          <Route path="/" element={<Index />} />
          {/* 404 page for any unmatched route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
