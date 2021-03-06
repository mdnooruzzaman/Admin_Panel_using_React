import React from 'react';
import './widgetLg.scss';


const WidgetLg = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img
                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="widgetLgImg"
                    />
                    <span className="widgetLgName">Saifee Nomani</span>
                </td>
                <td className="widgetLgDate">2 Jun 2021</td>
                <td className="widgetLgAmount">&#8377;120.00</td>
                <td className="widgetLgButton">
                    <Button type="Approved" />
                </td>
           </tr>

           <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img
                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="widgetLgImg"
                    />
                    <span className="widgetLgName">Shiblee Nomani</span>
                </td>
                <td className="widgetLgDate">2 Jun 2021</td>
                <td className="widgetLgAmount">&#8377;120.00</td>
                <td className="widgetLgStatus">
                    <Button type="Declined" />
                </td>
           </tr>
           <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img
                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="widgetLgImg"
                    />
                    <span className="widgetLgName">Kaifee Nomani</span>
                </td>
                <td className="widgetLgDate">2 Jun 2021</td>
                <td className="widgetLgAmount">&#8377;120.00</td>
                <td className="widgetLgStatus">
                    <Button type="Pending" />
                </td>
           </tr>
           <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img
                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="widgetLgImg"
                    />
                    <span className="widgetLgName">Kamni Nomani</span>
                </td>
                <td className="widgetLgDate">2 Jun 2021</td>
                <td className="widgetLgAmount">&#8377;120.00</td>
                <td className="widgetLgStatus">
                    <Button type="Approved" />
                </td>
           </tr>
           <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img
                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="widgetLgImg"
                    />
                    <span className="widgetLgName">Aman</span>
                </td>
                <td className="widgetLgDate">2 Jun 2021</td>
                <td className="widgetLgAmount">&#8377;120.00</td>
                <td className="widgetLgStatus">
                    <Button type="Declined" />
                </td>
           </tr>
            </table>

        </div>
    )
}

export default WidgetLg;
