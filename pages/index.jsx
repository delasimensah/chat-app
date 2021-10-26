import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useChat } from "../context";

const Auth = () => {
  const { username, setUsername, secret, setSecret } = useChat();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (username.length === 1 || secret.length === 1) return;

    setLoading(true);
    try {
      await axios.put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": process.env.NEXT_PUBLIC_PRIVATE_KEY } }
      );

      setLoading(false);
      router.push("/chats");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[90%] md:w-[420px] rounded-3xl shadow-lg bg-white">
        <form className="p-5 md:p-10" onSubmit={onSubmit}>
          <div className="auth-title">Chat App</div>

          <div className="input-container">
            <input
              placeholder="Username"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            {loading ? "Loading..." : "Login / Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
