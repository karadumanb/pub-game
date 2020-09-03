declare type RequestPayload<T> =
  | { [key: string]: string | number | T | RequestPayload<any> }
  | T;

type IGameType = 'never_have' | 'truth_or_drink' | 'mingler' | 'dare_or_drink'

declare interface IGame {
  prominent: boolean;
  title: string;
  description: string;
  image_url: RequireResolve<string>;
  sub_title: string;
  type: IGameType
}
