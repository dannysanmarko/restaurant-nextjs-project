
import { useRouter } from "next/router"
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { RootState } from "store";
import { useSelector } from "react-redux";
import BoletaComponent from '../../../components/boleta/Boleta'
import Layout from '../../../layouts/Main';
import { Grid } from "@mui/material";
import { Box } from "@mui/system";



const Boleta = () => {
    const router = useRouter()
    const { cartItems } = useSelector((state: RootState) => state.cart);
    let { cid } = router.query
    if (!cid)
        return cid = '123456'


    return (
        <Layout>
            <Grid container spacing={2} marginTop={2} >
                <Grid item xs={8}>
                    <h1>Tu numero de boleta es: {cid}</h1>
                </Grid>
                <Grid item xs={4}>

                    <PDFDownloadLink document={<BoletaComponent id={cid} cartItems={cartItems} />} fileName={`${cid}.pdf`}>
                        {({ loading }) =>
                            loading ? 'Loading document...' : <button type="button" className="btn btn--rounded btn--border">Descargar boleta</button>
                        }
                    </PDFDownloadLink>
                </Grid>
                <Grid item xs={12} width={'900px'} >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: 300,
                            height: 300,

                        }}
                    >
                        <PDFViewer showToolbar={false} width={300} >
                            <BoletaComponent id={cid} cartItems={cartItems} />
                        </PDFViewer>

                    </Box>

                </Grid>

            </Grid>




            {/* {cartItems?.map((item: any) => (
                    <div key={item.id}>
                        <img src={item.thumb} alt={item.thumb} />
                    </div>
                ))} */}
        </Layout>
    )
}

export default Boleta