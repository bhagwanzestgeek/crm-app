import React from 'react';

// import withDashboard from './DashboardContainer';

const UserCard = props => {
  console.log("dashboard UserCard");
    return (
        <div className="user">
            <p>Welcome to React CRM</p>
            {/* <p>Name : { props.name }</p>
            <p>Email : { props.email }</p>
            <p>Phone : { props.phone }</p>
            <p>Address : { props.address }</p> */}
        </div>
    );
};

export default UserCard