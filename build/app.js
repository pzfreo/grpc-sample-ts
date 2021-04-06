"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const purchase_grpc_pb_1 = require("./proto/purchase_grpc_pb");
const PurchaseServer_1 = require("./PurchaseServer");
const grpc = __importStar(require("@grpc/grpc-js"));
const server = new grpc.Server();
const port = process.env.PORT || 50051;
server.addService(purchase_grpc_pb_1.PurchaseService, new PurchaseServer_1.PurchaseServer());
server.bindAsync(`localhost:${port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        throw err;
    }
    console.log(`Listening on ${port}`);
    server.start();
});
