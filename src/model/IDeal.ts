export interface IDeal {
  id: number;
  creator_user_id: number;
  user_id: number;
  person_id: number;
  org_id: number;
  stage_id: number;
  title: string;
  value: number;
  currency: string;
  add_time: Date;
  update_time: Date;
  active: boolean;
  deleted: boolean;
  status: string;
  close_time: Date;
  won_time: Date;
  first_won_time: Date;
  person_name: string;
  org_name: string;
  formatted_value: string;
  weighted_value: number;
  formatted_weighted_value: string;
  weighted_value_currency: string;
  owner_name: string;
  cc_email: string;
}
