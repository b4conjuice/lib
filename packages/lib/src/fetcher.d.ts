declare module '@bacon/fetcher' {
  export default function fetcher<TResponse>(
    url: string,
    // `RequestInit` is a type for configuring
    // a `fetch` request. By default, an empty object.
    config: RequestInit
    // This function is async, it will return a Promise:
  ): Promise<TResponse>
}
