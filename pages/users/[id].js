import axios from 'axios';
import React from 'react';
import Laout from '../../components/Laout ';

const UserID = ({ user }) => {
    return (
        <Laout>
            <div className="conatainer">
                <h1>user Details page</h1>

<table class="table">
  <thead>
    <tr class="table-primary">
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">WebSite</th>
      <th scope="col">phone</th>
    </tr>
  </thead>
           <tbody>
              <tr>
                 <td>{user.name}</td>
                 <td>{user.email}</td>
                 <td>{user.website}</td>
                 <td>{user.phone}</td>
              </tr>

           </tbody>
</table>

            </div>

        </Laout>
    );
};

export default UserID;

export async function getServerSideProps(context) {
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)
        return {
            props: {
                user: data
            }
        }
    }
    catch (e) {
        console.log(e);
    }
}