import * as http2 from 'http2';


export namespace structs {
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

    export type sTransfer =
        {body: Buffer}
        & sResponse;

    export type sRequestConstructorArgs = {
        headers: http2.OutgoingHttpHeaders;
        options: http2.ClientSessionRequestOptions;
        responseTimeout: number;
        transferTimeout: number;
    };
}





export namespace interfaces {
    export interface IRequestable {
        request( {
                     headers,
                     options,
                     responseTimeout,
                     transferTimeout
        }: structs.sRequestConstructorArgs ): Promise<structs.sTransfer>;
    }
}



export namespace types {
    export type RES<T> = ( value?: (T | Promise<T>) ) => void;
    export type REJ = ( reason?: any ) => void;
}