/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.User = (function() {

    /**
     * Properties of a User.
     * @exports IUser
     * @interface IUser
     * @property {string|null} [id] Primary key
     * @property {string|null} [email] User email
     * @property {string|null} [name] User name
     */

    /**
     * Constructs a new User.
     * @exports User
     * @classdesc Represents a User.
     * @implements IUser
     * @constructor
     * @param {IUser=} [properties] Properties to set
     */
    function User(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Primary key
     * @member {string} id
     * @memberof User
     * @instance
     */
    User.prototype.id = "";

    /**
     * User email.
     * @member {string} email
     * @memberof User
     * @instance
     */
    User.prototype.email = "";

    /**
     * User name.
     * @member {string} name
     * @memberof User
     * @instance
     */
    User.prototype.name = "";

    /**
     * Creates a new User instance using the specified properties.
     * @function create
     * @memberof User
     * @static
     * @param {IUser=} [properties] Properties to set
     * @returns {User} User instance
     */
    User.create = function create(properties) {
        return new User(properties);
    };

    /**
     * Encodes the specified User message. Does not implicitly {@link User.verify|verify} messages.
     * @function encode
     * @memberof User
     * @static
     * @param {IUser} message User message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.email != null && message.hasOwnProperty("email"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified User message, length delimited. Does not implicitly {@link User.verify|verify} messages.
     * @function encodeDelimited
     * @memberof User
     * @static
     * @param {IUser} message User message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a User message from the specified reader or buffer.
     * @function decode
     * @memberof User
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {User} User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.User();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.email = reader.string();
                break;
            case 3:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a User message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof User
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {User} User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a User message.
     * @function verify
     * @memberof User
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    User.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.email != null && message.hasOwnProperty("email"))
            if (!$util.isString(message.email))
                return "email: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a User message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof User
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {User} User
     */
    User.fromObject = function fromObject(object) {
        if (object instanceof $root.User)
            return object;
        var message = new $root.User();
        if (object.id != null)
            message.id = String(object.id);
        if (object.email != null)
            message.email = String(object.email);
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a User message. Also converts values to other types if specified.
     * @function toObject
     * @memberof User
     * @static
     * @param {User} message User
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    User.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.email = "";
            object.name = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.email != null && message.hasOwnProperty("email"))
            object.email = message.email;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this User to JSON.
     * @function toJSON
     * @memberof User
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    User.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return User;
})();

$root.Network = (function() {

    /**
     * Properties of a Network.
     * @exports INetwork
     * @interface INetwork
     * @property {string|null} [id] Three letter code representing the network
     * @property {string|null} [name] Network name
     * @property {Network.StateCode|null} [mainState] Network mainState
     * @property {Network.Sector|null} [sector] Network sector
     */

    /**
     * Constructs a new Network.
     * @exports Network
     * @classdesc Represents a Network.
     * @implements INetwork
     * @constructor
     * @param {INetwork=} [properties] Properties to set
     */
    function Network(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Three letter code representing the network
     * @member {string} id
     * @memberof Network
     * @instance
     */
    Network.prototype.id = "";

    /**
     * Network name.
     * @member {string} name
     * @memberof Network
     * @instance
     */
    Network.prototype.name = "";

    /**
     * Network mainState.
     * @member {Network.StateCode} mainState
     * @memberof Network
     * @instance
     */
    Network.prototype.mainState = 0;

    /**
     * Network sector.
     * @member {Network.Sector} sector
     * @memberof Network
     * @instance
     */
    Network.prototype.sector = 0;

    /**
     * Creates a new Network instance using the specified properties.
     * @function create
     * @memberof Network
     * @static
     * @param {INetwork=} [properties] Properties to set
     * @returns {Network} Network instance
     */
    Network.create = function create(properties) {
        return new Network(properties);
    };

    /**
     * Encodes the specified Network message. Does not implicitly {@link Network.verify|verify} messages.
     * @function encode
     * @memberof Network
     * @static
     * @param {INetwork} message Network message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Network.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.mainState != null && message.hasOwnProperty("mainState"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.mainState);
        if (message.sector != null && message.hasOwnProperty("sector"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sector);
        return writer;
    };

    /**
     * Encodes the specified Network message, length delimited. Does not implicitly {@link Network.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Network
     * @static
     * @param {INetwork} message Network message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Network.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Network message from the specified reader or buffer.
     * @function decode
     * @memberof Network
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Network} Network
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Network.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Network();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.mainState = reader.int32();
                break;
            case 4:
                message.sector = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Network message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Network
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Network} Network
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Network.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Network message.
     * @function verify
     * @memberof Network
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Network.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.mainState != null && message.hasOwnProperty("mainState"))
            switch (message.mainState) {
            default:
                return "mainState: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                break;
            }
        if (message.sector != null && message.hasOwnProperty("sector"))
            switch (message.sector) {
            default:
                return "sector: enum value expected";
            case 0:
            case 1:
                break;
            }
        return null;
    };

    /**
     * Creates a Network message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Network
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Network} Network
     */
    Network.fromObject = function fromObject(object) {
        if (object instanceof $root.Network)
            return object;
        var message = new $root.Network();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        switch (object.mainState) {
        case "QLD":
        case 0:
            message.mainState = 0;
            break;
        case "NSW":
        case 1:
            message.mainState = 1;
            break;
        case "VIC":
        case 2:
            message.mainState = 2;
            break;
        case "ACT":
        case 3:
            message.mainState = 3;
            break;
        case "TAS":
        case 4:
            message.mainState = 4;
            break;
        case "SA":
        case 5:
            message.mainState = 5;
            break;
        case "WA":
        case 6:
            message.mainState = 6;
            break;
        case "NT":
        case 7:
            message.mainState = 7;
            break;
        }
        switch (object.sector) {
        case "DISTRIBUTION":
        case 0:
            message.sector = 0;
            break;
        case "TRANSMISSION":
        case 1:
            message.sector = 1;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a Network message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Network
     * @static
     * @param {Network} message Network
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Network.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.name = "";
            object.mainState = options.enums === String ? "QLD" : 0;
            object.sector = options.enums === String ? "DISTRIBUTION" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.mainState != null && message.hasOwnProperty("mainState"))
            object.mainState = options.enums === String ? $root.Network.StateCode[message.mainState] : message.mainState;
        if (message.sector != null && message.hasOwnProperty("sector"))
            object.sector = options.enums === String ? $root.Network.Sector[message.sector] : message.sector;
        return object;
    };

    /**
     * Converts this Network to JSON.
     * @function toJSON
     * @memberof Network
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Network.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * StateCode enum.
     * @name Network.StateCode
     * @enum {string}
     * @property {number} QLD=0 QLD value
     * @property {number} NSW=1 NSW value
     * @property {number} VIC=2 VIC value
     * @property {number} ACT=3 ACT value
     * @property {number} TAS=4 TAS value
     * @property {number} SA=5 SA value
     * @property {number} WA=6 WA value
     * @property {number} NT=7 NT value
     */
    Network.StateCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "QLD"] = 0;
        values[valuesById[1] = "NSW"] = 1;
        values[valuesById[2] = "VIC"] = 2;
        values[valuesById[3] = "ACT"] = 3;
        values[valuesById[4] = "TAS"] = 4;
        values[valuesById[5] = "SA"] = 5;
        values[valuesById[6] = "WA"] = 6;
        values[valuesById[7] = "NT"] = 7;
        return values;
    })();

    /**
     * Sector enum.
     * @name Network.Sector
     * @enum {string}
     * @property {number} DISTRIBUTION=0 DISTRIBUTION value
     * @property {number} TRANSMISSION=1 TRANSMISSION value
     */
    Network.Sector = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DISTRIBUTION"] = 0;
        values[valuesById[1] = "TRANSMISSION"] = 1;
        return values;
    })();

    return Network;
})();

