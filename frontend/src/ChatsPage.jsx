import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "8cb9f624-301a-40bb-a539-cfee6d22285f",
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

export default ChatsPage;
