import React from 'react';

import withDashboard from './DashboardContainer';

const UserCard = props => {
    return (
        <div className="user">
            <p>Name : { props.name }</p>
            <p>Email : { props.email }</p>
            <p>Phone : { props.phone }</p>
            <p>Address : { props.address }</p>
        </div>
    );
};

export default withDashboard(UserCard);