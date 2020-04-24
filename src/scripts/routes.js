import Router from "./lib/router";

((document, window) => {
  const router = new Router([
    {
      path: "/",
      render: () => console.log("This is the home page!"),
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
