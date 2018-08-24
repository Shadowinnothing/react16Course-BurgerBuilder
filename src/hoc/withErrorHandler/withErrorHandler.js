import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    render(){
      return(
        <Aux>
          <Modal show>
            Something didnt Work! :(
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    };
  }
}

export default withErrorHandler;
