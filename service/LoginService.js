import axios from "axios";

export default async function LoginService(email, password, remember) {
  const reqData = {
    email: email,
    password: password,
    rememberMe: remember,
  };

  await axios
    .post("/api/login", reqData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
    });
}
