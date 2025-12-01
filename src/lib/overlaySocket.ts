import { client } from "./jstack";

type OverlayMessage = {
  roomId: string;
  author: string;
  text: string;
  platform?: string;
  avatarUrl?: string;
};

const socket = client.overlays.chat.$ws();

export function sendOverlayMessage(msg: OverlayMessage) {
  socket.emit("message", {
    roomId: msg.roomId,
    author: msg.author,
    text: msg.text,
    platform: msg.platform,
    avatarUrl: msg.avatarUrl,
  });
}
