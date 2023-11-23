import { BrowserRouter, Route, Routes } from "react-router-dom";
import PocetnaStrana from "./pages/PocetnaStrana";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Proizvodi from "./pages/Proizvodi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Korpa from "./pages/Korpa";
import LoginForm from "./pages/LoginForm";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminPage from "./pages/AdminPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CreateOrder from "./features/korpa/CreateOrder";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<PocetnaStrana />} />
            <Route path="proizvodi" element={<Proizvodi />} />
            <Route path="korpa" element={<Korpa />} />
            <Route path="korpa/poruci" element={<CreateOrder />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="login" element={<LoginForm />} />
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWaidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "grey",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
