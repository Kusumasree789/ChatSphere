import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const getAvatarUrl = (name) => {
    const source = (name || "User").trim();
    const initial = source.charAt(0).toUpperCase();
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(initial)}&background=0f766e&color=fff`;
};

const Message = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePicture = fromMe ? authUser.profilePicture : selectedConversation?.profilePicture;
    const fallbackAvatarName = fromMe ? authUser.fullName || authUser.username : selectedConversation?.fullName || selectedConversation?.username;
    const avatarSrc = profilePicture || getAvatarUrl(fallbackAvatarName);
    const bubbleBgColor = fromMe ? 'bg-blue-500' : '';

    const shakeClass = message.shouldShake ? 'shake' : '';

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img
                        alt='Tailwind CSS chat bubble component'
                        src={avatarSrc}
                        onError={(e) => { e.target.onerror = null; e.target.src = getAvatarUrl(fallbackAvatarName); }}
                    />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
        </div>
    );
};
export default Message;