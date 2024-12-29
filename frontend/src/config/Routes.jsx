import { BrowserRouter, Routes, Route, MainLayout, Home } from ".";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
