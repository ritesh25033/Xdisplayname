import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  // Handle input changes
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type='text'
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Last Name:</label>
          <input
            type='text'
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <button type='submit'>Submit</button>
        </div>
      </form>
      {fullName && <h2 style={{ marginTop: '20px' }}>Full Name: {fullName}</h2>}
    </div>
  );
}

export default App;
