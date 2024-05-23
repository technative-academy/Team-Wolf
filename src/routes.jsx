import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Ask from "./components/Ask/Ask";
import AboutApp from "./components/AboutTheApp/AboutTheApp";
import AboutTeam from "./components/AboutTheTeam/AboutTheTeam";
import Products from "./components/Products/Products";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "ask",
        element: <Ask />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "about-app",
            element: <AboutApp />,
          },
          {
            path: "about-team",
            element: <AboutTeam />,
          },
        ],
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
];

export default routes;
