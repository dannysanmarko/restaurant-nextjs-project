
import { useRouter } from "next/router"
import { BlobProvider, PDFViewer, Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { RootState } from "store";
import { useSelector } from "react-redux";
import BoletaComponent from '../../components/boleta/Boleta'

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});
const BoletaGenerated = ({ id, cartItems }: any) => {
    console.log(cartItems)
    return (
        <Document >
            <Page size="A4" style={styles.page}>
                {cartItems.map( (item : any) => (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                    </div>
                ))}
            
            </Page>
        </Document>
    )
}

const Boleta = () => {
    const router = useRouter()
    const { cartItems } = useSelector((state: RootState) => state.cart);
    const { cid } = router.query
    console.log(cartItems)



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