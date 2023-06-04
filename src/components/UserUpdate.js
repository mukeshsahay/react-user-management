import axios from "axios";
import { API_SERVER } from '../constants.js';
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UserUpdate() {
    let { id } = useParams();
    const initialUserState = {
        id: 0,
        name: "",
        email: ""
    };

    const [currentUser, setCurrentUser] = useState(initialUserState);
    const getUser = () => {
        axios.get(API_SERVER + '/' + id)
            .then(result => {
                setCurrentUser(result.data);
                console.log(result);
            })
            .catch(error => { console.log(error); }
            )
    }

    useEffect(() => {
        if (id)
            getUser();
        }, [id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentUser({ ...currentUser, [name]: value });
    }

    const navigate = useNavigate();

    const saveUser = (event) => {
        event.preventDefault();
        axios.put(API_SERVER + '/' + id, currentUser)
            .then(result => {
                console.log(result);
                navigate("/users");

            })
            .catch(error => { console.log(error); })
    }

    return (
        <div>
            <form onSubmit={saveUser}>
                <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={currentUser.name}
                        onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={currentUser.email}
                        onChange={handleInputChange} />
                </div>
                <div>
                    <Link to="/users" className="btn btn-secondary">User List</Link> &nbsp;| &nbsp;
                    <Link to={"/user-detail/" + currentUser.id} className="btn btn-primary">View Detail</Link> &nbsp;| &nbsp;
                    <button className="btn btn-success" type="submit">Update User</button>
                </div>
            </form>
        </div>
    )
}

export default UserUpdate;
