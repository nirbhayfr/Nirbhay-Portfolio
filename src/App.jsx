import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./pages/AppLayout";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="home" />}></Route>
          <Route path="/" element={<AppLayout />}>
            <Route path="home" element={<HomePage />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            backgroundColor: "var(--color-primary)",
            color: "var(--color-secondary)",
            border: "2px solid var(--color-primary-light)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
