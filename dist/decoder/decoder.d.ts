import { BitMatrix } from "../BitMatrix";
import { Version } from "./version";
interface FormatInformation {
    errorCorrectionLevel: number;
    dataMask: number;
}
export declare function buildFunctionPatternMask(version: Version): BitMatrix;
export declare function readCodewords(matrix: BitMatrix, version: Version, formatInfo: FormatInformation): number[];
export declare function readVersion(matrix: BitMatrix): Version;
export declare function readFormatInformation(matrix: BitMatrix): {
    errorCorrectionLevel: number;
    dataMask: number;
};
export declare function getDataBlocks(codewords: number[], version: Version, ecLevel: number): {
    numDataCodewords: number;
    codewords: number[];
}[];
export declare function decodeMatrix(matrix: BitMatrix): {
    formatInfo: {
        errorCorrectionLevel: number;
        dataMask: number;
    };
    codewords: number[];
    dataBlocks: {
        numDataCodewords: number;
        codewords: number[];
    }[];
    resultBytes: Uint8ClampedArray;
    text: string;
    bytes: number[];
    chunks: (import("../../../../../../Users/Trace/superfluid_sim/jsQR/src/decoder/decodeData").Chunk | import("../../../../../../Users/Trace/superfluid_sim/jsQR/src/decoder/decodeData").ByteChunk | import("../../../../../../Users/Trace/superfluid_sim/jsQR/src/decoder/decodeData").ECIChunk)[];
    version: number;
};
export declare function decode(matrix: BitMatrix): {
    formatInfo: {
        errorCorrectionLevel: number;
        dataMask: number;
    };
    codewords: number[];
    dataBlocks: {
        numDataCodewords: number;
        codewords: number[];
    }[];
    resultBytes: Uint8ClampedArray;
    text: string;
    bytes: number[];
    chunks: (import("../../../../../../Users/Trace/superfluid_sim/jsQR/src/decoder/decodeData").Chunk | import("../../../../../../Users/Trace/superfluid_sim/jsQR/src/decoder/decodeData").ByteChunk | import("../../../../../../Users/Trace/superfluid_sim/jsQR/src/decoder/decodeData").ECIChunk)[];
    version: number;
};
export {};
