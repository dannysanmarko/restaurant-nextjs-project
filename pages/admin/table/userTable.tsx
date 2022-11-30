import AdminLayout from "layouts/AdminLayout";
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridRenderCellParams } from '@mui/x-data-grid';

import { GetServerSideProps } from "next";
import axios from "axios";
import Breadcrumb from "components/breadcrumb";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const getServerSideProps: GetServerSideProps = async ({req}) => {
    const token = req.cookies.tokenUser;
      const config = {
    headers: { Authorization: `Bearer ${token}` },
  }; 
   
    const res = await axios.get(`http://restaurantproject.duckdns.org:4000/user/adminRole/getUser`, config)
    let {listUser} = (await res.data) || [];
    return {
      props: {
        listUser,
      },
    };
  };

const UserTable = ({listUser} : any) => {
  const router = useRouter()
  const { user } = useSelector((state: RootState) => state.user);
  const {  idRol } = user?.user || {};

  if (idRol !=1 ) return (
    <div>
      <h1>NO TIENES PERMISO CON TU ROL: {idRol}</h1>

      <button onClick={ ( ) => router.push("/")}> Volver</button>
    </div>
  )
  // idUser, userName, email, phoneNumber, fk_Rol
  const columns = [
    {
        field: 'idUser',
        headerName: 'idUser',
        minWidth: 5,
        //filtered data to rendercell
        renderCell: (params: GridRenderCellParams) => <>{params.value} </>
    },
    {
        field: 'userName',
        headerName: 'userName',
        flex: 1,
        minWidth: 150,
        renderCell: (params: GridRenderCellParams) => <>{params.value} </>
    },
    {
        field: 'email',
        headerName: 'email',
        flex: 1,
        minWidth: 70,

        renderCell: (params: GridRenderCellParams) => <>{params.value} </>
    },
    {
        field: 'phoneNumber',
        headerName: 'phoneNumber',
        flex: 1,
        minWidth: 70,
        renderCell: (params: GridRenderCellParams) => <>{params.value} </>
    },
    {
        field: 'fk_Rol',
        headerName: 'fk_Rol',
        flex: 1,
        minWidth: 70,
        renderCell: (params: GridRenderCellParams) => <>{params.value} </>
    }
];
  return (
    <AdminLayout>
      <Breadcrumb>Admin / Table / userTable</Breadcrumb>
      <h1>User table</h1>
      <DataGrid
        rows={listUser}
        columns={columns}
        autoHeight
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) => row.idUser}
      />
    </AdminLayout>

  );
};

export default UserTable;
