class Router {
  constructor(routes = []) {
    this.routes = routes;

    // LISTENERS
    window.addEventListener("popstate", () => this.renderMatchingPath());
    window.onload = () => this.renderMatchingPath();
  }

  goTo(path) {
    window.history.pushState(null, null, path);
    this.renderMatchingPath(path);
  }

  renderMatchingPath(path = document.location.pathname) {
    const routeData = { path };
    const pathSegments = this._getPathSegments(path);

    const matchingRoute = this.routes.find(({ path: routePath }) => {
      if (routePath === "*") return true;

      const routePathSegments = this._getPathSegments(routePath);

      if (routePathSegments.lenght !== pathSegments.lenght) return false;

      const match = routePathSegments.every((routePathSegment, i) => {
        return (
          routePathSegment === pathSegments[i] || routePathSegment[0] === ":"
        );
      });

      if (match) {
        routePathSegments.forEach((segment, i) => {
          if (segment[0] === ":") {
            const propName = segment.slice(1);
            routeData[propName] = decodeURIComponent(pathSegments[i]);
          }
        });
      }

      return match;
    });

    if (matchingRoute) matchingRoute.render(routeData);
  }

  goBack() {
    window.history.back();
  }

  getState() {
    return window.history.state;
  }

  getCurrentPath() {
    return this.getState().currentPath;
  }

  _getPathSegments(path) {
    return path.split("/").slice(1);
  }
}

export default Router;
