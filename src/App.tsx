
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Smartyard from "./pages/Smartyard";
import PersonalAccount from "./pages/PersonalAccount";
import SmartHome from "./pages/SmartHome";
import HomeServices from "./pages/HomeServices";
import Business from "./pages/Business";
import SmartHomeSection from "./pages/SmartHomeSection";
import ZigBeeCatalog from "./pages/ZigBeeCatalog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/smartyard" element={<Smartyard />} />
          <Route path="/personal-account" element={<PersonalAccount />} />
          <Route path="/smarthome" element={<SmartHome />} />
          <Route path="/smarthome/zigbee" element={<ZigBeeCatalog />} />
          <Route path="/smarthome/:section" element={<SmartHomeSection />} />
          <Route path="/home-services" element={<HomeServices />} />
          <Route path="/business" element={<Business />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;