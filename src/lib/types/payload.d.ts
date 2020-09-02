declare type RequestPayload<T> =
  | { [key: string]: string | number | T | RequestPayload<any> }
  | T;


declare interface IGame {
  title: string;
  description: string;
  image_url: RequireResolve<string>;
}
