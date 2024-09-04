type Pin = {
  id: string;
  type: string;
  created: number;
  user: string;
  owner: string;
};

type TopicOrPurpose = {
  value: string;
  creator: string;
  last_set: number;
};

export type Channel = {
  id: string;
  name: string;
  created: number;
  creator: string;
  is_archived: boolean;
  is_general: boolean;
  members: string[];
  topic: TopicOrPurpose;
  purpose: TopicOrPurpose;
  pins?: Pin[]; // Optional, as not all channels have pins
};
