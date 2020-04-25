import Router from "./lib/router";

import HomePage from "./pages/home";

((document, window) => {
  const router = new Router([
    {
      path: "/",
      render: HomePage,
    },
    {
      path: "/:country",
      render: ({ country }) =>
        console.log(`This is the ${country} details page`),
    },
    {
      path: "*",
      render: () => console.log("not found"),
    },
  ]);
  // const router = new Router({
  //   notFound: console.log,
  //   "/": () => console.log("This is the home page!"),
  //   "/{country}": ({ params }) =>
  //     console.log(`This is the ${country} details page`),
  // });

  window.router = router;
})(document, window);
