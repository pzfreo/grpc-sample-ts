import { PurchaseReply, PurchaseRequest } from "./proto/purchase_pb";
import { IPurchaseServer, PurchaseService, IPurchaseService } from "./proto/purchase_grpc_pb";
import {PurchaseServer} from "./PurchaseServer";
import * as grpc from "@grpc/grpc-js";

const server = new grpc.Server();
const port = process.env.PORT || 50051;

server.addService( PurchaseService, new PurchaseServer());
server.bindAsync(`localhost:${port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        throw err;
    }
    console.log(`Listening on ${port}`);
    server.start();
});