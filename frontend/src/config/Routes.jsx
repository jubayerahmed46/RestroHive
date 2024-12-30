import { BrowserRouter, Routes, Route, MainLayout, Home } from ".";
import Menu from "../pages/menu/Menu";
import OurShop from "../pages/our-shop/OurShop";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/shop" element={<OurShop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
