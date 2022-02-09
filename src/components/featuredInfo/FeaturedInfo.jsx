import React from 'react'
import './featuredInfo.scss'
import {MdOutlineArrowDownward, MdOutlineArrowUpward} from 'react-icons/md'

const FeaturedInfo = () => {
    return (
        <div className='featuredInfo'>
            <div className="featuredItem">
                <span className="featuredTitle revenue">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">&#8377;2,234</span>
                    <span className="featuredMoneyRate">&#8377;-11.4 <MdOutlineArrowDownward className='featuredIcon negative'/></span>

                </div>
                <div className="featuredSub">Comapare to last month</div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle sales">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">&#8377;4,234</span>
                    <span className="featuredMoneyRate">&#8377;-1.4 <MdOutlineArrowDownward className='featuredIcon negative'/></span>

                </div>
                <div className="featuredSub">Comapare to last month</div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle cost">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">&#8377;2,234</span>
                    <span className="featuredMoneyRate">&#8377;11.4 <MdOutlineArrowUpward className='featuredIcon positive'/></span>

                </div>
                <div className="featuredSub">Comapare to last month</div>
            </div>
        </div>
    )
}

export default FeaturedInfo
