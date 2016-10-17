/* @flow */

export type Story = {
  id: number,
  body: string,
  created_at: string,
};

export type Comment = {
  id: number,
  body: string,
  story_id: number,
  user_id: number,
  created_at: string,
};
