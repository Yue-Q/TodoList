import React from "react";

const routeInstance = [];

const pathMatch = (path, exact) => {
  const locationPath = window.location.pathname;
  if (exact) {
    return locationPath === path;
  }
  return locationPath.includes(path);
};

export class MyRoute extends React.Component {
  routerRegister = (routeIns) => {
    routeInstance.push(routeIns);
    const handlePopState = () => this.forceUpdate();
    window.addEventListener("popstate", handlePopState);
    return function () {
      routeInstance = routeInstance.filter((instance) => instance !== routeIns);
      window.removeEventListener(handlePopState);
    };
  };
  componentDidMount() {
    this._unregis = this.routerRegister(this);
  }

  componentWillUnmount() {
    this._unregis();
  }
  render() {
    const { path, children, exact = false, component, render } = this.props; //default value is false
    console.log(exact);
    console.log(this);
    console.log(routeInstance);
    if (pathMatch(path, exact)) {
      if (component) {
        return React.createElement(component, {}, null);
      }
      if (render) {
        return render();
      }
      return children;
    }
    return null;
  }
}

export class MyLink extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", this.props.to); //update the url without refreshing the page
    routeInstance.forEach((instance) => {
      instance.forceUpdate();
    });
  };
  render() {
    const { to, children } = this.props;
    return (
      <a href={to} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}
