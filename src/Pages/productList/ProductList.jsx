import React from 'react'
import './productlist.scss'
import {MdDelete} from 'react-icons/md'
import { DataGrid } from '@material-ui/data-grid'
import { Link } from 'react-router-dom';
import productRows from '../../productRows';
import { useState } from 'react';

const ProductList = () => {
    const [data , setData] = useState(productRows);
    const handleDelete = (id) => {
        setData(data.filter((items) => items.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 200 , 
        renderCell: (params) => {
            return (
              <div className="productListProduct">
                <img className="productListProductImg" src={params.row.img} alt="" />
                {params.row.name}
              </div>
            );
          },
    },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
          },
          {
              field: "action",
              headerName: "Action",
              width: 150,
              renderCell : (params) => {
                  return (
                      <div className='productListAction'>
                          <Link to={"/product/" + params.row.id}>
                          <button className='productListEdit'>Edit</button>
                          </Link>
                          <MdDelete className="productDelete" onClick={() => handleDelete(params.row.id)}/>
                         
                      </div>
                      
                  )
              }
          }
        
      ];
    return (
        <div className='productList'>
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

export default ProductList
