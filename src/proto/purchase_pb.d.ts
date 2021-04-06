// package: freo.me.purchase
// file: purchase.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PurchaseRequest extends jspb.Message { 
    getPonumber(): string;
    setPonumber(value: string): PurchaseRequest;
    getLineitem(): string;
    setLineitem(value: string): PurchaseRequest;
    getQuantity(): number;
    setQuantity(value: number): PurchaseRequest;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): Date | undefined;
    setDate(value?: Date): PurchaseRequest;
    getCustomernumber(): string;
    setCustomernumber(value: string): PurchaseRequest;
    getPaymentreference(): string;
    setPaymentreference(value: string): PurchaseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PurchaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PurchaseRequest): PurchaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PurchaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PurchaseRequest;
    static deserializeBinaryFromReader(message: PurchaseRequest, reader: jspb.BinaryReader): PurchaseRequest;
}

export namespace PurchaseRequest {
    export type AsObject = {
        ponumber: string,
        lineitem: string,
        quantity: number,
        date?: Date.AsObject,
        customernumber: string,
        paymentreference: string,
    }
}

export class Date extends jspb.Message { 
    getYear(): number;
    setYear(value: number): Date;
    getMonth(): number;
    setMonth(value: number): Date;
    getDay(): number;
    setDay(value: number): Date;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Date.AsObject;
    static toObject(includeInstance: boolean, msg: Date): Date.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Date, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Date;
    static deserializeBinaryFromReader(message: Date, reader: jspb.BinaryReader): Date;
}

export namespace Date {
    export type AsObject = {
        year: number,
        month: number,
        day: number,
    }
}

export class PurchaseReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): PurchaseReply;
    getReturncode(): number;
    setReturncode(value: number): PurchaseReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PurchaseReply.AsObject;
    static toObject(includeInstance: boolean, msg: PurchaseReply): PurchaseReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PurchaseReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PurchaseReply;
    static deserializeBinaryFromReader(message: PurchaseReply, reader: jspb.BinaryReader): PurchaseReply;
}

export namespace PurchaseReply {
    export type AsObject = {
        message: string,
        returncode: number,
    }
}
