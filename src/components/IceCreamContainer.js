import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamActions';

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of Ice Cream - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}

// this should be (as the documentation) in different file called cakeSelector.js that return state info from redux store
const mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IceCreamContainer)