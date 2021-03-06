import React from 'react'
import  "./newuser.scss";

const NewUser = () => {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form  className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder='Username' className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='Md Nooruzzaman' className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder='noor@gmail.com' className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder='+91 8625451524' className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder='Bangalore | INDIA' className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male"  />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"/>
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other"/>
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className='newUserSelect'name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">
                    Create
                </button>
            </form>
        </div>
    )
}

export default NewUser
