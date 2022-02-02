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
	console.log("with Dashboard hoc");
	return(
		<div>
			<Suspense fallback={<div>Loading....</div>}>
				<WrapperComponent></WrapperComponent>
			</Suspense>
		</div>
	);
}