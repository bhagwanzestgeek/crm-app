import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import TablePagination from '@mui/material/TablePagination';

// function createData(name, calories, fat, carbs, protein) {
// 	return { name, calories, fat, carbs, protein };
// }

function createData(name, email, phone, address, id){
	return { name, email, phone, address, id };
}

const rows = [
	createData('Tony Stark', 'stark.zestgeek@gmail.com', '+91 9999999990', 'Chandigarh', 1),
	createData('Bruce Banner', 'banner.zestgeek@gmail.com', '+91 9999999991', 'Kolkata', 2),
	createData('Thor Odinson', 'thor.zestgeek@gmail.com', '+91 9999999992', 'Vaizag', 3),
	createData('Peeter Parker', 'peeter.zestgeek@gmail.com', '+91 9999999993', 'Gangtok', 4),
	createData('Steve Rogers', 'captain.zestgeek@gmail.com', '+91 9999999994', 'Mohali', 5),
];

export default function AcccessibleTable() {

	const navigate = useNavigate()

	const handleEditUser = (e, id) => {
		e.preventDefault();
		console.log("handling edit User");
		navigate(`/user/edit/${id}`);
	}

	const handleDeleteUser = (e, id) => {
		e.preventDefault();
		console.log("handling delete User");
		navigate(`/user/delete/${id}`);
	}

	const handleUserClick = (e, id) => {
		e.preventDefault();
		console.log("handling User view");
		navigate(`/user/${id}`);
	}

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="caption table">
				<TableHead>
					<TableRow>
						<TableCell align="left">Full name</TableCell>
						<TableCell align="center">Email</TableCell>
						<TableCell align="center">Phone Number</TableCell>
						<TableCell align="center">Address</TableCell>
						<TableCell align="center">Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell component="th" scope="row">
								<Button onClick={(e) => handleUserClick(e, row.id)}> {row.name} </Button>
							</TableCell>
							<TableCell align="center">{row.email}</TableCell>
							<TableCell align="center">{row.phone}</TableCell>
							<TableCell align="center">{row.address}</TableCell>
							<TableCell align="center">
								<ButtonGroup variant="text" aria-label="text button group">
									<Button onClick={(e) => handleEditUser(e, row.id )} color="info"><EditIcon/></Button>
									<Button onClick={(e) => handleEditUser(e, row.id )}  color="error"><DeleteIcon/></Button>
								</ButtonGroup>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
		{/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
		</Paper>
		
	)
}
