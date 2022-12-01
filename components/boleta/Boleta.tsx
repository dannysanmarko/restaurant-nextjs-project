import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 50,
    },
    container: {
        width: '100%',
        marginBottom: 5,
        // backgroundColor: '#e63946'
    },
})
const BoletaComponent = ({ id, cartItems }: any) => {
    return (
        <Document >
            <Page style={styles.page}>
                <View style={styles.container}>
                    <Text style={{ justifyContent: 'flex-end' }}>Restaurante Siglo XXI factura electronica.</Text>
                    <Text>Generacion automatica de boleta con el id: {id ? id : 'nada'}</Text>
                    <View style={{ width: 500, display: 'flex', flexWrap: 'wrap' }}>
                        <View style={{ display: 'flex', width: '300' }}> {cartItems.map((item: any) => (
                            <View key={item.id}>
                                <Text> Plato: {item.name} - Precio total: {item.price}</Text>
                            </View>
                        ))}</View>
                    </View>
                </View>
                <Text>Gracias por comprar en nuestro restaurante, para consultar por tu pedido ingresa a tus pedidos!</Text>

            </Page>
        </Document>

    )
}

export default BoletaComponent