import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  // Handle form submission
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
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <input
            type='text'
            placeholder='Last Name'
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <button type='submit' disabled={!firstName || !lastName}>
            Submit
          </button>
        </div>
      </form>
      {fullName && <h2 style={{ marginTop: '20px' }}>Full Name: {fullName}</h2>}
    </div>
  );
}

export default App;
