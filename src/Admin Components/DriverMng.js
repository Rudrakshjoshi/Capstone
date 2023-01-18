import React, { useState, useEffect } from "react";
import "./AdminHome.css";

const DriverMng = () => {
  const [getAllUser, setAllUser] = useState([]);

 // GET ALL USERS FOR TABEL
  const fetchUsers = async () => {
    const users = await fetch("http://localhost:5000/Drivers");
    const parsedData = await users.json();
    setAllUser(parsedData);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

 // DELETE SINGLE USER IN TABLE
  const deleteUser = async (id) => {
    fetch(`http://localhost:5000/Drivers/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {});
    });

    fetchUsers();
  };
  return (
    <div>
      <div class="col-auto text-usermng">
        <h3> Drivers</h3>
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
            <th scope="col">Driver Id</th>
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
  );
};

export default DriverMng;
