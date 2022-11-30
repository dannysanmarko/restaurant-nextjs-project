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
    const res = await axios.get(`http://restaurantproject.duckdns.org:4000/client/getPlatos`, config)
    let platosData = (await res.data) || [];
    return {
      props: {
        platosData,
      },
    };
  };

const PlatosTable = ({platosData} : any) => {

    const {listPlatoss } = platosData
  const router = useRouter()
  const { user } = useSelector((state: RootState) => state.user);
  const {  idRol } = user?.user || {};

  if (idRol !=1 ) return (
    <div>
      <h1>NO TIENES PERMISO CON TU ROL: {idRol}</h1>

      <button onClick={ ( ) => router.push("/")}> Volver</button>
    </div>
  )
  // idPlato, nombrePlato, precioPlato, imagen
  const columns = [
    {
        field: 'idPlato',
        headerName: 'idPlato',
        minWidth: 5,
        //filtered data to rendercell
        renderCell: (params: GridRenderCellParams) => <>{params.value} </>
    },
    {
        field: 'nombrePlato',
        headerName: 'nombrePlato',
        flex: 1,
        minWidth: 150,
        renderCell: (params: GridRenderCellParams) => <>{params.value} </>
    },
    {
        field: 'precioPlato',
        headerName: 'precioPlato',
        flex: 1,
        minWidth: 70,

        renderCell: (params: GridRenderCellParams) => <>{params.value} </>
    },
    {
        field: 'imagen',
        headerName: 'imagen',
        flex: 1,
        minWidth: 70,
        renderCell: (params: GridRenderCellParams) => <>{params.value} </>
    }
];
  return (
    <AdminLayout>
      <Breadcrumb>Admin / Table / PlatosTable</Breadcrumb>
      <h1>User table</h1>
      <button onClick={ () => router.push('/admin/crud/addPlato')}>Añadir</button>
      <DataGrid
        rows={listPlatoss}
        columns={columns}
        autoHeight
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) => row.idPlato}
      />
    </AdminLayout>

  );
};

export default PlatosTable;
