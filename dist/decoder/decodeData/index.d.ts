export interface Chunk {
    type: Mode;
    text: string;
}
export interface ByteChunk {
    type: Mode.Byte | Mode.Kanji;
    bytes: number[];
}
export interface ECIChunk {
    type: Mode.ECI;
    assignmentNumber: number;
}
export declare type Chunks = Array<Chunk | ByteChunk | ECIChunk>;
export interface DecodedQR {
    text: string;
    bytes: number[];
    chunks: Chunks;
    version: number;
}
export declare enum Mode {
    Numeric = "numeric",
    Alphanumeric = "alphanumeric",
    Byte = "byte",
    Kanji = "kanji",
    ECI = "eci"
}
export declare enum ModeByte {
    Terminator = 0,
    Numeric = 1,
    Alphanumeric = 2,
    Byte = 4,
    Kanji = 8,
    ECI = 7,
    StructuredAppend = 3,
    FNC1FirstPosition = 5,
    FNC1SecondPosition = 9
}
export declare function decode(data: Uint8ClampedArray, version: number): DecodedQR;
