import React from "react";
import { actionCreater, store } from "../Redux/redux";

const MyReduxContext = React.createContext(null);

export const myConnect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) =>
  class extends React.Component {
    static contextType = MyReduxContext; //access the store provided in line 17
    componentDidMount() {
      const store = this.context;
      this.unsub = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
      this.unsub();
    }

    render() {
      const store = this.context;
      const WrappedComponentProps = mapStateToProps(store.getState());
      const WrappedComponentDispatch = mapDispatchToProps(store.dispatch);
      return <WrappedComponent {...WrappedComponentProps} {...WrappedComponentDispatch} {...this.props} />;
    }
  };

export class MyProvider extends React.Component {
  render() {
    const { store } = this.props;
    return <MyReduxContext.Provider value={store}>{this.props.children}</MyReduxContext.Provider>;
  }
}
