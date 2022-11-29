import Breadcrumb from "components/breadcrumb"
import AdminLayout from "layouts/AdminLayout"
import Link from "next/link"


const Table = () => {
    
return (
    <AdminLayout>
      <Breadcrumb>Admin / Table</Breadcrumb>

     <h1> table components</h1>
     <h2>MOSTRAR UN TAB COMPONENNTS CON TODAS LAS TABLAS PARA MOSTRAR</h2>
     <Link href={'/admin/table/actionTable'}>
        action table

     </Link>
    </AdminLayout>
)
}

export default Table