import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = () => {
  useEffect(() => {
    // Add security headers
    const addSecurityHeaders = () => {
      // Content Security Policy
      const cspMeta = document.createElement("meta");
      cspMeta.httpEquiv = "Content-Security-Policy";
      cspMeta.content =
        "default-src 'self'; img-src 'self' https://images.unsplash.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;";

      // X-Content-Type-Options
      const xContentTypeMeta = document.createElement("meta");
      xContentTypeMeta.httpEquiv = "X-Content-Type-Options";
      xContentTypeMeta.content = "nosniff";

      // X-Frame-Options
      const xFrameOptionsMeta = document.createElement("meta");
      xFrameOptionsMeta.httpEquiv = "X-Frame-Options";
      xFrameOptionsMeta.content = "DENY";

      // Referrer-Policy
      const referrerPolicyMeta = document.createElement("meta");
      referrerPolicyMeta.httpEquiv = "Referrer-Policy";
      referrerPolicyMeta.content = "no-referrer-when-downgrade";

      document.head.appendChild(cspMeta);
      document.head.appendChild(xContentTypeMeta);
      document.head.appendChild(xFrameOptionsMeta);
      document.head.appendChild(referrerPolicyMeta);
    };

    // Execute only in browser environment
    if (typeof window !== "undefined") {
      addSecurityHeaders();
    }

    return () => {
      // Clean up security headers on unmount
      const metaTags = document.head.querySelectorAll("meta[http-equiv]");
      metaTags.forEach((tag) => {
        document.head.removeChild(tag);
      });
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
