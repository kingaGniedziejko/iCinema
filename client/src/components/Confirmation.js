import React from 'react';
import { connect } from 'react-redux'

import { confirmBooking } from '../actions'

class Confirmation extends React.Component
{
    render() {
        return (
            <div className="container">
                <button className="option-button" onClick={() => {
                    this.props.confirmBooking(this.props);
                }}> Confirm changes </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        region: state.region,
        selectedMovie: state.selectedMovie,
        selectedShowing: state.selectedShowing,
        selectedSeats: state.selectedSeats
    }
}

export default connect(mapStateToProps, { confirmBooking })(Confirmation);