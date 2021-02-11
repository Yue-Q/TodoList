import React from "react";

import { actionCreater } from "../../Redux/redux";
import { connect } from "react-redux";
import { myConnect } from "../../react-redux/react-redux";

// class Counter extends React.Component {
//   componentDidMount() {
//     store.subscribe(() => {
//       this.forceUpdate();
//     });
//   }

//   render() {
//     return (
//       <>
//         <h1>Counter: {store.getState().value}</h1>
//         <button
//           onClick={() => {
//             store.dispatch(actionCreater.incremented());
//           }}
//         >
//           Add
//         </button>
//       </>
//     );
//   }
// }

class Counter extends React.Component {
  render() {
    return (
      <>
        <h1>Counter: {this.props.counter}</h1>
        <button
          onClick={() => {
            this.props.add();
          }}
        >
          Add
        </button>
      </>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.value,
  };
};

const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
    add: () => dispatch(actionCreater.incremented()),
  };
};

export default myConnect(mapStateToProps, mapDispatchToProps)(Counter);
