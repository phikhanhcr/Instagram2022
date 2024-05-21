export enum ChannelMessageType {
  TEXT = 0,
  STICKER = 1,
  IMAGE = 2,
  IMAGES = 3,
}

export enum ChannelType {
  DIRECT = 1,
  GROUP = 2,
}

export interface IKeyChannel {
  u1: number;
  u2: number;
}

export interface ILastMessage {
  id: number;
  message: string;
  message_type: ChannelMessageType;
  sequence: number;
  // created_At
  sent_at: Date;
  sender: {
    id: number;
    name: string;
    avatar: string;
  };
}

export interface IParticipantResponse {
  id: number;
  user_id: number;
  channel_id: number;
  channel_name: string;
  channel_avatar: string;
  last_seen: number;
  last_sequence: number;
  last_active_at: number;
  unread_count: number;
  other_last_seen: number;
  last_message: ILastMessage;
}

export interface IMessageResponse {
  id: number;
  channelId: number;
  senderId: number;
  senderName: string;
  senderAvatar: string;
  message: string;
  messageType: ChannelMessageType;
  sequence: number;
  createdAt: number;
}
