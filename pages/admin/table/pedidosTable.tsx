import AdminLayout from "layouts/AdminLayout";
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridRenderCellParams } from '@mui/x-data-grid';

import { GetServerSideProps } from "next";
import axios from "axios";
import Breadcrumb from "components/breadcrumb";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const token = req.cookies.tokenUser;
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    const res = await axios.get(`http://localhost:4000/adminRole/readAction`, config)
    let actionData = (await res.data.results.data) || [];
    return {
        props: {
            actionData,
        },
    };
};

const ActionTable = ({ actionData }: any) => {
    const router = useRouter()
    const columns = [
        {
            field: 'idAction',
            headerName: 'idAction',
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
            field: 'idUser',
            headerName: 'idUser',
            flex: 1,
            minWidth: 70,

            renderCell: (params: GridRenderCellParams) => <>{params.value} </>
        },
        {
            field: 'nameRole',
            headerName: 'nameRole',
            flex: 1,
            minWidth: 70,
            renderCell: (params: GridRenderCellParams) => <>{params.value} </>
        },
        {
            field: 'nameTableAction',
            headerName: 'nameTableAction',
            flex: 1,
            minWidth: 70,
            renderCell: (params: GridRenderCellParams) => <>{params.value} </>
        },
        {
            field: 'actionDetail',
            headerName: 'actionDetail',
            flex: 1,
            minWidth: 500,
            renderCell: (params: GridRenderCellParams) => <>{params.value} </>
        },
        {
            field: 'actionCreation',
            headerName: 'actionCreation',
            flex: 1,
            minWidth: 200,
            renderCell: (params: GridRenderCellParams) => <>{params.value} </>
        }
    ];
    return (
        <AdminLayout>
            <Breadcrumb>Admin / Table / ActionTable</Breadcrumb>
            <h1>Action table</h1>
            <button onClick={() => router.push('/admin/crud/addPedido')}>Añadir</button>
            <DataGrid
                rows={actionData}
                columns={columns}
                autoHeight
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
                getRowId={(row) => row.idAction}
            />
        </AdminLayout>

    );
};

export default ActionTable;
