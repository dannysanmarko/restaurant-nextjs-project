import Breadcrumb from 'components/breadcrumb';
import AdminLayout from 'layouts/AdminLayout'
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const Admin = () => {

  const { user } = useSelector((state: RootState) => state.user);
  const {  idRol } = user?.user || {};

  if (idRol !=1 ) return (
    <div>
      <h1>NO TIENES PERMISO CON TU ROL: {idRol}</h1>

    </div>
  )
  return (
    <AdminLayout>
      <Breadcrumb>Admin</Breadcrumb>
      <h1>admin index</h1>
      <h2>aqui la idea es mostrar algunos dashbord o alguna otra data</h2>
    </AdminLayout>
  );
};

export default Admin;
