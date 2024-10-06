import React, { useState, useEffect } from 'react';
import UserForm from '../UserForm/UserForm';
import UserData from '../UserData/UserData';


export default function UserCard({ user, index }) {

    const [showForm, setShowForm] = useState(true);

    useEffect(() => {
        setShowForm(prevState => user.data && Object.keys(user.data).length ? false : true);
    }, [user.data])

    return (

        <div className='card'>
            {showForm ? <UserForm user={user} index={index} /> : <UserData user={user} />}
        </div>

    )
}