import React from 'react'
import { Page, Text, View, Document} from '@react-pdf/renderer';
const BoletaComponent = ({ id, cartItems }: any) => {
    console.log(id)
    console.log(cartItems)
    return (
        <Document>
            <Page>
               <Text>{id ? id : 'nada'}</Text>
                <Text> {cartItems.map ((item: any) => (
                    <View key={item.id}>
                         <Text>{item.name}</Text>
                    </View>
                ))}</Text>
            </Page>
        </Document>

    )
}

export default BoletaComponent