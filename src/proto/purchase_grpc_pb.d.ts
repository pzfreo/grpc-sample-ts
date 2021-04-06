// package: freo.me.purchase
// file: purchase.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as purchase_pb from "./purchase_pb";

interface IPurchaseService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    purchase: IPurchaseService_Ipurchase;
}

interface IPurchaseService_Ipurchase extends grpc.MethodDefinition<purchase_pb.PurchaseRequest, purchase_pb.PurchaseReply> {
    path: "/freo.me.purchase.Purchase/purchase";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<purchase_pb.PurchaseRequest>;
    requestDeserialize: grpc.deserialize<purchase_pb.PurchaseRequest>;
    responseSerialize: grpc.serialize<purchase_pb.PurchaseReply>;
    responseDeserialize: grpc.deserialize<purchase_pb.PurchaseReply>;
}

export const PurchaseService: IPurchaseService;

export interface IPurchaseServer extends grpc.UntypedServiceImplementation {
    purchase: grpc.handleUnaryCall<purchase_pb.PurchaseRequest, purchase_pb.PurchaseReply>;
}

export interface IPurchaseClient {
    purchase(request: purchase_pb.PurchaseRequest, callback: (error: grpc.ServiceError | null, response: purchase_pb.PurchaseReply) => void): grpc.ClientUnaryCall;
    purchase(request: purchase_pb.PurchaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: purchase_pb.PurchaseReply) => void): grpc.ClientUnaryCall;
    purchase(request: purchase_pb.PurchaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: purchase_pb.PurchaseReply) => void): grpc.ClientUnaryCall;
}

export class PurchaseClient extends grpc.Client implements IPurchaseClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public purchase(request: purchase_pb.PurchaseRequest, callback: (error: grpc.ServiceError | null, response: purchase_pb.PurchaseReply) => void): grpc.ClientUnaryCall;
    public purchase(request: purchase_pb.PurchaseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: purchase_pb.PurchaseReply) => void): grpc.ClientUnaryCall;
    public purchase(request: purchase_pb.PurchaseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: purchase_pb.PurchaseReply) => void): grpc.ClientUnaryCall;
}
