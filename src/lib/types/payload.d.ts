declare type RequestPayload<T> =
  | { [key: string]: string | number | T | RequestPayload<any> }
  | T;

type IGameType = 'never_have' | 'truth_or_drink' | 'mingler' | 'dare_or_drink' | 'most_likely_to' | 'shot_of_fortune'

declare interface IGame {
  prominent: boolean;
  title: string;
  description: string;
  image_url: RequireResolve<string>;
  sub_title: string;
  type: IGameType
}
