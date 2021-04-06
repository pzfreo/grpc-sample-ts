import grpc from "@grpc/grpc-js";
import { IPurchaseServer, PurchaseService } from "./proto/purchase_grpc_pb";
import { PurchaseRequest, PurchaseReply } from "./proto/purchase_pb";
import {v4 as uuidv4} from 'uuid';


export class PurchaseServer implements IPurchaseServer {
    [name: string]: import("@grpc/grpc-js").UntypedHandleCall;
    
    purchase = (call: grpc.ServerUnaryCall<PurchaseRequest, PurchaseReply>, callback: grpc.sendUnaryData<PurchaseReply>): void => {
        const reply: PurchaseReply = new PurchaseReply();

        // here is where we would save the data!
        console.log(call.request.toObject());
        
        reply.setUuid(uuidv4());
        reply.setReturncode(0);
        callback(null, reply);
    };
        
}
    
