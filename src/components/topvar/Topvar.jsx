import React from 'react'
import './topvar.scss'
import {MdOutlineNotifications , MdLanguage ,MdSettings} from 'react-icons/md'

const Topvar = () => {
    return (
        <div className='topvar'>
            <div className="wrapper">
                <div className="topLeft">
                    <span className="logo">Admin-<b>Panel</b></span>
                </div>
                <div className="topRight">
                        <div className="topIconConataier">
                            <MdOutlineNotifications className='icon'/>
                            <span className='topIconBadge'>2</span>

                        </div>
                        <div className="topIconConataier">
                            <MdLanguage className='icon'/>
                            <span className='topIconBadge'>2</span>

                        </div>
                        <div className="topIconConataier">
                            <MdSettings className='icon'/>
                        </div>
                        <img src="data:image/jpeg;base64,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" alt="" className="topAvatar" />
                        
                </div>
            </div>
        </div>
    )
}

export default Topvar
