import React from "react";
import { actionCreater } from "../Redux/redux";

const MyReduxContext = React.createContext(null);

export const myConnect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) =>
  class extends React.Component {
    static contextType = MyReduxContext; //access the store provided in line 17
    render() {
      const store = this.context;
      console.log(this.context);
      return <WrappedComponent count={store.getState().value} add={() => store.dispatch(actionCreater.incremented())} />;
    }
  };

export class MyProvider extends React.Component {
  render() {
    const { store } = this.props;
    return <MyReduxContext.Provider value={store}>{this.props.children}</MyReduxContext.Provider>;
  }
}
