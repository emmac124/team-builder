
import React, { useState } from 'react';
import Form from './Form';
import './App.css';

const initialFormValues = {
  //text
  name: '',
  email: '',
  //dropdown
  role: ''
}

function App() {
  
  const [teamMember, setTeamMember] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  };

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if(!newTeamMember.name || !newTeamMember.email || !newTeamMember.role){
      return;
    }

    setTeamMember([...teamMember, newTeamMember]);
    setFormValues(initialFormValues);
  
  };

  return (
    <div className="App">
      <div>
      <h1>Team Members</h1>
      <Form
      values={formValues}
      update={updateForm}
      submit={submitForm} />
      </div>
        {
          teamMember.map((member) => {
            return (
              <div>
                <h2>{member.name}</h2>
                <h3>Email: {member.email}</h3>
                <h4>Role: {member.role}</h4>
              </div>
            );
          })
        }
    </div>
  );
}

export default App;
