import axios from "axios";

export default async function IsLogin(router) {
  let url = "/api/islogin";

  await axios.get(url).then((response) => {
    if (response.status == 200) {
      router.push("/dashboard");
    }
  });
}
