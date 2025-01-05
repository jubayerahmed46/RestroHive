import {
  BrowserRouter,
  Routes,
  Route,
  MainLayout,
  Home,
  Menu,
  OurShop,
  Signin,
  AuthLayout,
  Signup,
  ErrorPage,
  DashBoardLayout,
  ManageItems,
} from ".";
import Users from "../pages/dashboard/admin/users/Users";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/shop" element={<OurShop />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Route>
        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route path="manage-cart-items" element={<ManageItems />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
