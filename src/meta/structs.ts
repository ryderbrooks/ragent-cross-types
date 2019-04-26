import * as http2 from 'http2';


export type sInHeaders =
  http2.IncomingHttpHeaders
  & http2.IncomingHttpStatusHeader;

export type sResponse = {
  responseHeaders: sInHeaders | undefined;
  stats: {
    utc_startTime: Date | undefined;
    status: number;
    bytes: number;
    response_micro_duration: number | undefined;
    transfer_micro_duration: number | undefined;
  };
};

type _body = {body: Buffer};
export type sTransfer =
  _body
  & sResponse;


export type sRequestConstructorArgs = {
  headers: http2.OutgoingHttpHeaders;
  options: http2.ClientSessionRequestOptions;
  responseTimeout: number;
  transferTimeout: number;
};