import {  useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "store";

const AddPlato = () => {
    const { productList } = useSelector((state: RootState) => state.product);
    // nombrePlato, cantidad, tipoPago, mesa, cantidadPersonas
    console.log(productList)
    const { user } = useSelector((state: RootState) => state.user);
    const { token } = user?.user || {};
    const { register, handleSubmit }: any = useForm();
    const onSubmit = async (data: any) => {
        console.log(data)
        // const config = {
        //     // headers: { Authorization: `Bearer ${token}` },
        //     params: {
        //         nombrePlato: data.nombrePlato,
        //         cantidad: data.cantidad,
        //         tipoPago: data.tipoPago,
        //         mesa: data.mesa,
        //         cantidadPersonas: data.cantidadPersonas
        //     }
        // };
        // const URL = "http://localhost:4000/client/clientRole/crearPedido/";
        // const res = await axios.post(URL, config)


        // if (res.status === 200 || 201 || 202) {

        //     toast.success(res.data.message);

        //     setTimeout(() => {
        //         router.push("/admin/table/platosTable");
        //     }, 3000);
        // } else {
        //     toast.error(res.data.message);
        // }
    };
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <h1 style={{ fontSize: '10px' }}> {token}</h1>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h1>nombre plato</h1>
                
                <div className="form__input-row">
                    <select {...register("nombrePlato")} name="nombrePlato" className="form__input" >
                        

                    </select>

                </div>
                <h1>cantidad personas</h1>

                <div className="form__input-row">
                    <select {...register("cantidadPersonas")} name="cantidadPersonas" className="form__input" ref={register({
                        required: true,
                    })}>
                        <option value="2">Mesa de 2</option>
                        <option value="4">Mesa de 4</option>
                        <option value="8">Mesa de 8</option>
                    </select>
                </div>
                <h1>tipo pago</h1>

                <div className="form__input-row">
                    <select {...register("tipoPago")} name="tipoPago" className="form__input" ref={register({
                        required: true,
                    })}>
                        <option value="1">Efectivo</option>
                        <option value="2">Debito</option>
                        <option value="3">Credito</option>
                    </select>
                </div>
                <h1>mesa</h1>

                <div className="form__input-row">
                    <select {...register("mesa")} name="mesa" className="form__input" ref={register({
                        required: true,
                    })}>
                        <option value="1">mesa 1</option>
                        <option value="2">mesa 2</option>
                        <option value="3">mesa 3</option>
                        <option value="4">mesa 4</option>
                        <option value="5">mesa 5</option>
                        <option value="6">mesa 6</option>
                    </select>
                </div>
                <h1>cantidad</h1>

                <div className="form__input-row">
                    <select {...register("cantidad")} name="cantidad" className="form__input" ref={register({
                        required: true,
                    })}>
                        <option value="1">1</option>
                        <option value="2">3</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="btn btn--rounded btn--yellow btn-submit"
                >
                    Añadir
                </button>
            </form>
        </>
    )

}

export default AddPlato