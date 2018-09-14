import React from 'react';
import './display.scss'
import PropTypes from 'prop-types';
import DateTime from './DateTime'
const Display = (props) => (
    <div className="display">
                    <div className="display-time"> {DateTime.toTimeString(props.time)}  </div>
                    {props.isDateVisible &&
                    <div className="display-date">{DateTime.toDateString(props.time)}</div>}</div>

)
Display.defaultProps = {
    time: new Date(),
    isDateVisible: true
};
Display.propTypes = {
    time: PropTypes.object,
    isDateVisible: PropTypes.bool
};
export default Display