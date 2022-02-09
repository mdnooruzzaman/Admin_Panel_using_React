import {React , useState} from 'react'
import './userlist.scss';
import {MdDelete} from 'react-icons/md'
import { DataGrid } from '@material-ui/data-grid'
import { Link } from 'react-router-dom';
import userRows from '../../UserData';

const UserList = () => {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200 , 
        renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="userListUserImg" src={params.row.avatar} alt="" />
                {params.row.username}
              </div>
            );
          },
    },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
          },
          {
              field: "action",
              headerName: "Action",
              width: 150,
              renderCell : (params) => {
                  return (
                      <div className='userListAction'>
                          <Link to={"/user/" + params.row.id}>
                          <button className='userListEdit'>Edit</button>
                          </Link>
                          
                          <MdDelete className='userListDelete' onClick={() => handleDelete(params.row.id)}/>
                      </div>
                      
                  )
              }
          }
        
      ];
      
     
    return (
        <div className='userList'>
             <DataGrid
                rows={data} disableSelectionOnClick
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default UserList
