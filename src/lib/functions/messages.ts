import {
  RESTPostChatMessageBody,
  RESTPostChatMessageResult,
} from "kick-api-types/rest";

/**
 * Sends a message to a Kick chat channel on behalf of the broadcaster.
 */
export const sendMessage = async ({
  broadcaster,
  message,
}: {
  broadcaster: { name: string; accessToken: string };
  message: string;
}): Promise<{ sent: boolean; message: string; status: number }> => {
  const res = await fetch("https://api.kick.com/public/v1/chat", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${broadcaster.accessToken}`,
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify({
      content: message,
      type: "bot",
    } as RESTPostChatMessageBody),
  });

  if (!res.ok) {
    const data = (await res.json()) as RESTPostChatMessageResult;
    console.log(
      JSON.stringify({
        messageSending: {
          sent: false,
          message: data.message,
          status: res.status,
        },
      })
    );
    return { sent: false, message: data.message, status: res.status };
  }

  const data = (await res.json()) as RESTPostChatMessageResult;

  console.log(
    JSON.stringify({
      messageSending: {
        sent: data.data.is_sent,
        message: data.message,
        status: res.status,
      },
    })
  );

  return { sent: data.data.is_sent, message: data.message, status: res.status };
};
