"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const purchase_pb_1 = require("./proto/purchase_pb");
const uuid_1 = require("uuid");
class PurchaseServer {
    constructor() {
        this.purchase = (call, callback) => {
            const reply = new purchase_pb_1.PurchaseReply();
            console.log(call.request.toObject());
            // here is where we would save the data!
            reply.setUuid(uuid_1.v4());
            reply.setReturncode(0);
            callback(null, reply);
        };
    }
}
exports.PurchaseServer = PurchaseServer;
