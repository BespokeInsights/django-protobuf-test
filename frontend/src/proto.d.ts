import * as $protobuf from "protobufjs";
/** Properties of a User. */
export interface IUser {

    /** Primary key */
    id?: (string|null);

    /** User email */
    email?: (string|null);

    /** User name */
    name?: (string|null);
}

/** Represents a User. */
export class User implements IUser {

    /**
     * Constructs a new User.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUser);

    /** Primary key */
    public id: string;

    /** User email. */
    public email: string;

    /** User name. */
    public name: string;

    /**
     * Creates a new User instance using the specified properties.
     * @param [properties] Properties to set
     * @returns User instance
     */
    public static create(properties?: IUser): User;

    /**
     * Encodes the specified User message. Does not implicitly {@link User.verify|verify} messages.
     * @param message User message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified User message, length delimited. Does not implicitly {@link User.verify|verify} messages.
     * @param message User message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a User message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): User;

    /**
     * Decodes a User message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): User;

    /**
     * Verifies a User message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a User message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns User
     */
    public static fromObject(object: { [k: string]: any }): User;

    /**
     * Creates a plain object from a User message. Also converts values to other types if specified.
     * @param message User
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: User, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this User to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Network. */
export interface INetwork {

    /** Three letter code representing the network */
    id?: (string|null);

    /** Network name */
    name?: (string|null);

    /** Network mainState */
    mainState?: (Network.StateCode|null);

    /** Network sector */
    sector?: (Network.Sector|null);
}

/** Represents a Network. */
export class Network implements INetwork {

    /**
     * Constructs a new Network.
     * @param [properties] Properties to set
     */
    constructor(properties?: INetwork);

    /** Three letter code representing the network */
    public id: string;

    /** Network name. */
    public name: string;

    /** Network mainState. */
    public mainState: Network.StateCode;

    /** Network sector. */
    public sector: Network.Sector;

    /**
     * Creates a new Network instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Network instance
     */
    public static create(properties?: INetwork): Network;

    /**
     * Encodes the specified Network message. Does not implicitly {@link Network.verify|verify} messages.
     * @param message Network message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INetwork, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Network message, length delimited. Does not implicitly {@link Network.verify|verify} messages.
     * @param message Network message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INetwork, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Network message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Network
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Network;

    /**
     * Decodes a Network message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Network
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Network;

    /**
     * Verifies a Network message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Network message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Network
     */
    public static fromObject(object: { [k: string]: any }): Network;

    /**
     * Creates a plain object from a Network message. Also converts values to other types if specified.
     * @param message Network
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Network, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Network to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Network {

    /** StateCode enum. */
    enum StateCode {
        QLD = 0,
        NSW = 1,
        VIC = 2,
        ACT = 3,
        TAS = 4,
        SA = 5,
        WA = 6,
        NT = 7
    }

    /** Sector enum. */
    enum Sector {
        DISTRIBUTION = 0,
        TRANSMISSION = 1
    }
}

/** Properties of a Determination. */
export interface IDetermination {

    /** Determination id */
    id?: (string|null);

    /** Determination periodType */
    periodType?: (Determination.PeriodType|null);

    /** Determination detailsUrl */
    detailsUrl?: (string|null);

    /** Determination network */
    network?: (INetwork|null);

    /** Determination firstYearStart */
    firstYearStart?: (google.protobuf.ITimestamp|null);

    /** Determination firstYearEnd */
    firstYearEnd?: (google.protobuf.ITimestamp|null);

    /** Determination lastYearEnd */
    lastYearEnd?: (google.protobuf.ITimestamp|null);

    /** Determination milestones */
    milestones?: (IMilestone[]|null);
}

/** Represents a Determination. */
export class Determination implements IDetermination {

    /**
     * Constructs a new Determination.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDetermination);

    /** Determination id. */
    public id: string;

    /** Determination periodType. */
    public periodType: Determination.PeriodType;

    /** Determination detailsUrl. */
    public detailsUrl: string;

    /** Determination network. */
    public network?: (INetwork|null);

    /** Determination firstYearStart. */
    public firstYearStart?: (google.protobuf.ITimestamp|null);

    /** Determination firstYearEnd. */
    public firstYearEnd?: (google.protobuf.ITimestamp|null);

    /** Determination lastYearEnd. */
    public lastYearEnd?: (google.protobuf.ITimestamp|null);

    /** Determination milestones. */
    public milestones: IMilestone[];

    /**
     * Creates a new Determination instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Determination instance
     */
    public static create(properties?: IDetermination): Determination;

    /**
     * Encodes the specified Determination message. Does not implicitly {@link Determination.verify|verify} messages.
     * @param message Determination message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDetermination, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Determination message, length delimited. Does not implicitly {@link Determination.verify|verify} messages.
     * @param message Determination message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDetermination, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Determination message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Determination
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Determination;

    /**
     * Decodes a Determination message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Determination
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Determination;

    /**
     * Verifies a Determination message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Determination message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Determination
     */
    public static fromObject(object: { [k: string]: any }): Determination;

