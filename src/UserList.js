import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h2>User List</h2>
      <ul style={styles.list}>
        {listOfUsers.map(user => (
          <li key={user.id} style={styles.listItem}>
            <strong>{user.name}</strong> ({user.username}) - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: '#f0f0f0',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
  }
};

export default UserList;
