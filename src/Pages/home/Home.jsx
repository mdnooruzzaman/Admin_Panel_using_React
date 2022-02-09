import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import Dummydata from '../../dummydata'
import './home.scss'
const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={Dummydata} title={"Sales Analytics"} grid dataKey="Active User"/>
            <div className='homeWidget'>
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}

export default Home
