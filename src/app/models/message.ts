import { User } from './user';

export class Message {
    content: string;
    user: User;
    messageId?: string;
    userId?: string;

    constructor(
        content: string,
        user: User,
        messageId?: string,
        userId?: string
    ) {
        this.content = content;
        this.user = user;
        this.messageId = messageId;
        this.userId = userId;
    }
}