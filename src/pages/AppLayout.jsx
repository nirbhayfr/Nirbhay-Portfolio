import { Outlet } from "react-router-dom";
import Header from "../features/Header";
import Footer from "../features/Footer";
import CustomCursor from "../ui/CustomCursor";

function AppLayout() {
  return (
    <div className="bg-primary text-font-primary min-h-[100vh] space-y-28 font-[Montserrat]">
      <CustomCursor />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