$root.Determination = (function() {

    /**
     * Properties of a Determination.
     * @exports IDetermination
     * @interface IDetermination
     * @property {string|null} [id] Determination id
     * @property {Determination.PeriodType|null} [periodType] Determination periodType
     * @property {string|null} [detailsUrl] Determination detailsUrl
     * @property {INetwork|null} [network] Determination network
     * @property {google.protobuf.ITimestamp|null} [firstYearStart] Determination firstYearStart
     * @property {google.protobuf.ITimestamp|null} [firstYearEnd] Determination firstYearEnd
     * @property {google.protobuf.ITimestamp|null} [lastYearEnd] Determination lastYearEnd
     * @property {Array.<IMilestone>|null} [milestones] Determination milestones
     */

    /**
     * Constructs a new Determination.
     * @exports Determination
     * @classdesc Represents a Determination.
     * @implements IDetermination
     * @constructor
     * @param {IDetermination=} [properties] Properties to set
     */
    function Determination(properties) {
        this.milestones = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Determination id.
     * @member {string} id
     * @memberof Determination
     * @instance
     */
    Determination.prototype.id = "";

    /**
     * Determination periodType.
     * @member {Determination.PeriodType} periodType
     * @memberof Determination
     * @instance
     */
    Determination.prototype.periodType = 0;

    /**
     * Determination detailsUrl.
     * @member {string} detailsUrl
     * @memberof Determination
     * @instance
     */
    Determination.prototype.detailsUrl = "";

    /**
     * Determination network.
     * @member {INetwork|null|undefined} network
     * @memberof Determination
     * @instance
     */
    Determination.prototype.network = null;

    /**
     * Determination firstYearStart.
     * @member {google.protobuf.ITimestamp|null|undefined} firstYearStart
     * @memberof Determination
     * @instance
     */
    Determination.prototype.firstYearStart = null;

    /**
     * Determination firstYearEnd.
     * @member {google.protobuf.ITimestamp|null|undefined} firstYearEnd
     * @memberof Determination
     * @instance
     */
    Determination.prototype.firstYearEnd = null;

    /**
     * Determination lastYearEnd.
     * @member {google.protobuf.ITimestamp|null|undefined} lastYearEnd
     * @memberof Determination
     * @instance
     */
    Determination.prototype.lastYearEnd = null;

    /**
     * Determination milestones.
     * @member {Array.<IMilestone>} milestones
     * @memberof Determination
     * @instance
     */
    Determination.prototype.milestones = $util.emptyArray;

    /**
     * Creates a new Determination instance using the specified properties.
     * @function create
     * @memberof Determination
     * @static
     * @param {IDetermination=} [properties] Properties to set
     * @returns {Determination} Determination instance
     */
    Determination.create = function create(properties) {
        return new Determination(properties);
    };

    /**
     * Encodes the specified Determination message. Does not implicitly {@link Determination.verify|verify} messages.
     * @function encode
     * @memberof Determination
     * @static
     * @param {IDetermination} message Determination message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Determination.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.periodType != null && message.hasOwnProperty("periodType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.periodType);
        if (message.detailsUrl != null && message.hasOwnProperty("detailsUrl"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.detailsUrl);
        if (message.network != null && message.hasOwnProperty("network"))
            $root.Network.encode(message.network, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.firstYearStart != null && message.hasOwnProperty("firstYearStart"))
            $root.google.protobuf.Timestamp.encode(message.firstYearStart, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.firstYearEnd != null && message.hasOwnProperty("firstYearEnd"))
            $root.google.protobuf.Timestamp.encode(message.firstYearEnd, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.lastYearEnd != null && message.hasOwnProperty("lastYearEnd"))
            $root.google.protobuf.Timestamp.encode(message.lastYearEnd, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.milestones != null && message.milestones.length)
            for (var i = 0; i < message.milestones.length; ++i)
                $root.Milestone.encode(message.milestones[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Determination message, length delimited. Does not implicitly {@link Determination.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Determination
     * @static
     * @param {IDetermination} message Determination message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Determination.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Determination message from the specified reader or buffer.
     * @function decode
     * @memberof Determination
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Determination} Determination
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Determination.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Determination();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.periodType = reader.int32();
                break;
            case 3:
                message.detailsUrl = reader.string();
                break;
            case 4:
                message.network = $root.Network.decode(reader, reader.uint32());
                break;
            case 5:
                message.firstYearStart = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            case 6:
                message.firstYearEnd = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            case 7:
                message.lastYearEnd = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            case 8:
                if (!(message.milestones && message.milestones.length))
                    message.milestones = [];
                message.milestones.push($root.Milestone.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Determination message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Determination
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Determination} Determination
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Determination.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Determination message.
     * @function verify
     * @memberof Determination
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Determination.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.periodType != null && message.hasOwnProperty("periodType"))
            switch (message.periodType) {
            default:
                return "periodType: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.detailsUrl != null && message.hasOwnProperty("detailsUrl"))
            if (!$util.isString(message.detailsUrl))
                return "detailsUrl: string expected";
        if (message.network != null && message.hasOwnProperty("network")) {
            var error = $root.Network.verify(message.network);
            if (error)
                return "network." + error;
        }
        if (message.firstYearStart != null && message.hasOwnProperty("firstYearStart")) {
            var error = $root.google.protobuf.Timestamp.verify(message.firstYearStart);
            if (error)
                return "firstYearStart." + error;
        }
        if (message.firstYearEnd != null && message.hasOwnProperty("firstYearEnd")) {
            var error = $root.google.protobuf.Timestamp.verify(message.firstYearEnd);
            if (error)
                return "firstYearEnd." + error;
        }
        if (message.lastYearEnd != null && message.hasOwnProperty("lastYearEnd")) {
            var error = $root.google.protobuf.Timestamp.verify(message.lastYearEnd);
            if (error)
                return "lastYearEnd." + error;
        }
        if (message.milestones != null && message.hasOwnProperty("milestones")) {
            if (!Array.isArray(message.milestones))
                return "milestones: array expected";
            for (var i = 0; i < message.milestones.length; ++i) {
                var error = $root.Milestone.verify(message.milestones[i]);
                if (error)
                    return "milestones." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Determination message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Determination
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Determination} Determination
     */
    Determination.fromObject = function fromObject(object) {
        if (object instanceof $root.Determination)
            return object;
        var message = new $root.Determination();
        if (object.id != null)
            message.id = String(object.id);
        switch (object.periodType) {
        case "CALENDAR_YEAR":
        case 0:
            message.periodType = 0;
            break;
        case "FINANCIAL_YEAR":
        case 1:
            message.periodType = 1;
            break;
        }
        if (object.detailsUrl != null)
            message.detailsUrl = String(object.detailsUrl);
        if (object.network != null) {
            if (typeof object.network !== "object")
                throw TypeError(".Determination.network: object expected");
            message.network = $root.Network.fromObject(object.network);
        }
        if (object.firstYearStart != null) {
            if (typeof object.firstYearStart !== "object")
                throw TypeError(".Determination.firstYearStart: object expected");
            message.firstYearStart = $root.google.protobuf.Timestamp.fromObject(object.firstYearStart);
        }
        if (object.firstYearEnd != null) {
            if (typeof object.firstYearEnd !== "object")
                throw TypeError(".Determination.firstYearEnd: object expected");
            message.firstYearEnd = $root.google.protobuf.Timestamp.fromObject(object.firstYearEnd);
        }
        if (object.lastYearEnd != null) {
            if (typeof object.lastYearEnd !== "object")
                throw TypeError(".Determination.lastYearEnd: object expected");
            message.lastYearEnd = $root.google.protobuf.Timestamp.fromObject(object.lastYearEnd);
        }
        if (object.milestones) {
            if (!Array.isArray(object.milestones))
                throw TypeError(".Determination.milestones: array expected");
            message.milestones = [];
            for (var i = 0; i < object.milestones.length; ++i) {
                if (typeof object.milestones[i] !== "object")
                    throw TypeError(".Determination.milestones: object expected");
                message.milestones[i] = $root.Milestone.fromObject(object.milestones[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Determination message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Determination
     * @static
     * @param {Determination} message Determination
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Determination.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.milestones = [];
        if (options.defaults) {
            object.id = "";
            object.periodType = options.enums === String ? "CALENDAR_YEAR" : 0;
            object.detailsUrl = "";
            object.network = null;
            object.firstYearStart = null;
            object.firstYearEnd = null;
            object.lastYearEnd = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.periodType != null && message.hasOwnProperty("periodType"))
            object.periodType = options.enums === String ? $root.Determination.PeriodType[message.periodType] : message.periodType;
        if (message.detailsUrl != null && message.hasOwnProperty("detailsUrl"))
            object.detailsUrl = message.detailsUrl;
        if (message.network != null && message.hasOwnProperty("network"))
            object.network = $root.Network.toObject(message.network, options);
        if (message.firstYearStart != null && message.hasOwnProperty("firstYearStart"))
            object.firstYearStart = $root.google.protobuf.Timestamp.toObject(message.firstYearStart, options);
        if (message.firstYearEnd != null && message.hasOwnProperty("firstYearEnd"))
            object.firstYearEnd = $root.google.protobuf.Timestamp.toObject(message.firstYearEnd, options);
        if (message.lastYearEnd != null && message.hasOwnProperty("lastYearEnd"))
            object.lastYearEnd = $root.google.protobuf.Timestamp.toObject(message.lastYearEnd, options);
        if (message.milestones && message.milestones.length) {
            object.milestones = [];
            for (var j = 0; j < message.milestones.length; ++j)
                object.milestones[j] = $root.Milestone.toObject(message.milestones[j], options);
        }
        return object;
    };

    /**
     * Converts this Determination to JSON.
     * @function toJSON
     * @memberof Determination
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Determination.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * PeriodType enum.
     * @name Determination.PeriodType
     * @enum {string}
     * @property {number} CALENDAR_YEAR=0 CALENDAR_YEAR value
     * @property {number} FINANCIAL_YEAR=1 FINANCIAL_YEAR value
     */
    Determination.PeriodType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CALENDAR_YEAR"] = 0;
        values[valuesById[1] = "FINANCIAL_YEAR"] = 1;
        return values;
    })();

    return Determination;
})();

$root.Milestone = (function() {

    /**
     * Properties of a Milestone.
     * @exports IMilestone
     * @interface IMilestone
     * @property {string|null} [id] Milestone id
     * @property {Milestone.Level|null} [level] Milestone level
     * @property {string|null} [detailsUrl] Milestone detailsUrl
     * @property {string|null} [ptrmFileUrl] Milestone ptrmFileUrl
     * @property {Array.<IDataPoint>|null} [dataPoints] Milestone dataPoints
     */

    /**
     * Constructs a new Milestone.
     * @exports Milestone
     * @classdesc Represents a Milestone.
     * @implements IMilestone
     * @constructor
     * @param {IMilestone=} [properties] Properties to set
     */
    function Milestone(properties) {
        this.dataPoints = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Milestone id.
     * @member {string} id
     * @memberof Milestone
     * @instance
     */
    Milestone.prototype.id = "";

    /**
     * Milestone level.
     * @member {Milestone.Level} level
     * @memberof Milestone
     * @instance
     */
    Milestone.prototype.level = 0;

    /**
     * Milestone detailsUrl.
     * @member {string} detailsUrl
     * @memberof Milestone
     * @instance
     */
    Milestone.prototype.detailsUrl = "";

    /**
     * Milestone ptrmFileUrl.
     * @member {string} ptrmFileUrl
     * @memberof Milestone
     * @instance
     */
    Milestone.prototype.ptrmFileUrl = "";

    /**
     * Milestone dataPoints.
     * @member {Array.<IDataPoint>} dataPoints
     * @memberof Milestone
     * @instance
     */
    Milestone.prototype.dataPoints = $util.emptyArray;

    /**
     * Creates a new Milestone instance using the specified properties.
     * @function create
     * @memberof Milestone
     * @static
     * @param {IMilestone=} [properties] Properties to set
     * @returns {Milestone} Milestone instance
     */
    Milestone.create = function create(properties) {
        return new Milestone(properties);
    };

    /**
     * Encodes the specified Milestone message. Does not implicitly {@link Milestone.verify|verify} messages.
     * @function encode
     * @memberof Milestone
     * @static
     * @param {IMilestone} message Milestone message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Milestone.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.level != null && message.hasOwnProperty("level"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.level);
        if (message.detailsUrl != null && message.hasOwnProperty("detailsUrl"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.detailsUrl);
        if (message.ptrmFileUrl != null && message.hasOwnProperty("ptrmFileUrl"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.ptrmFileUrl);
        if (message.dataPoints != null && message.dataPoints.length)
            for (var i = 0; i < message.dataPoints.length; ++i)
                $root.DataPoint.encode(message.dataPoints[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Milestone message, length delimited. Does not implicitly {@link Milestone.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Milestone
     * @static
     * @param {IMilestone} message Milestone message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Milestone.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Milestone message from the specified reader or buffer.
     * @function decode
     * @memberof Milestone
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Milestone} Milestone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Milestone.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Milestone();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.level = reader.int32();
                break;
            case 3:
                message.detailsUrl = reader.string();
                break;
            case 4:
                message.ptrmFileUrl = reader.string();
                break;
            case 5:
                if (!(message.dataPoints && message.dataPoints.length))
                    message.dataPoints = [];
                message.dataPoints.push($root.DataPoint.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Milestone message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Milestone
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Milestone} Milestone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Milestone.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Milestone message.
     * @function verify
     * @memberof Milestone
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Milestone.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.level != null && message.hasOwnProperty("level"))
            switch (message.level) {
            default:
                return "level: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                break;
            }
        if (message.detailsUrl != null && message.hasOwnProperty("detailsUrl"))
            if (!$util.isString(message.detailsUrl))
                return "detailsUrl: string expected";
        if (message.ptrmFileUrl != null && message.hasOwnProperty("ptrmFileUrl"))
            if (!$util.isString(message.ptrmFileUrl))
                return "ptrmFileUrl: string expected";
        if (message.dataPoints != null && message.hasOwnProperty("dataPoints")) {
            if (!Array.isArray(message.dataPoints))
                return "dataPoints: array expected";
            for (var i = 0; i < message.dataPoints.length; ++i) {
                var error = $root.DataPoint.verify(message.dataPoints[i]);
                if (error)
                    return "dataPoints." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Milestone message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Milestone
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Milestone} Milestone
     */
    Milestone.fromObject = function fromObject(object) {
        if (object instanceof $root.Milestone)
            return object;
        var message = new $root.Milestone();
        if (object.id != null)
            message.id = String(object.id);
        switch (object.level) {
        case "INITIATION":
        case 0:
            message.level = 0;
            break;
        case "AER_POSITION":
        case 1:
            message.level = 1;
            break;
        case "CHALLENGE_PANEL":
        case 2:
            message.level = 2;
            break;
        case "PROPOSAL":
        case 3:
            message.level = 3;
            break;
        case "DRAFT_DECISION":
        case 4:
            message.level = 4;
            break;
        case "PRELIMINARY_DECISION":
        case 5:
            message.level = 5;
            break;
        case "REVISED_PROPOSAL":
        case 6:
            message.level = 6;
            break;
        case "FINAL_DECISION":
        case 7:
            message.level = 7;
            break;
        case "APPEAL":
        case 8:
            message.level = 8;
            break;
        case "UPDATES":
        case 9:
            message.level = 9;
            break;
        case "ACTUALS":
        case 10:
            message.level = 10;
            break;
        case "USER_SCENARIOS":
        case 11:
            message.level = 11;
            break;
        }
        if (object.detailsUrl != null)
            message.detailsUrl = String(object.detailsUrl);
        if (object.ptrmFileUrl != null)
            message.ptrmFileUrl = String(object.ptrmFileUrl);
        if (object.dataPoints) {
            if (!Array.isArray(object.dataPoints))
                throw TypeError(".Milestone.dataPoints: array expected");
            message.dataPoints = [];
            for (var i = 0; i < object.dataPoints.length; ++i) {
                if (typeof object.dataPoints[i] !== "object")
                    throw TypeError(".Milestone.dataPoints: object expected");
                message.dataPoints[i] = $root.DataPoint.fromObject(object.dataPoints[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Milestone message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Milestone
     * @static
     * @param {Milestone} message Milestone
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Milestone.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.dataPoints = [];
        if (options.defaults) {
            object.id = "";
            object.level = options.enums === String ? "INITIATION" : 0;
            object.detailsUrl = "";
            object.ptrmFileUrl = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = options.enums === String ? $root.Milestone.Level[message.level] : message.level;
        if (message.detailsUrl != null && message.hasOwnProperty("detailsUrl"))
            object.detailsUrl = message.detailsUrl;
        if (message.ptrmFileUrl != null && message.hasOwnProperty("ptrmFileUrl"))
            object.ptrmFileUrl = message.ptrmFileUrl;
        if (message.dataPoints && message.dataPoints.length) {
            object.dataPoints = [];
            for (var j = 0; j < message.dataPoints.length; ++j)
                object.dataPoints[j] = $root.DataPoint.toObject(message.dataPoints[j], options);
        }
        return object;
    };

    /**
     * Converts this Milestone to JSON.
     * @function toJSON
     * @memberof Milestone
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Milestone.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Level enum.
     * @name Milestone.Level
     * @enum {string}
     * @property {number} INITIATION=0 INITIATION value
     * @property {number} AER_POSITION=1 AER_POSITION value
     * @property {number} CHALLENGE_PANEL=2 CHALLENGE_PANEL value
     * @property {number} PROPOSAL=3 PROPOSAL value
     * @property {number} DRAFT_DECISION=4 DRAFT_DECISION value
     * @property {number} PRELIMINARY_DECISION=5 PRELIMINARY_DECISION value
     * @property {number} REVISED_PROPOSAL=6 REVISED_PROPOSAL value
     * @property {number} FINAL_DECISION=7 FINAL_DECISION value
     * @property {number} APPEAL=8 APPEAL value
     * @property {number} UPDATES=9 UPDATES value
     * @property {number} ACTUALS=10 ACTUALS value
     * @property {number} USER_SCENARIOS=11 USER_SCENARIOS value
     */
    Milestone.Level = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INITIATION"] = 0;
        values[valuesById[1] = "AER_POSITION"] = 1;
        values[valuesById[2] = "CHALLENGE_PANEL"] = 2;
        values[valuesById[3] = "PROPOSAL"] = 3;
        values[valuesById[4] = "DRAFT_DECISION"] = 4;
        values[valuesById[5] = "PRELIMINARY_DECISION"] = 5;
        values[valuesById[6] = "REVISED_PROPOSAL"] = 6;
        values[valuesById[7] = "FINAL_DECISION"] = 7;
        values[valuesById[8] = "APPEAL"] = 8;
        values[valuesById[9] = "UPDATES"] = 9;
        values[valuesById[10] = "ACTUALS"] = 10;
        values[valuesById[11] = "USER_SCENARIOS"] = 11;
        return values;
    })();

    return Milestone;
})();

$root.DataPoint = (function() {

    /**
     * Properties of a DataPoint.
     * @exports IDataPoint
     * @interface IDataPoint
     * @property {string|null} [id] DataPoint id
     * @property {DataPoint.Variable|null} [variable] DataPoint variable
     * @property {google.protobuf.ITimestamp|null} [date] DataPoint date
     * @property {google.protobuf.ITimestamp|null} [nominalDate] DataPoint nominalDate
     * @property {number|null} [value] DataPoint value
     * @property {DataPoint.UNITS|null} [units] DataPoint units
     */

    /**
     * Constructs a new DataPoint.
     * @exports DataPoint
     * @classdesc Represents a DataPoint.
     * @implements IDataPoint
     * @constructor
     * @param {IDataPoint=} [properties] Properties to set
     */
    function DataPoint(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DataPoint id.
     * @member {string} id
     * @memberof DataPoint
     * @instance
     */
    DataPoint.prototype.id = "";

    /**
     * DataPoint variable.
     * @member {DataPoint.Variable} variable
     * @memberof DataPoint
     * @instance
     */
    DataPoint.prototype.variable = 0;

    /**
     * DataPoint date.
     * @member {google.protobuf.ITimestamp|null|undefined} date
     * @memberof DataPoint
     * @instance
     */
    DataPoint.prototype.date = null;

    /**
     * DataPoint nominalDate.
     * @member {google.protobuf.ITimestamp|null|undefined} nominalDate
     * @memberof DataPoint
     * @instance
     */
    DataPoint.prototype.nominalDate = null;

    /**
     * DataPoint value.
     * @member {number} value
     * @memberof DataPoint
     * @instance
     */
    DataPoint.prototype.value = 0;

    /**
     * DataPoint units.
     * @member {DataPoint.UNITS} units
     * @memberof DataPoint
     * @instance
     */
    DataPoint.prototype.units = 0;

    /**
     * Creates a new DataPoint instance using the specified properties.
     * @function create
     * @memberof DataPoint
     * @static
     * @param {IDataPoint=} [properties] Properties to set
     * @returns {DataPoint} DataPoint instance
     */
    DataPoint.create = function create(properties) {
        return new DataPoint(properties);
    };

    /**
     * Encodes the specified DataPoint message. Does not implicitly {@link DataPoint.verify|verify} messages.
     * @function encode
     * @memberof DataPoint
     * @static
     * @param {IDataPoint} message DataPoint message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DataPoint.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.variable != null && message.hasOwnProperty("variable"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.variable);
        if (message.date != null && message.hasOwnProperty("date"))
            $root.google.protobuf.Timestamp.encode(message.date, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.nominalDate != null && message.hasOwnProperty("nominalDate"))
            $root.google.protobuf.Timestamp.encode(message.nominalDate, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 5, wireType 1 =*/41).double(message.value);
        if (message.units != null && message.hasOwnProperty("units"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.units);
        return writer;
    };

    /**
     * Encodes the specified DataPoint message, length delimited. Does not implicitly {@link DataPoint.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DataPoint
     * @static
     * @param {IDataPoint} message DataPoint message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DataPoint.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DataPoint message from the specified reader or buffer.
     * @function decode
     * @memberof DataPoint
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DataPoint} DataPoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DataPoint.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataPoint();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.variable = reader.int32();
                break;
            case 3:
                message.date = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            case 4:
                message.nominalDate = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            case 5:
                message.value = reader.double();
                break;
            case 6:
                message.units = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DataPoint message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DataPoint
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DataPoint} DataPoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DataPoint.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DataPoint message.
     * @function verify
     * @memberof DataPoint
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DataPoint.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.variable != null && message.hasOwnProperty("variable"))
            switch (message.variable) {
            default:
                return "variable: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                break;
            }
        if (message.date != null && message.hasOwnProperty("date")) {
            var error = $root.google.protobuf.Timestamp.verify(message.date);
            if (error)
                return "date." + error;
        }
        if (message.nominalDate != null && message.hasOwnProperty("nominalDate")) {
            var error = $root.google.protobuf.Timestamp.verify(message.nominalDate);
            if (error)
                return "nominalDate." + error;
        }
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value !== "number")
                return "value: number expected";
        if (message.units != null && message.hasOwnProperty("units"))
            switch (message.units) {
            default:
                return "units: enum value expected";
            case 0:
                break;
            }
        return null;
    };

    /**
     * Creates a DataPoint message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DataPoint
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DataPoint} DataPoint
     */
    DataPoint.fromObject = function fromObject(object) {
        if (object instanceof $root.DataPoint)
            return object;
        var message = new $root.DataPoint();
        if (object.id != null)
            message.id = String(object.id);
        switch (object.variable) {
        case "ANNUAL_REVENUE_REQUIREMENT_SMOOTHED":
        case 0:
            message.variable = 0;
            break;
        case "ANNUAL_REVENUE_REQUIREMENT_UNSMOOTHED":
        case 1:
            message.variable = 1;
            break;
        case "NET_TAX_ALLOWANCE":
        case 2:
            message.variable = 2;
            break;
        case "OPEX":
        case 3:
            message.variable = 3;
            break;
        case "RETURN_OF_CAPITAL":
        case 4:
            message.variable = 4;
            break;
        case "RETURN_ON_CAPITAL":
        case 5:
            message.variable = 5;
            break;
        case "REVENUE_ADJUSTMENTS":
        case 6:
            message.variable = 6;
            break;
        }
        if (object.date != null) {
            if (typeof object.date !== "object")
                throw TypeError(".DataPoint.date: object expected");
            message.date = $root.google.protobuf.Timestamp.fromObject(object.date);
        }
        if (object.nominalDate != null) {
            if (typeof object.nominalDate !== "object")
                throw TypeError(".DataPoint.nominalDate: object expected");
            message.nominalDate = $root.google.protobuf.Timestamp.fromObject(object.nominalDate);
        }
        if (object.value != null)
            message.value = Number(object.value);
        switch (object.units) {
        case "AUD":
        case 0:
            message.units = 0;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a DataPoint message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DataPoint
     * @static
     * @param {DataPoint} message DataPoint
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DataPoint.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.variable = options.enums === String ? "ANNUAL_REVENUE_REQUIREMENT_SMOOTHED" : 0;
            object.date = null;
            object.nominalDate = null;
            object.value = 0;
            object.units = options.enums === String ? "AUD" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.variable != null && message.hasOwnProperty("variable"))
            object.variable = options.enums === String ? $root.DataPoint.Variable[message.variable] : message.variable;
        if (message.date != null && message.hasOwnProperty("date"))
            object.date = $root.google.protobuf.Timestamp.toObject(message.date, options);
        if (message.nominalDate != null && message.hasOwnProperty("nominalDate"))
            object.nominalDate = $root.google.protobuf.Timestamp.toObject(message.nominalDate, options);
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
        if (message.units != null && message.hasOwnProperty("units"))
            object.units = options.enums === String ? $root.DataPoint.UNITS[message.units] : message.units;
        return object;
    };

    /**
     * Converts this DataPoint to JSON.
     * @function toJSON
     * @memberof DataPoint
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DataPoint.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Variable enum.
     * @name DataPoint.Variable
     * @enum {string}
     * @property {number} ANNUAL_REVENUE_REQUIREMENT_SMOOTHED=0 ANNUAL_REVENUE_REQUIREMENT_SMOOTHED value
     * @property {number} ANNUAL_REVENUE_REQUIREMENT_UNSMOOTHED=1 ANNUAL_REVENUE_REQUIREMENT_UNSMOOTHED value
     * @property {number} NET_TAX_ALLOWANCE=2 NET_TAX_ALLOWANCE value
     * @property {number} OPEX=3 OPEX value
     * @property {number} RETURN_OF_CAPITAL=4 RETURN_OF_CAPITAL value
     * @property {number} RETURN_ON_CAPITAL=5 RETURN_ON_CAPITAL value
     * @property {number} REVENUE_ADJUSTMENTS=6 REVENUE_ADJUSTMENTS value
     */
    DataPoint.Variable = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ANNUAL_REVENUE_REQUIREMENT_SMOOTHED"] = 0;
        values[valuesById[1] = "ANNUAL_REVENUE_REQUIREMENT_UNSMOOTHED"] = 1;
        values[valuesById[2] = "NET_TAX_ALLOWANCE"] = 2;
        values[valuesById[3] = "OPEX"] = 3;
        values[valuesById[4] = "RETURN_OF_CAPITAL"] = 4;
        values[valuesById[5] = "RETURN_ON_CAPITAL"] = 5;
        values[valuesById[6] = "REVENUE_ADJUSTMENTS"] = 6;
        return values;
    })();

    /**
     * UNITS enum.
     * @name DataPoint.UNITS
     * @enum {string}
     * @property {number} AUD=0 AUD value
     */
    DataPoint.UNITS = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AUD"] = 0;
        return values;
    })();

    return DataPoint;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
