import React from 'react';
import { Link } from "react-router-dom";
import './user.scss'
import {MdPermIdentity ,MdCalendarToday,MdPhoneAndroid , MdPublish ,MdMailOutline ,MdLocationSearching} from 'react-icons/md'

const User = () => {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                  <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlpQBahpDZSNYA6W-nCeQlpF_RcoYkAbdSg&usqp=CAU' alt=""
                         className="userShowImg" />
                         <div className="userShowTopTitle">
                             <span className="userShowUsername">Md Nooruzzaman</span>
                             <span className="userShowUserTitle">Software Engineer</span>
                         </div>
                    </div>
                    <div className="userShowButtom">
                        <div className="userShowTitle">Account Details</div>
                            <div className="userShowInfo">
                                <MdPermIdentity className='userShowIcon'/>
                                <span className="userShowInfoTitle">
                                    abcdefghi
                                </span>
                            </div>
                            <div className="userShowInfo">
                                <MdCalendarToday className='userShowIcon'/>
                                <span className="userShowInfoTitle">
                                   10-12-2000
                                </span>
                            </div>
                            <div className="userShowTitle">Contact Details</div>
                            <div className="userShowInfo">
                                <MdPhoneAndroid className='userShowIcon'/>
                                <span className="userShowInfoTitle">
                                    +91 8752145287
                                </span>
                            </div>
                            <div className="userShowInfo">
                                <MdMailOutline className='userShowIcon'/>
                                <span className="userShowInfoTitle">
                                    abcd@gmail.com
                                </span>
                            </div>
                            <div className="userShowInfo">
                                <MdLocationSearching className='userShowIcon'/>
                                <span className="userShowInfoTitle">
                                    Bangalore | INDIA
                                </span>
                            </div>
                        
                    </div>
                </div>

                <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm">
                            <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                type="text"
                                placeholder="abcdef"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                type="text"
                                placeholder="Md Nooruzzaman"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                type="text"
                                placeholder="noor@gmail.com"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                type="text"
                                placeholder="+91 8752147524"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                type="text"
                                placeholder="Bangalore | INDIA"
                                className="userUpdateInput"
                                />
                            </div>
                            </div>
                            <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                className="userUpdateImg"
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlpQBahpDZSNYA6W-nCeQlpF_RcoYkAbdSg&usqp=CAU'
                                alt=""
                                />
                                <label htmlFor="file">
                                <MdPublish className="userUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default User
