// source: purchase.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.freo.me.purchase.Date', null, global);
goog.exportSymbol('proto.freo.me.purchase.PurchaseReply', null, global);
goog.exportSymbol('proto.freo.me.purchase.PurchaseRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.freo.me.purchase.PurchaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.freo.me.purchase.PurchaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.freo.me.purchase.PurchaseRequest.displayName = 'proto.freo.me.purchase.PurchaseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.freo.me.purchase.Date = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.freo.me.purchase.Date, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.freo.me.purchase.Date.displayName = 'proto.freo.me.purchase.Date';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.freo.me.purchase.PurchaseReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.freo.me.purchase.PurchaseReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.freo.me.purchase.PurchaseReply.displayName = 'proto.freo.me.purchase.PurchaseReply';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.freo.me.purchase.PurchaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.freo.me.purchase.PurchaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.freo.me.purchase.PurchaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.freo.me.purchase.PurchaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ponumber: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lineitem: jspb.Message.getFieldWithDefault(msg, 2, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    date: (f = msg.getDate()) && proto.freo.me.purchase.Date.toObject(includeInstance, f),
    customernumber: jspb.Message.getFieldWithDefault(msg, 5, ""),
    paymentreference: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.freo.me.purchase.PurchaseRequest}
 */
proto.freo.me.purchase.PurchaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.freo.me.purchase.PurchaseRequest;
  return proto.freo.me.purchase.PurchaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.freo.me.purchase.PurchaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.freo.me.purchase.PurchaseRequest}
 */
proto.freo.me.purchase.PurchaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPonumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLineitem(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 4:
      var value = new proto.freo.me.purchase.Date;
      reader.readMessage(value,proto.freo.me.purchase.Date.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomernumber(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPaymentreference(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.freo.me.purchase.PurchaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.freo.me.purchase.PurchaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.freo.me.purchase.PurchaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.freo.me.purchase.PurchaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPonumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLineitem();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.freo.me.purchase.Date.serializeBinaryToWriter
    );
  }
  f = message.getCustomernumber();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPaymentreference();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string poNumber = 1;
 * @return {string}
 */
proto.freo.me.purchase.PurchaseRequest.prototype.getPonumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.freo.me.purchase.PurchaseRequest} returns this
 */
proto.freo.me.purchase.PurchaseRequest.prototype.setPonumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string lineItem = 2;
 * @return {string}
 */
proto.freo.me.purchase.PurchaseRequest.prototype.getLineitem = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.freo.me.purchase.PurchaseRequest} returns this
 */
proto.freo.me.purchase.PurchaseRequest.prototype.setLineitem = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 quantity = 3;
 * @return {number}
 */
proto.freo.me.purchase.PurchaseRequest.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.freo.me.purchase.PurchaseRequest} returns this
 */
proto.freo.me.purchase.PurchaseRequest.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Date date = 4;
 * @return {?proto.freo.me.purchase.Date}
 */
proto.freo.me.purchase.PurchaseRequest.prototype.getDate = function() {
  return /** @type{?proto.freo.me.purchase.Date} */ (
    jspb.Message.getWrapperField(this, proto.freo.me.purchase.Date, 4));
};


/**
 * @param {?proto.freo.me.purchase.Date|undefined} value
 * @return {!proto.freo.me.purchase.PurchaseRequest} returns this
*/
proto.freo.me.purchase.PurchaseRequest.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.freo.me.purchase.PurchaseRequest} returns this
 */
proto.freo.me.purchase.PurchaseRequest.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.freo.me.purchase.PurchaseRequest.prototype.hasDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string customerNumber = 5;
 * @return {string}
 */
proto.freo.me.purchase.PurchaseRequest.prototype.getCustomernumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.freo.me.purchase.PurchaseRequest} returns this
 */
proto.freo.me.purchase.PurchaseRequest.prototype.setCustomernumber = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string paymentReference = 6;
 * @return {string}
 */
proto.freo.me.purchase.PurchaseRequest.prototype.getPaymentreference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.freo.me.purchase.PurchaseRequest} returns this
 */
proto.freo.me.purchase.PurchaseRequest.prototype.setPaymentreference = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.freo.me.purchase.Date.prototype.toObject = function(opt_includeInstance) {
  return proto.freo.me.purchase.Date.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.freo.me.purchase.Date} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.freo.me.purchase.Date.toObject = function(includeInstance, msg) {
  var f, obj = {
    year: jspb.Message.getFieldWithDefault(msg, 1, 0),
    month: jspb.Message.getFieldWithDefault(msg, 2, 0),
    day: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.freo.me.purchase.Date}
 */
proto.freo.me.purchase.Date.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.freo.me.purchase.Date;
  return proto.freo.me.purchase.Date.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.freo.me.purchase.Date} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.freo.me.purchase.Date}
 */
proto.freo.me.purchase.Date.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.freo.me.purchase.Date.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.freo.me.purchase.Date.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.freo.me.purchase.Date} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.freo.me.purchase.Date.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMonth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDay();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 year = 1;
 * @return {number}
 */
proto.freo.me.purchase.Date.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.freo.me.purchase.Date} returns this
 */
proto.freo.me.purchase.Date.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 month = 2;
 * @return {number}
 */
proto.freo.me.purchase.Date.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.freo.me.purchase.Date} returns this
 */
proto.freo.me.purchase.Date.prototype.setMonth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 day = 3;
 * @return {number}
 */
proto.freo.me.purchase.Date.prototype.getDay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.freo.me.purchase.Date} returns this
 */
proto.freo.me.purchase.Date.prototype.setDay = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.freo.me.purchase.PurchaseReply.prototype.toObject = function(opt_includeInstance) {
  return proto.freo.me.purchase.PurchaseReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.freo.me.purchase.PurchaseReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.freo.me.purchase.PurchaseReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    returncode: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.freo.me.purchase.PurchaseReply}
 */
proto.freo.me.purchase.PurchaseReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.freo.me.purchase.PurchaseReply;
  return proto.freo.me.purchase.PurchaseReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.freo.me.purchase.PurchaseReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.freo.me.purchase.PurchaseReply}
 */
proto.freo.me.purchase.PurchaseReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReturncode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.freo.me.purchase.PurchaseReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.freo.me.purchase.PurchaseReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.freo.me.purchase.PurchaseReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.freo.me.purchase.PurchaseReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReturncode();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.freo.me.purchase.PurchaseReply.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.freo.me.purchase.PurchaseReply} returns this
 */
proto.freo.me.purchase.PurchaseReply.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 returncode = 2;
 * @return {number}
 */
proto.freo.me.purchase.PurchaseReply.prototype.getReturncode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.freo.me.purchase.PurchaseReply} returns this
 */
proto.freo.me.purchase.PurchaseReply.prototype.setReturncode = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.freo.me.purchase);