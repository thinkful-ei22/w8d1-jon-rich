import React from 'react';
import {connect} from 'react-redux';
function AuralStatus(props) {
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.auralStatus}
    </p>
  );
}
const mapStateToProp = state => ({
  auralStatus: state.auralStatus
});
export default connect(mapStateToProp)(AuralStatus);