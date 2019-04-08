// cross cutting
import { sRequestConstructorArgs, sTransfer } from './structs';



export interface IRequestable {
    request( { headers, options, responseTimeout, transferTimeout }: sRequestConstructorArgs ): Promise<sTransfer>;
}
