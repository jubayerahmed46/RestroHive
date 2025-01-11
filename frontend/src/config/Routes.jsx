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
  ManageOrders,
  PrivetRoutes,
  CustomerRoutes,
  AdminAndMangerRoutes,
  AddItem,
  AdminRoutes,
  Users,
  ManageItems,
  Profile,
} from ".";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* main layout */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/shop" element={<OurShop />} />
        </Route>
        {/* authlayout */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Route>
        {/* dashboard layout */}
        <Route element={<PrivetRoutes />}>
          <Route path="/dashboard" element={<DashBoardLayout />}>
            {/* customer route */}
            <Route element={<CustomerRoutes />}>
              <Route path="manage-cart-items" element={<ManageOrders />} />
            </Route>

            {/* common route for admin and manager */}
            <Route element={<AdminAndMangerRoutes />}>
              <Route path="add-item" element={<AddItem />} />
            </Route>

            {/* admin only routes */}
            <Route element={<AdminRoutes />}>
              <Route path="users" element={<Users />} />
            </Route>
            <Route element={<AdminRoutes />}>
              <Route path="manage-items" element={<ManageItems />} />
            </Route>

            {/* common for all */}
            <Route index path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
