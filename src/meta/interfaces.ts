// cross cutting


export interface IRequestable<A, R> {
  request( opts: A ): Promise<R>;
}