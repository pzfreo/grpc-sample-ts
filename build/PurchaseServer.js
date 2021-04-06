"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const purchase_pb_1 = require("./proto/purchase_pb");
class PurchaseServer {
    constructor() {
        this.purchase = (call, callback) => {
            const reply = new purchase_pb_1.PurchaseReply();
            console.log(call.request.getCustomernumber);
            reply.setMessage("success");
            reply.setReturncode(0);
            callback(null, reply);
        };
    }
}
exports.PurchaseServer = PurchaseServer;
