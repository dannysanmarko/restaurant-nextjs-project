
import { useRouter } from "next/router"
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { RootState } from "store";
import { useSelector } from "react-redux";
import BoletaComponent from '../../components/boleta/Boleta'



const Boleta = () => {
    const router = useRouter()
    const { cartItems } = useSelector((state: RootState) => state.cart);
    let { cid } = router.query
    if (!cid )
    return cid = '123456'


    return (
        <div>
            <h1>boleta id: {cid}</h1>
            <PDFDownloadLink document={<BoletaComponent id={cid} cartItems={cartItems} />} fileName={`${cid}.pdf`}>
                {({ loading }) =>
                    loading ? 'Loading document...' : 'Download now!'
                }
            </PDFDownloadLink>

            <PDFViewer showToolbar={true} width={'500'}>
                <BoletaComponent id={cid} cartItems={cartItems}/> 
            </PDFViewer>

        </div>
    )
}

export default Boleta