    /**
     * Creates a plain object from a Determination message. Also converts values to other types if specified.
     * @param message Determination
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Determination, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Determination to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Determination {

    /** PeriodType enum. */
    enum PeriodType {
        CALENDAR_YEAR = 0,
        FINANCIAL_YEAR = 1
    }
}

/** Properties of a Milestone. */
export interface IMilestone {

    /** Milestone id */
    id?: (string|null);

    /** Milestone level */
    level?: (Milestone.Level|null);

    /** Milestone detailsUrl */
    detailsUrl?: (string|null);

    /** Milestone ptrmFileUrl */
    ptrmFileUrl?: (string|null);

    /** Milestone dataPoints */
    dataPoints?: (IDataPoint[]|null);
}

/** Represents a Milestone. */
export class Milestone implements IMilestone {

    /**
     * Constructs a new Milestone.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMilestone);

    /** Milestone id. */
    public id: string;

    /** Milestone level. */
    public level: Milestone.Level;

    /** Milestone detailsUrl. */
    public detailsUrl: string;

    /** Milestone ptrmFileUrl. */
    public ptrmFileUrl: string;

    /** Milestone dataPoints. */
    public dataPoints: IDataPoint[];

    /**
     * Creates a new Milestone instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Milestone instance
     */
    public static create(properties?: IMilestone): Milestone;

    /**
     * Encodes the specified Milestone message. Does not implicitly {@link Milestone.verify|verify} messages.
     * @param message Milestone message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMilestone, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Milestone message, length delimited. Does not implicitly {@link Milestone.verify|verify} messages.
     * @param message Milestone message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMilestone, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Milestone message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Milestone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Milestone;

    /**
     * Decodes a Milestone message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Milestone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Milestone;

    /**
     * Verifies a Milestone message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Milestone message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Milestone
     */
    public static fromObject(object: { [k: string]: any }): Milestone;

    /**
     * Creates a plain object from a Milestone message. Also converts values to other types if specified.
     * @param message Milestone
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Milestone, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Milestone to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Milestone {

    /** Level enum. */
    enum Level {
        INITIATION = 0,
        AER_POSITION = 1,
        CHALLENGE_PANEL = 2,
        PROPOSAL = 3,
        DRAFT_DECISION = 4,
        PRELIMINARY_DECISION = 5,
        REVISED_PROPOSAL = 6,
        FINAL_DECISION = 7,
        APPEAL = 8,
        UPDATES = 9,
        ACTUALS = 10,
        USER_SCENARIOS = 11
    }
}

/** Properties of a DataPoint. */
export interface IDataPoint {

    /** DataPoint id */
    id?: (string|null);

    /** DataPoint variable */
    variable?: (DataPoint.Variable|null);

    /** DataPoint date */
    date?: (google.protobuf.ITimestamp|null);

    /** DataPoint nominalDate */
    nominalDate?: (google.protobuf.ITimestamp|null);

    /** DataPoint value */
    value?: (number|null);

    /** DataPoint units */
    units?: (DataPoint.UNITS|null);
}

/** Represents a DataPoint. */
export class DataPoint implements IDataPoint {

    /**
     * Constructs a new DataPoint.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDataPoint);

    /** DataPoint id. */
    public id: string;

    /** DataPoint variable. */
    public variable: DataPoint.Variable;

    /** DataPoint date. */
    public date?: (google.protobuf.ITimestamp|null);

    /** DataPoint nominalDate. */
    public nominalDate?: (google.protobuf.ITimestamp|null);

    /** DataPoint value. */
    public value: number;

    /** DataPoint units. */
    public units: DataPoint.UNITS;

    /**
     * Creates a new DataPoint instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DataPoint instance
     */
    public static create(properties?: IDataPoint): DataPoint;

    /**
     * Encodes the specified DataPoint message. Does not implicitly {@link DataPoint.verify|verify} messages.
     * @param message DataPoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDataPoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DataPoint message, length delimited. Does not implicitly {@link DataPoint.verify|verify} messages.
     * @param message DataPoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDataPoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DataPoint message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DataPoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataPoint;

    /**
     * Decodes a DataPoint message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DataPoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataPoint;

    /**
     * Verifies a DataPoint message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DataPoint message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DataPoint
     */
    public static fromObject(object: { [k: string]: any }): DataPoint;

    /**
     * Creates a plain object from a DataPoint message. Also converts values to other types if specified.
     * @param message DataPoint
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DataPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DataPoint to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace DataPoint {

    /** Variable enum. */
    enum Variable {
        ANNUAL_REVENUE_REQUIREMENT_SMOOTHED = 0,
        ANNUAL_REVENUE_REQUIREMENT_UNSMOOTHED = 1,
        NET_TAX_ALLOWANCE = 2,
        OPEX = 3,
        RETURN_OF_CAPITAL = 4,
        RETURN_ON_CAPITAL = 5,
        REVENUE_ADJUSTMENTS = 6
    }

    /** UNITS enum. */
    enum UNITS {
        AUD = 0
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
