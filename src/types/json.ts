declare module "@/data/users.json" {
  type UserProfile = {
    title: string;
    phone: string;
    skype: string;
    real_name: string;
    real_name_normalized: string;
    display_name: string;
    display_name_normalized: string;
    fields: Record<string, unknown>;
    status_text: string;
    status_emoji: string;
    status_emoji_display_info: unknown[];
    status_expiration: number;
    avatar_hash: string;
    image_original?: string;
    is_custom_image: boolean;
    email: string;
    huddle_state?: string;
    huddle_state_expiration_ts?: number;
    first_name: string;
    last_name: string;
    image_24: string;
    image_32: string;
    image_48: string;
    image_72: string;
    image_192: string;
    image_512: string;
    image_1024?: string;
    status_text_canonical: string;
    team: string;
    api_app_id?: string;
    always_active?: boolean;
    guest_invited_by?: string;
    bot_id?: string;
  };

  type User = {
    id: string;
    team_id: string;
    name: string;
    deleted: boolean;
    color?: string;
    real_name?: string;
    tz?: string;
    tz_label?: string;
    tz_offset?: number;
    profile: UserProfile;
    is_admin?: boolean;
    is_owner?: boolean;
    is_primary_owner?: boolean;
    is_restricted?: boolean;
    is_ultra_restricted?: boolean;
    is_bot: boolean;
    is_app_user: boolean;
    updated: number;
    is_email_confirmed?: boolean;
    who_can_share_contact_card?: string;
    is_invited_user?: boolean;
  };

  const data: User[];

  export default data;
}

declare module "@/data/messages.json" {
  type Attachment = {
    id: number;
    color?: string;
    fallback: string;
    text: string;
    pretext?: string;
    title?: string;
    title_link?: string;
    mrkdwn_in?: string[];
  };

  type Block = {
    type: string;
    block_id: string;
    elements: BlockElement[];
  };

  type BlockElement = {
    type: string;
    elements: TextElement[];
  };

  type TextElement = {
    type: string;
    text: string;
    style?: {
      bold?: boolean;
    };
  };

  type Message = {
    subtype: string;
    user?: string;
    text: string;
    type: "message";
    ts: string;
    bot_id?: string;
    bot_link?: string;
    username?: string;
    attachments?: Attachment[];
    blocks?: Block[];
  };

  const data: Message[];

  export default data;
}
