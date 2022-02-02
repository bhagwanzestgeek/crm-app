// import React from 'react';
// import { connect } from 'react-redux';
// import Home from './index';

// const DashboardContainer = WrappedComponent => {
//     return (
//         // 
//     )
// }

// const mapStateToProps = (state) => {
//   return {
//     state
//   };
// };

// const mapDispatchtoProps = {
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchtoProps
// )(Home);


import React, { Suspense } from 'react';

export default function withDashboard(WrapperComponent){
	return(
		<>
			<Suspense fallback={<div>Loading....</div>}>
				<WrapperComponent></WrapperComponent>
			</Suspense>
		</>
	);
}