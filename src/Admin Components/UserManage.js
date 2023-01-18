import React, { useState, useEffect } from 'react'
import "./AdminHome.css";
const UserManage = () => {
    const [getAllUser, setAllUser] = useState([]);

    //Get All User
    const fetchUsers = async () => {
      const users = await fetch("http://localhost:5000/Users");
      const parsedData = await users.json();
      setAllUser(parsedData);
      //console.log(parsedData);
    };
    useEffect(() => {
      fetchUsers();
    }, []);
  
    //   Delete User
    const deleteUser = async (id) => {
      fetch(`http://localhost:5000/Users/${id}`, {
        method: "DELETE",
      }).then((result) => {
        result.json().then((resp) => {
          //console.warn(resp);
        });
      });
  
      fetchUsers();
    };
  return (
    <div>
      <div class="col-auto text-usermng">
        <h3> Users</h3>
      </div>
      <div class="row  ">
        <div class="col-auto my-2">
          <input
            type="serach"
            id="inputPassword6"
            class="form-control d-flex flex-row-reverse search-box"
            aria-describedby="passwordHelpInline"
            placeholder="Search"
          />
        </div>
      </div>

      <table class="table">
        <thead class="table-thread">
          <tr>
            <th scope="col">Customer Id</th>
            <th scope="col">User Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Address</th>
            <th scope="col">Email Id</th>
            <th scope="col">Edit User</th>
            <th scope="col">Delete User</th>
          </tr>
        </thead>
        <tbody className="user-body">
          {getAllUser.map((user) => {
            return (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.userName}</td>

                <td>{user.mobile}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>
                  <i class="bi bi-clipboard2-check"></i>
                </td>
                <td>
                  <i
                    class="bi bi-trash"
                    onClick={() => deleteUser(user.id)}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserManage
