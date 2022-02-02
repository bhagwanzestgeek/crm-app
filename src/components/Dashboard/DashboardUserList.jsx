import { useState } from "react";



// const DashboardUserCard = props => {
//     return (
//         <div className="user">
//             {/* <p>Name : {{ props.name }}</p>
//             <p>Email : {{ props.email }}</p>
//             <p>Phone : {{ props.phone }}</p>
//             <p>Active User : {{ props.is_active }}</p>
//             <p>Member : {{ props.is_member }}</p> */}
//             {/* ADDRESS ACTION */}
//         </div>
//     );
// };

// const DashboardUserList = (props) => {
//     const [users, setUsers] = useState(props.users);
//     return (
//         <>
//         <h3 align="center">Registers User's</h3>
//             <div>
//                 {
//                     users?.map((user, i) => <DashboardUserCard key={i} {...user} />)
//                 }
//             </div>
//         </>
//     );
// };

// const filterUsers = () => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearchOperation = (e) => {
//         e.preventDefault();
//         console.log("handling search input on dashboard component.");
//         setSearchTerm(e.target.value);
//         console.log('Search Term : ', searchTerm);
//     }

//     const UsersListWithSearch = (searchTerm) => {
//         let searchKey = searchTerm.toUpperCase();
//         let filteredUsers = filterUsers(searchKey);
//         return (
//             <>
//                 <input type="text" name="search" defaultValue={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="text" placeholder="Discover dashboard" />
//                 <DashboardUserList users={filteredUsers}/>
//             </>
//         );

//         const filterUsers = () => {
//             searchTerm = searchTerm.toUpperCase()
//             return users.filter(user => {
//                 let str = `${user.name} ${user.email}`.toUpperCase();
//                 return str.indexOf(searchTerm) >= 0;
//             })
//         }
//     }
//     // withSearchHOC(ToolBar, {po:8})
//     const withSearchHOC = WrapperComponent => {
//         const [search, setSearch] = useState('');

//         const handleSearch = (e) => {
//             e.preventDefault();
//             setSearch(e.target.value);
//             console.log('Search data set...');
//         }

//         const filterUsers = () => {
//             searchTerm = searchTerm.toUpperCase()
//             return users.filter(user => {
//                 let str = `${user.name} ${user.email}`.toUpperCase();
//                 return str.indexOf(searchTerm) >= 0;
//             })
//         }

//         const filteredUsers = filterUsers(search);
        
//         return(
//             <>
//                 <input
//                     onChange={handleSearch}
//                     value={searchTerm}
//                     type="text"
//                     placeholder="Search"
//                 />
//                 <WrapperComponent data={filteredUsers}/>
//             </>
//         );
//     }
//     withSearchHOC.displayName = `withSearchHOC(${getDisplayName(WrapperComponent)})`;
//     return withSearchHOC;
// };

// const getDisplayName = (WrapperComponent) => {
//     return WrapperComponent.displayName || WrapperComponent.name || 'Component'
// }

// // Rendering out the users with search features
// const UsersListWithSearch = withSearchHOC(DashboardUserList);

