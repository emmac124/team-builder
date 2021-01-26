import React from 'react';

export default function Form( { values, update, submit } ) {
    
    const onChange = (evt) => {
        const { name, value } = evt.target;
        update( name, value );
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-inputs'>
                <label>
                    Name
                    <input 
                    name='name'
                    type='text'
                    onChange={onChange}
                    value={values.name}
                    placeholder='First and Last Name'>
                    </input>
                </label>
                <br /><br />
                <label>
                    Email
                    <input
                    name='email'
                    type='email'
                    onChange={onChange}
                    value={values.email}
                    placeholder='Enter Email Address'>
                    </input>
                </label>
                <br /><br />
                <label>
                    Role
                    <select name='role' onChange={onChange} value={values.role}>
                        <option value=''>---Select Role---</option>
                        <option value='backend'>Backend Engineer</option>
                        <option value='frontend'>Frontend Engineer</option>
                        <option value='designer'>Designer</option>
                        <option value='datascience'>Data Scientist</option>
                    </select>
                </label>
                <br /><br />
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    );
}