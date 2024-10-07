import React from 'react';
import { Link } from 'react-router-dom';


export default function Home({ data }) {
  return (
    <div className="home-container">
      <h1>User Management</h1>
      <div className="link-container">
        <Link to="/Create">Create</Link>
        <Link to="/Update">Update</Link>
       
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.age}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
