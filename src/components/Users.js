import axios from "axios";
import API_SERVER from '../constants.js';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        axios.get(API_SERVER)
            .then((result) => {
                if (result.status === 200) {
                    setUsers(result?.data);
                    console.log(users);
                }
            }) // Fulfilled
            .catch((error) => {
                console.log('Rejected');
                console.log(error);
            }) // Rejected
    }

    const deleteUser = (currentUser) => {
        if(window.confirm(`Do you want to delete user - ${currentUser.name}?`)) {
            axios.delete(API_SERVER + currentUser.id)
            .then(result => { 
                console.log(result);
                getUsers();
            })
            .catch(error => { 
                console.log(error);
            });
        }
    }

    return (
        <div>
            <Link to='/add-user' className="btn btn-secondary">Add New User</Link>
            <br / >
            <h3>List of Users</h3> <br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={"/user-detail/" + user.id} className="btn btn-secondary">View Detail</Link> &nbsp;| &nbsp;
                                        <button onClick={() => deleteUser(user)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div >
    );
}

export default Users;