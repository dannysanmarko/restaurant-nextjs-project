import { useSelector } from "react-redux";
import { RootState } from "store";
import Layout from "../layouts/Main";

export const Account = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { idUser, name, email, idRol, token } = user.user || {};
  return (
    <Layout>
      <h1>Account section</h1>
      <h1>idUser: {idUser}</h1>
      <h1>name: {name}</h1>
      <h1>email: {email}</h1>
      <h1>idRol: {idRol}</h1>
      <h1>token: {token}</h1>
    </Layout>
  );
};

export default Account;
