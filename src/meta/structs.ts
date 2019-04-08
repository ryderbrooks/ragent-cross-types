// cross cutting
import * as http2 from 'http2';


export type sInHeaders =
    http2.IncomingHttpHeaders
    & http2.IncomingHttpStatusHeader;

// cross cutting
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

// cross cutting
export type sTransfer =
    {body: Buffer}
    & sResponse;

// cross cutting
export type sRequestConstructorArgs = {
    headers: http2.OutgoingHttpHeaders;
    options: http2.ClientSessionRequestOptions;
    responseTimeout: number;
    transferTimeout: number;
};