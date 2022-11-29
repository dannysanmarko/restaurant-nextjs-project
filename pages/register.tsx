import Layout from "../layouts/Main";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useState } from "react";

const RegisterPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    //localhost:4000/auth/register/createUser
    const URL = "http://localhost:4000/auth/register/createUser";
    await axios.post(URL, {
      email: data.email,
      password: data.password,
      userName: data.userName,
      phoneNumber: data.phoneNumber
    }).then( (res ) => {
      if (res.status === 200 || 201) {
        toast.success(res.data.message);
  
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } else {
        toast.error(res?.data.response.error);
      }
    })

    // !userName || !email || !phoneNumber || !password
    
   
  };
  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/">
              <a>
                <i className="icon-left"></i> Volver a la pagina principal
              </a>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">
              Crea una cuenta para comenzar a disfrutar de nuestros mejores platos! 😋
            </h2>
            {/* <p className="form-block__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p> */}

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="email"
                  type="text"
                  name="email"
                  ref={register({
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.email && errors.email.type === "required" && (
                  <p className="message message--error">
                    Es requerido, no puede estar en blanco!
                  </p>
                )}

              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="message message--error">
                    Es requerido, no puede estar en blanco!
                  </p>
                )}
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="text"
                  placeholder="nombre"
                  name="userName"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="message message--error">
                    Es requerido, no puede estar en blanco!
                  </p>
                )}
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="text"
                  placeholder="número de teléfono"
                  name="phoneNumber"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="message message--error">
                    Es requerido, no puede estar en blanco!
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Registrarse
              </button>
              <p className="form__signup-link">
               ¿Ya estas registrado? <Link href="/login">Entra!</Link>
              </p>
             
            </form>
           
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RegisterPage;
