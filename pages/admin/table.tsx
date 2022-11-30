import Breadcrumb from "components/breadcrumb"
import AdminLayout from "layouts/AdminLayout"
import Link from "next/link"
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "store";


const Table = () => {
  const router = useRouter()
  const { user } = useSelector((state: RootState) => state.user);
  const {  idRol } = user?.user || {};

  if (idRol !=1 ) return (
    <div>
      <h1>NO TIENES PERMISO CON TU ROL: {idRol}</h1>

      <button onClick={ ( ) => router.push("/")}> Volver</button>
    </div>
  )
    
return (
    <AdminLayout>
      <Breadcrumb>Admin / Table</Breadcrumb>

     <h1> table components</h1>
     <h2>MOSTRAR UN TAB COMPONENNTS CON TODAS LAS TABLAS PARA MOSTRAR</h2>
     <Link href={'/admin/table/actionTable'}>
        Action table
     </Link>
     <br />
     <Link href={'/admin/table/userTable'}>
        user Table
     </Link>
     <br />
     <Link href={'/admin/table/pedidosTable'}>
        pedidos table
     </Link>
     <br />
     <Link href={'/admin/table/platosTable'}>
        platos table
     </Link>
    </AdminLayout>
)
}

export default Table