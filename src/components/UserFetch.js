// import React from "react";
// import UserComp from "./UserComp";

// class UserFetch extends React.Component {

//     state = {
//         userDetail: [],
    
//     }
//     componentDidMount() {
//         fetch('http://localhost:3003/api/users/detail')
//             .then(response => response.json())
//             .then(users => {
//                 console.log(users)
//                 this.setState({
//                     UserDetail: users.data
//                 });
//             })
//             .catch(err => console.log(err));
//     }

//     render() {
//         return (
//             <div className="card shadow mb-4">

//                 <UserComp user={this.state.UserDetail}/>

//             </div>
//         )
//     }
// }

// export default UserFetch;