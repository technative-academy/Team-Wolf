// import Root from "./components/Root/Root";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Ask from "./components/Ask/Ask";

// const routes = [
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "ask",
//         element: <Ask />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//     ],
//   },
// ];

// export default routes;

import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Ask from "./components/Ask/Ask";
import AboutApp from "./components/AboutTheApp/AboutTheApp";
import AboutTeam from "./components/AboutTheTeam/AboutTheTeam";

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
    ],
  },
];

export default routes;
