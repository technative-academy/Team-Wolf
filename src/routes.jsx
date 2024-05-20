import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Ask from "./components/Ask/Ask";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "ask",
        element: <Ask />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];

export default routes;
