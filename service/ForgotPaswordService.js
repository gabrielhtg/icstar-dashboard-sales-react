import axios from "axios";

export default async function ForgotPasswordService(email) {
  const reqData = {
    email: email,
  };

  try {
    const response = await axios.post("/api/forgot-password", reqData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return { success: true, message: "Email with reset instructions sent." };
    } else {
      return { success: false, message: "Error sending reset instructions." };
    }
  } catch (error) {
    console.error("Error:", error);
    return { success: false, message: "Error sending reset instructions." };
  }
}
