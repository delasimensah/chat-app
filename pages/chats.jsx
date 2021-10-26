import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useChat } from "../context";

// import { ChatList } from "react-chat-engine";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

const Chats = () => {
  const { username, secret } = useChat();
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === "" || secret === "") {
      router.push("/");
    }
  }, [username, secret]);

  if (!showChat) return <div />;

  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.NEXT_PUBLIC_PROJECT_ID}
      userName={username}
      userSecret={secret}
      renderNewMessageForm={() => <MessageFormSocial />}
    />
  );
};

export default Chats;
