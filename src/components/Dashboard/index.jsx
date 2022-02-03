import React, { Suspense } from "react";
import UserCard from "./UserCard";
import UserList from "./UserList";
import Table from "./UserTable";

import CircularProgress from '@mui/material/CircularProgress';

import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



function CircularIndeterminate() {
	return (
		<Box sx={{ display: 'flex' }}>
			<CircularProgress />
		</Box>
	);
}

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));


const Dashboard = () => {
	console.log("dashboard index");
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<UserCard />
				<hr />

				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={4}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic et quidem unde ipsa deserunt dolorum est sed maiores eligendi qui rem dolorem sit pariatur nisi a, quo aliquam officiis consequuntur expedita officia tenetur saepe repudiandae deleniti? Explicabo minima obcaecati amet voluptate velit at deserunt ipsum, sequi dolorum non. Minima provident quod facere cumque consequatur sequi similique laudantium fugiat fuga.
							<p></p>
						</Grid>
						<Grid item xs={8}>
							<Table />
						</Grid>
					</Grid>
				</Box>

			</Suspense>
		</div>
	);
}

export default Dashboard;