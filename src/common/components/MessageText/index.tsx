import { FC, ReactNode } from "react";
import clsx from "clsx";

type IMsgType = "error" | "info";

interface IMessageText {
  children: ReactNode;
  msgType?: IMsgType;
}

const MessageText: FC<IMessageText> = ({ msgType = "error", children }) => {
  const textColorClass = msgType === "error" ? "text-red-500" : "text-blue-500";

  return <p className={clsx("text-xs", textColorClass)}>{children}</p>;
};

export default MessageText;
