import React from "react";
import UserRow from "./UserRow";
class UserList extends React.Component {

    state = {
        UserList: [],
        // overOnH6: false
    }
    componentDidMount() {
        fetch('http://localhost:3003/api/users')
            .then(response => response.json())
            .then(users => {

                this.setState({
                    UserList: users.data,
                    totalUsers: users.meta.total,
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="col-lg-10 mb-4">
                <h1 className="h3 mb-2 text-gray-800">Usuarios en Base de Datos</h1>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                    <th>Rol</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>

                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    this.state.UserList.map((user, index) =>
                                        <UserRow user={user} key={index} />

                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserList;