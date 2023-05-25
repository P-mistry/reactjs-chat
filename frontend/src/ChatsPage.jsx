import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='f07b2061-69e5-4f4b-8bbc-406a91623fdd'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%'}}
      />
    </div>
  );
};

export default ChatsPage;