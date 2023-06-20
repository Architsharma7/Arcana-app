"use client";
import { Auth, useAuth } from "@arcana/auth-react";
import { useEffect, useState } from "react";
import axios from "axios";

const onLogin = () => {
  console.log("hello");
};

export default function Home() {
  const auth = useAuth();

  const [userData, setUserData] = useState({
    emailId: "",
    address: "",
    publickey: "",
  });
  const [error, setError] = useState([]);

  async function getData() {
    const user = await auth.user;
    const emailId = auth.user.email;
    const address = auth.user.address;
    const publickey = auth.user.publicKey;
    // setUserData({
    //   emailId: emailId,
    //   address: address,
    //   publickey: publickey,
    // });
    console.log(userData);

    axios
      .post("/api/set_task", userData)
      .then(
        (res) => console.log(res),
        setUserData({ emailId, address, publickey })
      )
      .catch((error) => console.log(error));

    // useEffect(() => {
    //   axios.get('/api/get_task').then((res) => {

    async function logout() {
      await auth.logout();
      alert("logged out");
    }

    return (
      <div>
        {auth.loading ? (
          "Loading"
        ) : auth.isLoggedIn ? (
          <div>
            <p>Logged In</p>
            <button onClick={getData}>get data</button>
            {userData && (
              <div>
                <p>email : {userData.emailId}</p>
                <p>address : {userData.address}</p>
                <p>publickey : {userData.publickey}</p>
              </div>
            )}
            <button onClick={logout}>logout</button>
          </div>
        ) : (
          <div>
            <Auth externalWallet={true} theme={"light"} onLogin={onLogin} />
          </div>
        )}
      </div>
    );
  }
}
