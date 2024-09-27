"use strict";
exports.__esModule = true;
exports.ChannelType = exports.ChannelMessageType = void 0;
var ChannelMessageType;
(function (ChannelMessageType) {
    ChannelMessageType[ChannelMessageType["TEXT"] = 0] = "TEXT";
    ChannelMessageType[ChannelMessageType["STICKER"] = 1] = "STICKER";
    ChannelMessageType[ChannelMessageType["IMAGE"] = 2] = "IMAGE";
    ChannelMessageType[ChannelMessageType["IMAGES"] = 3] = "IMAGES";
})(ChannelMessageType = exports.ChannelMessageType || (exports.ChannelMessageType = {}));
var ChannelType;
(function (ChannelType) {
    ChannelType[ChannelType["DIRECT"] = 1] = "DIRECT";
    ChannelType[ChannelType["GROUP"] = 2] = "GROUP";
})(ChannelType = exports.ChannelType || (exports.ChannelType = {}));
