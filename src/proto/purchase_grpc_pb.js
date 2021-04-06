// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var purchase_pb = require('./purchase_pb.js');

function serialize_freo_me_purchase_PurchaseReply(arg) {
  if (!(arg instanceof purchase_pb.PurchaseReply)) {
    throw new Error('Expected argument of type freo.me.purchase.PurchaseReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_freo_me_purchase_PurchaseReply(buffer_arg) {
  return purchase_pb.PurchaseReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_freo_me_purchase_PurchaseRequest(arg) {
  if (!(arg instanceof purchase_pb.PurchaseRequest)) {
    throw new Error('Expected argument of type freo.me.purchase.PurchaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_freo_me_purchase_PurchaseRequest(buffer_arg) {
  return purchase_pb.PurchaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var PurchaseService = exports.PurchaseService = {
  purchase: {
    path: '/freo.me.purchase.Purchase/purchase',
    requestStream: false,
    responseStream: false,
    requestType: purchase_pb.PurchaseRequest,
    responseType: purchase_pb.PurchaseReply,
    requestSerialize: serialize_freo_me_purchase_PurchaseRequest,
    requestDeserialize: deserialize_freo_me_purchase_PurchaseRequest,
    responseSerialize: serialize_freo_me_purchase_PurchaseReply,
    responseDeserialize: deserialize_freo_me_purchase_PurchaseReply,
  },
};

exports.PurchaseClient = grpc.makeGenericClientConstructor(PurchaseService);
