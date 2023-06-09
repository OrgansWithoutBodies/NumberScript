type Bit = 1 | 0;
type AssertExtends<Expected, Actual extends Expected = Expected> = Actual;
type ZeroOut<Ints extends Bit[]> = {
  [Index in keyof Ints]: 0;
};

// // [Borrow, Top, Bottom]: as in, -Borrow + (Top - Bottom)
// // [Diff, Borrow]
// type BitSubtractThree<A extends Bit = 0, B extends Bit = 0, C extends Bit = 0> =
//     [A, B, C] extends [0, 0, 0] ? [0, 0] :
//     [A, B, C] extends [1, 0, 0] ? [1, 1] : // ???
//     [A, B, C] extends [0, 1, 0] ? [1, 0] :
//     [A, B, C] extends [0, 0, 1] ? [1, 1] : // ???
//     [A, B, C] extends [1, 1, 0] ? [0, 0] :
//     [A, B, C] extends [1, 0, 1] ? [0, 1] : // ???
//     [A, B, C] extends [0, 1, 1] ? [0, 0] :
//     [A, B, C] extends [1, 1, 1] ? [1, 1] : // ???
//     [Bit, Bit]
// ;
// https://github.com/sinclairzx81/ts-8-bit
// type BitSubtracts<A extends Int8, B extends Int8> = Int8 & {
//     [P in 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7]: BitSubtract<A[P], B[P]>;
// };

// type SubtractInt8<
//     A extends Int8,
//     B extends Int8,
//     BitsSubtracted extends BitSubtracts<A, B> = BitSubtracts<A, B>,
//     Sub0 extends BitsSubtracted[0] = BitsSubtracted[0],
//     Sub1 extends BitSubtractThree<Sub0[1], A[1], B[1]> = BitSubtractThree<Sub0[1], A[1], B[1]>,
//     Sub2 extends BitSubtractThree<Sub1[1], A[2], B[2]> = BitSubtractThree<Sub1[1], A[2], B[2]>,
//     Sub3 extends BitSubtractThree<Sub2[1], A[3], B[3]> = BitSubtractThree<Sub2[1], A[3], B[3]>,
//     Sub4 extends BitSubtractThree<Sub3[1], A[4], B[4]> = BitSubtractThree<Sub3[1], A[4], B[4]>,
//     Sub5 extends BitSubtractThree<Sub4[1], A[5], B[5]> = BitSubtractThree<Sub4[1], A[5], B[5]>,
//     Sub6 extends BitSubtractThree<Sub5[1], A[6], B[6]> = BitSubtractThree<Sub5[1], A[6], B[6]>,
//     Sub7 extends BitSubtractThree<Sub6[1], A[7], B[7]> = BitSubtractThree<Sub6[1], A[7], B[7]>,
// > = ReplaceBits<Zero, [
//     Sub0[0],
//     Sub1[0],
//     Sub2[0],
//     Sub3[0],
//     Sub4[0],
//     Sub5[0],
//     Sub6[0],
//     Sub7[0],
// ]>;

type ReplaceBits<Bits extends Bit[], Replacements extends Bit[]> = {
  [Index in keyof Bits]: Index extends keyof Replacements
    ? Replacements[Index]
    : Bits[Index];
};
type TupleOfLength<
  Len extends number,
  Arr extends any[] = []
> = Arr["length"] extends Len
  ? Arr
  : TupleOfLength<Len, [...Arr, Arr["length"]]>;

type NPlusOne<N extends number> = [...TupleOfLength<N>, 0]["length"];
/**
 * TODOs
 * subtract
 * codegen
 * consider decimals
 * cleaner assertion pattern
 *  assert true
 * better pattern for range units than AddOneToRangeSetMax so many times
 * sqrt
 */

// could just change this to an array but then this wouldn't be useful for decimals
type NumberToBinary<TNum extends Numbers8Bits> = [
  BinaryNumber<0, 0, 0, 0, 0, 0, 0, 0>,
  BinaryNumber<0, 0, 0, 0, 0, 0, 0, 1>,
  BinaryNumber<0, 0, 0, 0, 0, 0, 1, 0>,
  BinaryNumber<0, 0, 0, 0, 0, 0, 1, 1>,
  BinaryNumber<0, 0, 0, 0, 0, 1, 0, 0>,
  BinaryNumber<0, 0, 0, 0, 0, 1, 0, 1>,
  BinaryNumber<0, 0, 0, 0, 0, 1, 1, 0>,
  BinaryNumber<0, 0, 0, 0, 0, 1, 1, 1>,
  BinaryNumber<0, 0, 0, 0, 1, 0, 0, 0>,
  BinaryNumber<0, 0, 0, 0, 1, 0, 0, 1>,
  BinaryNumber<0, 0, 0, 0, 1, 0, 1, 0>,
  BinaryNumber<0, 0, 0, 0, 1, 0, 1, 1>,
  BinaryNumber<0, 0, 0, 0, 1, 1, 0, 0>,
  BinaryNumber<0, 0, 0, 0, 1, 1, 0, 1>,
  BinaryNumber<0, 0, 0, 0, 1, 1, 1, 0>,
  BinaryNumber<0, 0, 0, 0, 1, 1, 1, 1>,
  BinaryNumber<0, 0, 0, 1, 0, 0, 0, 0>,
  BinaryNumber<0, 0, 0, 1, 0, 0, 0, 1>,
  BinaryNumber<0, 0, 0, 1, 0, 0, 1, 0>,
  BinaryNumber<0, 0, 0, 1, 0, 0, 1, 1>,
  BinaryNumber<0, 0, 0, 1, 0, 1, 0, 0>,
  BinaryNumber<0, 0, 0, 1, 0, 1, 0, 1>,
  BinaryNumber<0, 0, 0, 1, 0, 1, 1, 0>,
  BinaryNumber<0, 0, 0, 1, 0, 1, 1, 1>,
  BinaryNumber<0, 0, 0, 1, 1, 0, 0, 0>,
  BinaryNumber<0, 0, 0, 1, 1, 0, 0, 1>,
  BinaryNumber<0, 0, 0, 1, 1, 0, 1, 0>,
  BinaryNumber<0, 0, 0, 1, 1, 0, 1, 1>,
  BinaryNumber<0, 0, 0, 1, 1, 1, 0, 0>,
  BinaryNumber<0, 0, 0, 1, 1, 1, 0, 1>,
  BinaryNumber<0, 0, 0, 1, 1, 1, 1, 0>,
  BinaryNumber<0, 0, 0, 1, 1, 1, 1, 1>,
  BinaryNumber<0, 0, 1, 0, 0, 0, 0, 0>,
  BinaryNumber<0, 0, 1, 0, 0, 0, 0, 1>,
  BinaryNumber<0, 0, 1, 0, 0, 0, 1, 0>,
  BinaryNumber<0, 0, 1, 0, 0, 0, 1, 1>,
  BinaryNumber<0, 0, 1, 0, 0, 1, 0, 0>,
  BinaryNumber<0, 0, 1, 0, 0, 1, 0, 1>,
  BinaryNumber<0, 0, 1, 0, 0, 1, 1, 0>,
  BinaryNumber<0, 0, 1, 0, 0, 1, 1, 1>,
  BinaryNumber<0, 0, 1, 0, 1, 0, 0, 0>,
  BinaryNumber<0, 0, 1, 0, 1, 0, 0, 1>,
  BinaryNumber<0, 0, 1, 0, 1, 0, 1, 0>,
  BinaryNumber<0, 0, 1, 0, 1, 0, 1, 1>,
  BinaryNumber<0, 0, 1, 0, 1, 1, 0, 0>,
  BinaryNumber<0, 0, 1, 0, 1, 1, 0, 1>,
  BinaryNumber<0, 0, 1, 0, 1, 1, 1, 0>,
  BinaryNumber<0, 0, 1, 0, 1, 1, 1, 1>,
  BinaryNumber<0, 0, 1, 1, 0, 0, 0, 0>,
  BinaryNumber<0, 0, 1, 1, 0, 0, 0, 1>,
  BinaryNumber<0, 0, 1, 1, 0, 0, 1, 0>,
  BinaryNumber<0, 0, 1, 1, 0, 0, 1, 1>,
  BinaryNumber<0, 0, 1, 1, 0, 1, 0, 0>,
  BinaryNumber<0, 0, 1, 1, 0, 1, 0, 1>,
  BinaryNumber<0, 0, 1, 1, 0, 1, 1, 0>,
  BinaryNumber<0, 0, 1, 1, 0, 1, 1, 1>,
  BinaryNumber<0, 0, 1, 1, 1, 0, 0, 0>,
  BinaryNumber<0, 0, 1, 1, 1, 0, 0, 1>,
  BinaryNumber<0, 0, 1, 1, 1, 0, 1, 0>,
  BinaryNumber<0, 0, 1, 1, 1, 0, 1, 1>,
  BinaryNumber<0, 0, 1, 1, 1, 1, 0, 0>,
  BinaryNumber<0, 0, 1, 1, 1, 1, 0, 1>,
  BinaryNumber<0, 0, 1, 1, 1, 1, 1, 0>,
  BinaryNumber<0, 0, 1, 1, 1, 1, 1, 1>,
  BinaryNumber<0, 1, 0, 0, 0, 0, 0, 0>,
  BinaryNumber<0, 1, 0, 0, 0, 0, 0, 1>,
  BinaryNumber<0, 1, 0, 0, 0, 0, 1, 0>,
  BinaryNumber<0, 1, 0, 0, 0, 0, 1, 1>,
  BinaryNumber<0, 1, 0, 0, 0, 1, 0, 0>,
  BinaryNumber<0, 1, 0, 0, 0, 1, 0, 1>,
  BinaryNumber<0, 1, 0, 0, 0, 1, 1, 0>,
  BinaryNumber<0, 1, 0, 0, 0, 1, 1, 1>,
  BinaryNumber<0, 1, 0, 0, 1, 0, 0, 0>,
  BinaryNumber<0, 1, 0, 0, 1, 0, 0, 1>,
  BinaryNumber<0, 1, 0, 0, 1, 0, 1, 0>,
  BinaryNumber<0, 1, 0, 0, 1, 0, 1, 1>,
  BinaryNumber<0, 1, 0, 0, 1, 1, 0, 0>,
  BinaryNumber<0, 1, 0, 0, 1, 1, 0, 1>,
  BinaryNumber<0, 1, 0, 0, 1, 1, 1, 0>,
  BinaryNumber<0, 1, 0, 0, 1, 1, 1, 1>,
  BinaryNumber<0, 1, 0, 1, 0, 0, 0, 0>,
  BinaryNumber<0, 1, 0, 1, 0, 0, 0, 1>,
  BinaryNumber<0, 1, 0, 1, 0, 0, 1, 0>,
  BinaryNumber<0, 1, 0, 1, 0, 0, 1, 1>,
  BinaryNumber<0, 1, 0, 1, 0, 1, 0, 0>,
  BinaryNumber<0, 1, 0, 1, 0, 1, 0, 1>,
  BinaryNumber<0, 1, 0, 1, 0, 1, 1, 0>,
  BinaryNumber<0, 1, 0, 1, 0, 1, 1, 1>,
  BinaryNumber<0, 1, 0, 1, 1, 0, 0, 0>,
  BinaryNumber<0, 1, 0, 1, 1, 0, 0, 1>,
  BinaryNumber<0, 1, 0, 1, 1, 0, 1, 0>,
  BinaryNumber<0, 1, 0, 1, 1, 0, 1, 1>,
  BinaryNumber<0, 1, 0, 1, 1, 1, 0, 0>,
  BinaryNumber<0, 1, 0, 1, 1, 1, 0, 1>,
  BinaryNumber<0, 1, 0, 1, 1, 1, 1, 0>,
  BinaryNumber<0, 1, 0, 1, 1, 1, 1, 1>,
  BinaryNumber<0, 1, 1, 0, 0, 0, 0, 0>,
  BinaryNumber<0, 1, 1, 0, 0, 0, 0, 1>,
  BinaryNumber<0, 1, 1, 0, 0, 0, 1, 0>,
  BinaryNumber<0, 1, 1, 0, 0, 0, 1, 1>,
  BinaryNumber<0, 1, 1, 0, 0, 1, 0, 0>,
  BinaryNumber<0, 1, 1, 0, 0, 1, 0, 1>,
  BinaryNumber<0, 1, 1, 0, 0, 1, 1, 0>,
  BinaryNumber<0, 1, 1, 0, 0, 1, 1, 1>,
  BinaryNumber<0, 1, 1, 0, 1, 0, 0, 0>,
  BinaryNumber<0, 1, 1, 0, 1, 0, 0, 1>,
  BinaryNumber<0, 1, 1, 0, 1, 0, 1, 0>,
  BinaryNumber<0, 1, 1, 0, 1, 0, 1, 1>,
  BinaryNumber<0, 1, 1, 0, 1, 1, 0, 0>,
  BinaryNumber<0, 1, 1, 0, 1, 1, 0, 1>,
  BinaryNumber<0, 1, 1, 0, 1, 1, 1, 0>,
  BinaryNumber<0, 1, 1, 0, 1, 1, 1, 1>,
  BinaryNumber<0, 1, 1, 1, 0, 0, 0, 0>,
  BinaryNumber<0, 1, 1, 1, 0, 0, 0, 1>,
  BinaryNumber<0, 1, 1, 1, 0, 0, 1, 0>,
  BinaryNumber<0, 1, 1, 1, 0, 0, 1, 1>,
  BinaryNumber<0, 1, 1, 1, 0, 1, 0, 0>,
  BinaryNumber<0, 1, 1, 1, 0, 1, 0, 1>,
  BinaryNumber<0, 1, 1, 1, 0, 1, 1, 0>,
  BinaryNumber<0, 1, 1, 1, 0, 1, 1, 1>,
  BinaryNumber<0, 1, 1, 1, 1, 0, 0, 0>,
  BinaryNumber<0, 1, 1, 1, 1, 0, 0, 1>,
  BinaryNumber<0, 1, 1, 1, 1, 0, 1, 0>,
  BinaryNumber<0, 1, 1, 1, 1, 0, 1, 1>,
  BinaryNumber<0, 1, 1, 1, 1, 1, 0, 0>,
  BinaryNumber<0, 1, 1, 1, 1, 1, 0, 1>,
  BinaryNumber<0, 1, 1, 1, 1, 1, 1, 0>,
  BinaryNumber<0, 1, 1, 1, 1, 1, 1, 1>,
  BinaryNumber<1, 0, 0, 0, 0, 0, 0, 0>,
  BinaryNumber<1, 0, 0, 0, 0, 0, 0, 1>,
  BinaryNumber<1, 0, 0, 0, 0, 0, 1, 0>,
  BinaryNumber<1, 0, 0, 0, 0, 0, 1, 1>,
  BinaryNumber<1, 0, 0, 0, 0, 1, 0, 0>,
  BinaryNumber<1, 0, 0, 0, 0, 1, 0, 1>,
  BinaryNumber<1, 0, 0, 0, 0, 1, 1, 0>,
  BinaryNumber<1, 0, 0, 0, 0, 1, 1, 1>,
  BinaryNumber<1, 0, 0, 0, 1, 0, 0, 0>,
  BinaryNumber<1, 0, 0, 0, 1, 0, 0, 1>,
  BinaryNumber<1, 0, 0, 0, 1, 0, 1, 0>,
  BinaryNumber<1, 0, 0, 0, 1, 0, 1, 1>,
  BinaryNumber<1, 0, 0, 0, 1, 1, 0, 0>,
  BinaryNumber<1, 0, 0, 0, 1, 1, 0, 1>,
  BinaryNumber<1, 0, 0, 0, 1, 1, 1, 0>,
  BinaryNumber<1, 0, 0, 0, 1, 1, 1, 1>,
  BinaryNumber<1, 0, 0, 1, 0, 0, 0, 0>,
  BinaryNumber<1, 0, 0, 1, 0, 0, 0, 1>,
  BinaryNumber<1, 0, 0, 1, 0, 0, 1, 0>,
  BinaryNumber<1, 0, 0, 1, 0, 0, 1, 1>,
  BinaryNumber<1, 0, 0, 1, 0, 1, 0, 0>,
  BinaryNumber<1, 0, 0, 1, 0, 1, 0, 1>,
  BinaryNumber<1, 0, 0, 1, 0, 1, 1, 0>,
  BinaryNumber<1, 0, 0, 1, 0, 1, 1, 1>,
  BinaryNumber<1, 0, 0, 1, 1, 0, 0, 0>,
  BinaryNumber<1, 0, 0, 1, 1, 0, 0, 1>,
  BinaryNumber<1, 0, 0, 1, 1, 0, 1, 0>,
  BinaryNumber<1, 0, 0, 1, 1, 0, 1, 1>,
  BinaryNumber<1, 0, 0, 1, 1, 1, 0, 0>,
  BinaryNumber<1, 0, 0, 1, 1, 1, 0, 1>,
  BinaryNumber<1, 0, 0, 1, 1, 1, 1, 0>,
  BinaryNumber<1, 0, 0, 1, 1, 1, 1, 1>,
  BinaryNumber<1, 0, 1, 0, 0, 0, 0, 0>,
  BinaryNumber<1, 0, 1, 0, 0, 0, 0, 1>,
  BinaryNumber<1, 0, 1, 0, 0, 0, 1, 0>,
  BinaryNumber<1, 0, 1, 0, 0, 0, 1, 1>,
  BinaryNumber<1, 0, 1, 0, 0, 1, 0, 0>,
  BinaryNumber<1, 0, 1, 0, 0, 1, 0, 1>,
  BinaryNumber<1, 0, 1, 0, 0, 1, 1, 0>,
  BinaryNumber<1, 0, 1, 0, 0, 1, 1, 1>,
  BinaryNumber<1, 0, 1, 0, 1, 0, 0, 0>,
  BinaryNumber<1, 0, 1, 0, 1, 0, 0, 1>,
  BinaryNumber<1, 0, 1, 0, 1, 0, 1, 0>,
  BinaryNumber<1, 0, 1, 0, 1, 0, 1, 1>,
  BinaryNumber<1, 0, 1, 0, 1, 1, 0, 0>,
  BinaryNumber<1, 0, 1, 0, 1, 1, 0, 1>,
  BinaryNumber<1, 0, 1, 0, 1, 1, 1, 0>,
  BinaryNumber<1, 0, 1, 0, 1, 1, 1, 1>,
  BinaryNumber<1, 0, 1, 1, 0, 0, 0, 0>,
  BinaryNumber<1, 0, 1, 1, 0, 0, 0, 1>,
  BinaryNumber<1, 0, 1, 1, 0, 0, 1, 0>,
  BinaryNumber<1, 0, 1, 1, 0, 0, 1, 1>,
  BinaryNumber<1, 0, 1, 1, 0, 1, 0, 0>,
  BinaryNumber<1, 0, 1, 1, 0, 1, 0, 1>,
  BinaryNumber<1, 0, 1, 1, 0, 1, 1, 0>,
  BinaryNumber<1, 0, 1, 1, 0, 1, 1, 1>,
  BinaryNumber<1, 0, 1, 1, 1, 0, 0, 0>,
  BinaryNumber<1, 0, 1, 1, 1, 0, 0, 1>,
  BinaryNumber<1, 0, 1, 1, 1, 0, 1, 0>,
  BinaryNumber<1, 0, 1, 1, 1, 0, 1, 1>,
  BinaryNumber<1, 0, 1, 1, 1, 1, 0, 0>,
  BinaryNumber<1, 0, 1, 1, 1, 1, 0, 1>,
  BinaryNumber<1, 0, 1, 1, 1, 1, 1, 0>,
  BinaryNumber<1, 0, 1, 1, 1, 1, 1, 1>,
  BinaryNumber<1, 1, 0, 0, 0, 0, 0, 0>,
  BinaryNumber<1, 1, 0, 0, 0, 0, 0, 1>,
  BinaryNumber<1, 1, 0, 0, 0, 0, 1, 0>,
  BinaryNumber<1, 1, 0, 0, 0, 0, 1, 1>,
  BinaryNumber<1, 1, 0, 0, 0, 1, 0, 0>,
  BinaryNumber<1, 1, 0, 0, 0, 1, 0, 1>,
  BinaryNumber<1, 1, 0, 0, 0, 1, 1, 0>,
  BinaryNumber<1, 1, 0, 0, 0, 1, 1, 1>,
  BinaryNumber<1, 1, 0, 0, 1, 0, 0, 0>,
  BinaryNumber<1, 1, 0, 0, 1, 0, 0, 1>,
  BinaryNumber<1, 1, 0, 0, 1, 0, 1, 0>,
  BinaryNumber<1, 1, 0, 0, 1, 0, 1, 1>,
  BinaryNumber<1, 1, 0, 0, 1, 1, 0, 0>,
  BinaryNumber<1, 1, 0, 0, 1, 1, 0, 1>,
  BinaryNumber<1, 1, 0, 0, 1, 1, 1, 0>,
  BinaryNumber<1, 1, 0, 0, 1, 1, 1, 1>,
  BinaryNumber<1, 1, 0, 1, 0, 0, 0, 0>,
  BinaryNumber<1, 1, 0, 1, 0, 0, 0, 1>,
  BinaryNumber<1, 1, 0, 1, 0, 0, 1, 0>,
  BinaryNumber<1, 1, 0, 1, 0, 0, 1, 1>,
  BinaryNumber<1, 1, 0, 1, 0, 1, 0, 0>,
  BinaryNumber<1, 1, 0, 1, 0, 1, 0, 1>,
  BinaryNumber<1, 1, 0, 1, 0, 1, 1, 0>,
  BinaryNumber<1, 1, 0, 1, 0, 1, 1, 1>,
  BinaryNumber<1, 1, 0, 1, 1, 0, 0, 0>,
  BinaryNumber<1, 1, 0, 1, 1, 0, 0, 1>,
  BinaryNumber<1, 1, 0, 1, 1, 0, 1, 0>,
  BinaryNumber<1, 1, 0, 1, 1, 0, 1, 1>,
  BinaryNumber<1, 1, 0, 1, 1, 1, 0, 0>,
  BinaryNumber<1, 1, 0, 1, 1, 1, 0, 1>,
  BinaryNumber<1, 1, 0, 1, 1, 1, 1, 0>,
  BinaryNumber<1, 1, 0, 1, 1, 1, 1, 1>,
  BinaryNumber<1, 1, 1, 0, 0, 0, 0, 0>,
  BinaryNumber<1, 1, 1, 0, 0, 0, 0, 1>,
  BinaryNumber<1, 1, 1, 0, 0, 0, 1, 0>,
  BinaryNumber<1, 1, 1, 0, 0, 0, 1, 1>,
  BinaryNumber<1, 1, 1, 0, 0, 1, 0, 0>,
  BinaryNumber<1, 1, 1, 0, 0, 1, 0, 1>,
  BinaryNumber<1, 1, 1, 0, 0, 1, 1, 0>,
  BinaryNumber<1, 1, 1, 0, 0, 1, 1, 1>,
  BinaryNumber<1, 1, 1, 0, 1, 0, 0, 0>,
  BinaryNumber<1, 1, 1, 0, 1, 0, 0, 1>,
  BinaryNumber<1, 1, 1, 0, 1, 0, 1, 0>,
  BinaryNumber<1, 1, 1, 0, 1, 0, 1, 1>,
  BinaryNumber<1, 1, 1, 0, 1, 1, 0, 0>,
  BinaryNumber<1, 1, 1, 0, 1, 1, 0, 1>,
  BinaryNumber<1, 1, 1, 0, 1, 1, 1, 0>,
  BinaryNumber<1, 1, 1, 0, 1, 1, 1, 1>,
  BinaryNumber<1, 1, 1, 1, 0, 0, 0, 0>,
  BinaryNumber<1, 1, 1, 1, 0, 0, 0, 1>,
  BinaryNumber<1, 1, 1, 1, 0, 0, 1, 0>,
  BinaryNumber<1, 1, 1, 1, 0, 0, 1, 1>,
  BinaryNumber<1, 1, 1, 1, 0, 1, 0, 0>,
  BinaryNumber<1, 1, 1, 1, 0, 1, 0, 1>,
  BinaryNumber<1, 1, 1, 1, 0, 1, 1, 0>,
  BinaryNumber<1, 1, 1, 1, 0, 1, 1, 1>,
  BinaryNumber<1, 1, 1, 1, 1, 0, 0, 0>,
  BinaryNumber<1, 1, 1, 1, 1, 0, 0, 1>,
  BinaryNumber<1, 1, 1, 1, 1, 0, 1, 0>,
  BinaryNumber<1, 1, 1, 1, 1, 0, 1, 1>,
  BinaryNumber<1, 1, 1, 1, 1, 1, 0, 0>,
  BinaryNumber<1, 1, 1, 1, 1, 1, 0, 1>,
  BinaryNumber<1, 1, 1, 1, 1, 1, 1, 0>,
  BinaryNumber<1, 1, 1, 1, 1, 1, 1, 1>,
  BinaryNumber<0, 0, 0, 0, 0, 0, 0, 0, true>
][TNum];

// type
// type BinaryToNumber<
//   TBin extends BinaryNumber,
//   T0 = TBin[0],
//   T1 = TBin[1],
//   T2 = TBin[2],
//   T3 = TBin[3],
//   T4 = TBin[4],
//   T5 = TBin[5],
//   T6 = TBin[6],
//   T7 = TBin[7]
// > = T0 extends 0
//   ? T1 extends 0
//     ? // <128
//       T2 extends 0
//       ? // <64
//         T3 extends 0
//         ? // <32
//           T4 extends 0
//           ? // <16
//             T5 extends 0
//             ? // <8
//               T6 extends 0
//               ? // <4
//                 T7 extends 0
//                 ? // <2
//                   0
//                 : 1
//               : T7 extends 0
//               ? 2
//               : 3
//             : T6 extends 0
//             ? T7 extends 0
//               ? 4
//               : 5
//             : T7 extends 0
//             ? 6
//             : 7
//           : T5 extends 0
//           ? T6 extends 0
//             ? T7 extends 0
//               ? 8
//               : 9
//             : T7 extends 0
//             ? 10
//             : 11
//           : T6 extends 0
//           ? T7 extends 0
//             ? 12
//             : 13
//           : T7 extends 0
//           ? 14
//           : 15
//         : T4 extends 0
//         ? // <16
//           T5 extends 0
//           ? // <8
//             T6 extends 0
//             ? // <4
//               T7 extends 0
//               ? // <2
//                 16
//               : 17
//             : T7 extends 0
//             ? 18
//             : 19
//           : T6 extends 0
//           ? T7 extends 0
//             ? 20
//             : 21
//           : T7 extends 0
//           ? 22
//           : 23
//         : T5 extends 0
//         ? T6 extends 0
//           ? T7 extends 0
//             ? 24
//             : 25
//           : T7 extends 0
//           ? 26
//           : 27
//         : T6 extends 0
//         ? T7 extends 0
//           ? 28
//           : 29
//         : T7 extends 0
//         ? 30
//         : 31
//       : T3 extends 0
//       ? // <32
//         T4 extends 0
//         ? // <16
//           T5 extends 0
//           ? // <8
//             T6 extends 0
//             ? // <4
//               T7 extends 0
//               ? // <2
//                 32
//               : 33
//             : T7 extends 0
//             ? 34
//             : 35
//           : T6 extends 0
//           ? T7 extends 0
//             ? 36
//             : 37
//           : T7 extends 0
//           ? 38
//           : 39
//         : T5 extends 0
//         ? T6 extends 0
//           ? T7 extends 0
//             ? 40
//             : 41
//           : T7 extends 0
//           ? 42
//           : 43
//         : T6 extends 0
//         ? T7 extends 0
//           ? 44
//           : 45
//         : T7 extends 0
//         ? 46
//         : 47
//       : T4 extends 0
//       ? // <16
//         T5 extends 0
//         ? // <8
//           T6 extends 0
//           ? // <4
//             T7 extends 0
//             ? // <2
//               48
//             : 49
//           : T7 extends 0
//           ? 50
//           : 51
//         : T6 extends 0
//         ? T7 extends 0
//           ? 52
//           : 53
//         : T7 extends 0
//         ? 54
//         : 55
//       : T5 extends 0
//       ? T6 extends 0
//         ? T7 extends 0
//           ? 56
//           : 57
//         : T7 extends 0
//         ? 58
//         : 59
//       : T6 extends 0
//       ? T7 extends 0
//         ? 60
//         : 61
//       : T7 extends 0
//       ? 62
//       : 63
//     : T2 extends 0
//     ? // <64
//       T3 extends 0
//       ? // <32
//         T4 extends 0
//         ? // <16
//           T5 extends 0
//           ? // <8
//             T6 extends 0
//             ? // <4
//               T7 extends 0
//               ? // <2
//                 64
//               : 65
//             : T7 extends 0
//             ? 66
//             : 67
//           : T6 extends 0
//           ? T7 extends 0
//             ? 68
//             : 69
//           : T7 extends 0
//           ? 70
//           : 71
//         : T5 extends 0
//         ? T6 extends 0
//           ? T7 extends 0
//             ? 72
//             : 73
//           : T7 extends 0
//           ? 74
//           : 75
//         : T6 extends 0
//         ? T7 extends 0
//           ? 76
//           : 77
//         : T7 extends 0
//         ? 78
//         : 79
//       : T4 extends 0
//       ? // <16
//         T5 extends 0
//         ? // <8
//           T6 extends 0
//           ? // <4
//             T7 extends 0
//             ? // <2
//               80
//             : 81
//           : T7 extends 0
//           ? 82
//           : 83
//         : T6 extends 0
//         ? T7 extends 0
//           ? 84
//           : 85
//         : T7 extends 0
//         ? 86
//         : 87
//       : T5 extends 0
//       ? T6 extends 0
//         ? T7 extends 0
//           ? 88
//           : 89
//         : T7 extends 0
//         ? 90
//         : 91
//       : T6 extends 0
//       ? T7 extends 0
//         ? 92
//         : 93
//       : T7 extends 0
//       ? 94
//       : 95
//     : T3 extends 0
//     ? // <32
//       T4 extends 0
//       ? // <16
//         T5 extends 0
//         ? // <8
//           T6 extends 0
//           ? // <4
//             T7 extends 0
//             ? // <2
//               96
//             : 97
//           : T7 extends 0
//           ? 98
//           : 99
//         : T6 extends 0
//         ? T7 extends 0
//           ? 100
//           : 101
//         : T7 extends 0
//         ? 102
//         : 103
//       : T5 extends 0
//       ? T6 extends 0
//         ? T7 extends 0
//           ? 104
//           : 105
//         : T7 extends 0
//         ? 106
//         : 107
//       : T6 extends 0
//       ? T7 extends 0
//         ? 108
//         : 109
//       : T7 extends 0
//       ? 110
//       : 111
//     : T4 extends 0
//     ? // <16
//       T5 extends 0
//       ? // <8
//         T6 extends 0
//         ? // <4
//           T7 extends 0
//           ? // <2
//             112
//           : 113
//         : T7 extends 0
//         ? 114
//         : 115
//       : T6 extends 0
//       ? T7 extends 0
//         ? 116
//         : 117
//       : T7 extends 0
//       ? 118
//       : 119
//     : T5 extends 0
//     ? T6 extends 0
//       ? T7 extends 0
//         ? 120
//         : 121
//       : T7 extends 0
//       ? 122
//       : 123
//     : T6 extends 0
//     ? T7 extends 0
//       ? 124
//       : 125
//     : T7 extends 0
//     ? 126
//     : 127
//   : T1 extends 0
//   ? // <128
//     T2 extends 0
//     ? // <64
//       T3 extends 0
//       ? // <32
//         T4 extends 0
//         ? // <16
//           T5 extends 0
//           ? // <8
//             T6 extends 0
//             ? // <4
//               T7 extends 0
//               ? // <2
//                 128
//               : 129
//             : T7 extends 0
//             ? 130
//             : 131
//           : T6 extends 0
//           ? T7 extends 0
//             ? 132
//             : 133
//           : T7 extends 0
//           ? 134
//           : 135
//         : T5 extends 0
//         ? T6 extends 0
//           ? T7 extends 0
//             ? 136
//             : 137
//           : T7 extends 0
//           ? 138
//           : 139
//         : T6 extends 0
//         ? T7 extends 0
//           ? 140
//           : 141
//         : T7 extends 0
//         ? 142
//         : 143
//       : T4 extends 0
//       ? // <16
//         T5 extends 0
//         ? // <8
//           T6 extends 0
//           ? // <4
//             T7 extends 0
//             ? // <2
//               144
//             : 145
//           : T7 extends 0
//           ? 146
//           : 147
//         : T6 extends 0
//         ? T7 extends 0
//           ? 148
//           : 149
//         : T7 extends 0
//         ? 150
//         : 151
//       : T5 extends 0
//       ? T6 extends 0
//         ? T7 extends 0
//           ? 152
//           : 153
//         : T7 extends 0
//         ? 154
//         : 155
//       : T6 extends 0
//       ? T7 extends 0
//         ? 156
//         : 157
//       : T7 extends 0
//       ? 158
//       : 159
//     : T3 extends 0
//     ? // <32
//       T4 extends 0
//       ? // <16
//         T5 extends 0
//         ? // <8
//           T6 extends 0
//           ? // <4
//             T7 extends 0
//             ? // <2
//               160
//             : 161
//           : T7 extends 0
//           ? 162
//           : 163
//         : T6 extends 0
//         ? T7 extends 0
//           ? 164
//           : 165
//         : T7 extends 0
//         ? 166
//         : 167
//       : T5 extends 0
//       ? T6 extends 0
//         ? T7 extends 0
//           ? 168
//           : 169
//         : T7 extends 0
//         ? 170
//         : 171
//       : T6 extends 0
//       ? T7 extends 0
//         ? 172
//         : 173
//       : T7 extends 0
//       ? 174
//       : 175
//     : T4 extends 0
//     ? // <16
//       T5 extends 0
//       ? // <8
//         T6 extends 0
//         ? // <4
//           T7 extends 0
//           ? // <2
//             176
//           : 177
//         : T7 extends 0
//         ? 178
//         : 179
//       : T6 extends 0
//       ? T7 extends 0
//         ? 180
//         : 181
//       : T7 extends 0
//       ? 182
//       : 183
//     : T5 extends 0
//     ? T6 extends 0
//       ? T7 extends 0
//         ? 184
//         : 185
//       : T7 extends 0
//       ? 186
//       : 187
//     : T6 extends 0
//     ? T7 extends 0
//       ? 188
//       : 189
//     : T7 extends 0
//     ? 190
//     : 191
//   : T2 extends 0
//   ? // <64
//     T3 extends 0
//     ? // <32
//       T4 extends 0
//       ? // <16
//         T5 extends 0
//         ? // <8
//           T6 extends 0
//           ? // <4
//             T7 extends 0
//             ? // <2
//               192
//             : 193
//           : T7 extends 0
//           ? 194
//           : 195
//         : T6 extends 0
//         ? T7 extends 0
//           ? 196
//           : 197
//         : T7 extends 0
//         ? 198
//         : 199
//       : T5 extends 0
//       ? T6 extends 0
//         ? T7 extends 0
//           ? 200
//           : 201
//         : T7 extends 0
//         ? 202
//         : 203
//       : T6 extends 0
//       ? T7 extends 0
//         ? 204
//         : 205
//       : T7 extends 0
//       ? 206
//       : 207
//     : T4 extends 0
//     ? // <16
//       T5 extends 0
//       ? // <8
//         T6 extends 0
//         ? // <4
//           T7 extends 0
//           ? // <2
//             208
//           : 209
//         : T7 extends 0
//         ? 210
//         : 211
//       : T6 extends 0
//       ? T7 extends 0
//         ? 212
//         : 213
//       : T7 extends 0
//       ? 214
//       : 215
//     : T5 extends 0
//     ? T6 extends 0
//       ? T7 extends 0
//         ? 216
//         : 217
//       : T7 extends 0
//       ? 218
//       : 219
//     : T6 extends 0
//     ? T7 extends 0
//       ? 220
//       : 221
//     : T7 extends 0
//     ? 222
//     : 223
//   : T3 extends 0
//   ? // <32
//     T4 extends 0
//     ? // <16
//       T5 extends 0
//       ? // <8
//         T6 extends 0
//         ? // <4
//           T7 extends 0
//           ? // <2
//             224
//           : 225
//         : T7 extends 0
//         ? 226
//         : 227
//       : T6 extends 0
//       ? T7 extends 0
//         ? 228
//         : 229
//       : T7 extends 0
//       ? 230
//       : 231
//     : T5 extends 0
//     ? T6 extends 0
//       ? T7 extends 0
//         ? 232
//         : 233
//       : T7 extends 0
//       ? 234
//       : 235
//     : T6 extends 0
//     ? T7 extends 0
//       ? 236
//       : 237
//     : T7 extends 0
//     ? 238
//     : 239
//   : T4 extends 0
//   ? // <16
//     T5 extends 0
//     ? // <8
//       T6 extends 0
//       ? // <4
//         T7 extends 0
//         ? // <2
//           240
//         : 241
//       : T7 extends 0
//       ? 242
//       : 243
//     : T6 extends 0
//     ? T7 extends 0
//       ? 244
//       : 245
//     : T7 extends 0
//     ? 246
//     : 247
//   : T5 extends 0
//   ? T6 extends 0
//     ? T7 extends 0
//       ? 248
//       : 249
//     : T7 extends 0
//     ? 250
//     : 251
//   : T6 extends 0
//   ? T7 extends 0
//     ? 252
//     : 253
//   : T7 extends 0
//   ? 254
//   : 255;

type BinaryToNumber<T extends BinaryNumber> = [
  ...(T[0] extends 1 ? PowerOf2<0> : []),
  ...(T[1] extends 1 ? PowerOf2<1> : []),
  ...(T[2] extends 1 ? PowerOf2<2> : []),
  ...(T[3] extends 1 ? PowerOf2<3> : []),
  ...(T[4] extends 1 ? PowerOf2<4> : []),
  ...(T[5] extends 1 ? PowerOf2<5> : []),
  ...(T[6] extends 1 ? PowerOf2<6> : [])
]["length"];

type BinaryNumber<
  T1 extends Bit = Bit,
  T2 extends Bit = Bit,
  T3 extends Bit = Bit,
  T4 extends Bit = Bit,
  T5 extends Bit = Bit,
  T6 extends Bit = Bit,
  T7 extends Bit = Bit,
  T8 extends Bit = Bit,
  TOverflow extends boolean = false
> = TOverflow extends false
  ? [T1, T2, T3, T4, T5, T6, T7, T8]
  : [T1, T2, T3, T4, T5, T6, T7, T8] & { __overflows: TOverflow };

type MultiplyBits<T1 extends Bit, T2 extends Bit> = T1 extends 0
  ? 0
  : T2 extends 0
  ? 0
  : 1;
type PotentiallyOverflowedBit = { __number: Bit } & { __bitOverflow: boolean };
type AddBits<
  T1 extends Bit,
  T2 extends Bit | PotentiallyOverflowedBit
> = T1 extends 0
  ? {
      __number: T2 extends PotentiallyOverflowedBit ? T2["__number"] : T2;
      __bitOverflow: T2 extends PotentiallyOverflowedBit
        ? T2["__bitOverflow"]
        : false;
    }
  : T2 extends 0
  ? {
      __number: 1;
      __bitOverflow: T2 extends PotentiallyOverflowedBit
        ? T2["__bitOverflow"]
        : false;
    }
  : { __number: 0 } & { __bitOverflow: true };
// strictly greater
type DigitAGreaterThanB<
  DigitA extends Bit,
  DigitB extends Bit
> = DigitA extends 0 ? false : DigitB extends 1 ? false : true;
// strictly lesser
type DigitALesserThanB<
  DigitA extends Bit,
  DigitB extends Bit
> = DigitA extends 1 ? false : DigitB extends 0 ? false : true;
type LogicalNot<TBool extends boolean> = TBool extends true ? false : true;
// ignore overflows
type AGreaterThanBBinary<
  NumberA extends BinaryNumber,
  NumberB extends BinaryNumber,
  T1A extends Bit = NumberA[0],
  T2A extends Bit = NumberA[1],
  T3A extends Bit = NumberA[2],
  T4A extends Bit = NumberA[3],
  T5A extends Bit = NumberA[4],
  T6A extends Bit = NumberA[5],
  T7A extends Bit = NumberA[6],
  T8A extends Bit = NumberA[7],
  T1B extends Bit = NumberB[0],
  T2B extends Bit = NumberB[1],
  T3B extends Bit = NumberB[2],
  T4B extends Bit = NumberB[3],
  T5B extends Bit = NumberB[4],
  T6B extends Bit = NumberB[5],
  T7B extends Bit = NumberB[6],
  T8B extends Bit = NumberB[7]
  // go rightwards, for each digit if greater true, if lesser false, else equal & move to next digit
> = DigitALesserThanB<T1A, T1B> extends true
  ? false
  : DigitAGreaterThanB<T1A, T1B> extends true
  ? true
  : DigitALesserThanB<T2A, T2B> extends true
  ? false
  : DigitAGreaterThanB<T2A, T2B> extends true
  ? true
  : DigitALesserThanB<T3A, T3B> extends true
  ? false
  : DigitAGreaterThanB<T3A, T3B> extends true
  ? true
  : DigitALesserThanB<T4A, T4B> extends true
  ? false
  : DigitAGreaterThanB<T4A, T4B> extends true
  ? true
  : DigitALesserThanB<T5A, T5B> extends true
  ? false
  : DigitAGreaterThanB<T5A, T5B> extends true
  ? true
  : DigitALesserThanB<T6A, T6B> extends true
  ? false
  : DigitAGreaterThanB<T6A, T6B> extends true
  ? true
  : DigitAGreaterThanB<T7A, T7B> extends true
  ? true
  : DigitAGreaterThanB<T8A, T8B> extends true
  ? true
  : // all digits equal
    false;
type AGreaterEqualBBinary<
  NumberA extends BinaryNumber,
  NumberB extends BinaryNumber,
  TEqual extends boolean = NumberA extends NumberB ? true : false
> = TEqual extends true ? true : AGreaterThanBBinary<NumberA, NumberB>;
type AGreaterThanBNumber<
  NumberA extends Numbers8Bits,
  NumberB extends Numbers8Bits
> = AGreaterThanBBinary<NumberToBinary<NumberA>, NumberToBinary<NumberB>>;
type AGreaterEqualBNumber<
  NumberA extends Numbers8Bits,
  NumberB extends Numbers8Bits
> = AGreaterEqualBBinary<NumberToBinary<NumberA>, NumberToBinary<NumberB>>;
type GetOverflowFromAddDigit<
  DigitA extends Bit,
  DigitB extends Bit,
  PrevOverflowed extends boolean
> = PrevOverflowed extends true
  ? AddBits<DigitA, AddBits<DigitB, 1>>["__bitOverflow"]
  : AddBits<DigitA, DigitB>["__bitOverflow"];
type AddDigit<
  DigitA extends Bit,
  DigitB extends Bit,
  PrevOverflowed extends boolean
> = PrevOverflowed extends true
  ? AddBits<DigitA, AddBits<DigitB, 1>>["__number"]
  : AddBits<DigitA, DigitB>["__number"];
type AddBinaries<
  NumberA extends BinaryNumber,
  NumberB extends BinaryNumber,
  // TODO merge this getOverflow w add number
  Overflow6 extends boolean = GetOverflowFromAddDigit<
    NumberA[6],
    NumberB[6],
    AddBits<NumberA[7], NumberB[7]>["__bitOverflow"]
  >,
  Overflow5 extends boolean = GetOverflowFromAddDigit<
    NumberA[5],
    NumberB[5],
    Overflow6
  >,
  Overflow4 extends boolean = GetOverflowFromAddDigit<
    NumberA[4],
    NumberB[4],
    Overflow5
  >,
  Overflow3 extends boolean = GetOverflowFromAddDigit<
    NumberA[3],
    NumberB[3],
    Overflow4
  >,
  Overflow2 extends boolean = GetOverflowFromAddDigit<
    NumberA[2],
    NumberB[2],
    Overflow3
  >,
  Overflow1 extends boolean = GetOverflowFromAddDigit<
    NumberA[1],
    NumberB[1],
    Overflow2
  >,
  Overflow0 extends boolean = GetOverflowFromAddDigit<
    NumberA[0],
    NumberB[0],
    Overflow1
  >
> = BinaryNumber<
  AddDigit<NumberA[0], NumberB[0], Overflow0>,
  AddDigit<NumberA[1], NumberB[1], Overflow1>,
  AddDigit<NumberA[2], NumberB[2], Overflow2>,
  AddDigit<NumberA[3], NumberB[3], Overflow3>,
  AddDigit<NumberA[4], NumberB[4], Overflow4>,
  AddDigit<NumberA[5], NumberB[5], Overflow5>,
  AddDigit<NumberA[6], NumberB[6], Overflow6>,
  AddDigit<NumberA[7], NumberB[7], false>,
  GetOverflowFromAddDigit<NumberA[0], NumberB[0], Overflow0>
>;
type EvenBinary = BinaryNumber<Bit, Bit, Bit, Bit, Bit, Bit, Bit, 0>;
type OddBinary = BinaryNumber<Bit, Bit, Bit, Bit, Bit, Bit, Bit, 1>;
// TODO
// type EvenNumber = BinaryToNumber<EvenBinary>;
// type test131231 = BinaryToNumber<
//   ShiftNumberLeftByOneDigit<NumberToBinary<IntegersBetween<0, 31>>>
// >;

type MultiplyNumberByBit<
  TNumber extends BinaryNumber,
  TBit extends Bit
> = BinaryNumber<
  MultiplyBits<TNumber[0], TBit>,
  MultiplyBits<TNumber[1], TBit>,
  MultiplyBits<TNumber[2], TBit>,
  MultiplyBits<TNumber[3], TBit>,
  MultiplyBits<TNumber[4], TBit>,
  MultiplyBits<TNumber[5], TBit>
>;
type ShiftNumberLeftByOneDigit<
  TNum extends BinaryNumber<0, Bit, Bit, Bit, Bit, Bit, Bit, Bit>
> = BinaryNumber<
  TNum[1],
  TNum[2],
  TNum[3],
  TNum[4],
  TNum[5],
  TNum[6],
  TNum[7],
  0
>;
type ShiftNumberLeftByTwoDigits<
  TNum extends BinaryNumber<0, 0, Bit, Bit, Bit, Bit, Bit, Bit>
> = BinaryNumber<TNum[2], TNum[3], TNum[4], TNum[5], TNum[6], TNum[7], 0, 0>;
type ShiftNumberLeftByThreeDigits<
  TNum extends BinaryNumber<0, 0, 0, Bit, Bit, Bit, Bit, Bit>
> = BinaryNumber<TNum[3], TNum[4], TNum[5], TNum[6], TNum[7], 0, 0, 0>;
type MultiplyBinaries<
  NumberA extends Binaries4Bits,
  NumberB extends Binaries4Bits,
  FirstMultiplication extends Binaries8Bits = MultiplyNumberByBit<
    NumberA,
    NumberB[7]
  >,
  SecondMultiplication extends Binaries8Bits = MultiplyNumberByBit<
    ShiftNumberLeftByOneDigit<NumberA>,
    NumberB[6]
  >,
  ThirdMultiplication extends Binaries8Bits = MultiplyNumberByBit<
    ShiftNumberLeftByTwoDigits<NumberA>,
    NumberB[5]
  >,
  FourthMultiplication extends Binaries8Bits = MultiplyNumberByBit<
    ShiftNumberLeftByThreeDigits<NumberA>,
    NumberB[4]
  >
> = AddBinaries<
  AddBinaries<
    AddBinaries<FirstMultiplication, SecondMultiplication>,
    ThirdMultiplication
  >,
  FourthMultiplication
>;
export type Iterator = {
  0: [7, 1];
  1: [0, 2];
  2: [1, 3];
  3: [2, 4];
  4: [3, 5];
  5: [4, 6];
  6: [5, 7];
  7: [6, 0];
};
export type Index = keyof Iterator;
export type Prev<T extends keyof Iterator> = Iterator[T][0];
export type LtOp<
  A extends BinaryNumber,
  B extends BinaryNumber,
  I extends Index
> = A extends B
  ? false
  : [A[I], B[I]] extends [0, 0]
  ? LtOp<A, B, Prev<I>>
  : [A[I], B[I]] extends [1, 1]
  ? LtOp<A, B, Prev<I>>
  : [A[I], B[I]] extends [1, 0]
  ? false
  : [A[I], B[I]] extends [0, 1]
  ? true
  : false;

export type FullAdder<T extends [Bit, Bit, Bit]> = T extends [0, 0, 0]
  ? [0, 0]
  : T extends [1, 0, 0]
  ? [1, 0]
  : T extends [0, 1, 0]
  ? [1, 0]
  : T extends [1, 1, 0]
  ? [0, 1]
  : T extends [0, 0, 1]
  ? [1, 0]
  : T extends [1, 0, 1]
  ? [0, 1]
  : T extends [0, 1, 1]
  ? [0, 1]
  : T extends [1, 1, 1]
  ? [1, 1]
  : never;

export type AddOp<
  A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
  B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
  I extends Index,
  O extends Bit
> = FullAdder<[A[I], B[I], I extends 0 ? 0 : AddOp<A, B, Prev<I>, 1>]>[O];

export type Add<
  A extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit],
  B extends [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit]
> = [
  AddOp<A, B, 0, 0>,
  AddOp<A, B, 1, 0>,
  AddOp<A, B, 2, 0>,
  AddOp<A, B, 3, 0>,
  AddOp<A, B, 4, 0>,
  AddOp<A, B, 5, 0>,
  AddOp<A, B, 6, 0>,
  AddOp<A, B, 7, 0>
];
export type Lt<A extends BinaryNumber, B extends BinaryNumber> = LtOp<A, B, 7>;

export type MulOp<
  TReturn extends BinaryNumber,
  B extends BinaryNumber,
  C extends BinaryNumber,
  D extends BinaryNumber
> = Lt<C, D> extends true
  ? MulOp<Add<TReturn, B>, B, Add<C, NumberToBinary<1>>, D>
  : TReturn;

export type Mul<A extends BinaryNumber, B extends BinaryNumber> = MulOp<
  NumberToBinary<0>,
  A,
  NumberToBinary<0>,
  B
>;

type MulTest = BinaryToNumber<Mul<NumberToBinary<1>, NumberToBinary<2>>>;
type ArrV4Het<
  T1 extends number,
  T2 extends number,
  T3 extends number,
  T4 extends number
> = [T1, T2, T3, T4];
type ReverseArrV4<TArr extends ArrV4Het<number, number, number, number>> =
  ArrV4Het<TArr[3], TArr[2], TArr[1], TArr[0]>;
type ArrV6Het<
  T1 extends number,
  T2 extends number,
  T3 extends number,
  T4 extends number,
  T5 extends number,
  T6 extends number
> = [T1, T2, T3, T4, T5, T6];

type NumberSize = ArrayLength<BinaryNumber>;
type MaxNumberIndex = BinaryNumber["length"];
type PowerOf2<N extends IntegersBetween<0, MaxNumberIndex>> = BinaryNumber<
  N extends 7 ? 1 : 0,
  N extends 6 ? 1 : 0,
  N extends 5 ? 1 : 0,
  N extends 4 ? 1 : 0,
  N extends 3 ? 1 : 0,
  N extends 2 ? 1 : 0,
  N extends 1 ? 1 : 0,
  N extends 0 ? 1 : 0
>;

// type NumbersNBits<N extends IntegersBetween<0, 5>> = IntegersBetween<
//   0,
//   BinaryToNumber<PowerOf2<N>>
// >;
// type BinariesNBits<N extends IntegersBetween<0, 5>> = NumberToBinary<
//   NumbersNBits<N>
// >;
type Power2To0 = PowerOf2<0>;
type Power2To1 = PowerOf2<1>;
type Power2To2 = PowerOf2<2>;
type Power2To3 = PowerOf2<3>;
type Power2To4 = PowerOf2<4>;
type Power2To5 = PowerOf2<5>;

type BinariesBetween<
  TMin extends BinaryNumber,
  TMax extends BinaryNumber
> = IntegersBetween<BinaryToNumber<TMin>, BinaryToNumber<TMax>>;
// TODO change to range obj & remove max to emulate sub 1?
// type NumbersRangeNBits<N extends IntegersBetween<0,6>>=
// type Numbers1Bit = NumbersNBits<1>;
type Numbers1Bit = IntegersBetween<0, 1>;
type Binaries1Bit = NumberToBinary<
  BinariesBetween<[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1]>
>;
type Numbers2Bits = IntegersBetween<0, 3>;
type Binaries2Bit = NumberToBinary<Numbers2Bits>;
type Numbers3Bits = IntegersBetween<0, 7>;
type Binaries3Bit = NumberToBinary<Numbers3Bits>;
type Numbers4Bits = IntegersBetween<0, 15>;
type Binaries4Bits = NumberToBinary<Numbers4Bits>;
type Numbers5Bits = IntegersBetween<0, 31>;
type Numbers6Bits = IntegersBetween<0, 63>;
type Numbers7Bits = IntegersBetween<0, 127>;
type Numbers8Bits = IntegersBetween<0, 255>;
type Binaries8Bits = NumberToBinary<Numbers8Bits>;

type One = BinaryNumber<0, 0, 0, 0, 0, 0, 0, 1>;
type Two = AddBinaries<One, One>;
type Four = MultiplyBinaries<Two, Two>;
type Eight = MultiplyBinaries<Four, Two>;
type Sixteen = AddBinaries<Eight, Eight>;
type ThirtyTwo = AddBinaries<Sixteen, Sixteen>;
type SixtyFour = AddBinaries<ThirtyTwo, ThirtyTwo>;

type TwoGreaterThanOne = AGreaterThanBBinary<Two, One>;
type OneGreaterThanTwo = AGreaterThanBBinary<One, Two>;
type Test = AddBinaries<
  AddBinaries<
    AddBinaries<AddBinaries<AddBinaries<One, Two>, Four>, Eight>,
    Sixteen
  >,
  One
>;

// TODO subtract

// this treats these as sorta fake types since the underlying numbers arent actually arrays, but in another real way at the register level they sorta are lol...
function addNumbers<
  TA extends Numbers8Bits,
  TB extends Numbers8Bits,
  TBinA extends BinaryNumber = NumberToBinary<TA>,
  TBinB extends BinaryNumber = NumberToBinary<TB>
>(a: TA, b: TB): BinaryToNumber<AddBinaries<TBinA, TBinB>> {
  return ((a as any as number) + (b as any as number)) as any as BinaryToNumber<
    AddBinaries<TBinA, TBinB>
  >;
}
type MultiplyNumbers<
  NumberA extends Numbers4Bits,
  NumberB extends Numbers4Bits,
  BinA extends Binaries4Bits = NumberToBinary<NumberA>,
  BinB extends Binaries4Bits = NumberToBinary<NumberB>
> = BinaryToNumber<MultiplyBinaries<BinA, BinB>>;
type MultiplyTest = MultiplyNumbers<10, 10>;
function multiplyNumbers<
  TA extends Numbers4Bits,
  TB extends Numbers4Bits
  // TBinA extends Binaries3Bit = NumberToBinary<TA>,
  // TBinB extends Binaries3Bit = NumberToBinary<TB>
>(a: TA, b: TB): MultiplyNumbers<TA, TB> {
  return (a * b) as MultiplyNumbers<TA, TB>;
}

const itsAliiiive = multiplyNumbers(2, 2);

type AddNumbers<
  NumberA extends Numbers8Bits,
  NumberB extends Numbers8Bits
> = BinaryToNumber<
  AddBinaries<NumberToBinary<NumberA>, NumberToBinary<NumberB>>
>;

type SquareNumber<TNumber extends number> = MultiplyNumbers<TNumber, TNumber>;

type RangeTag<TMin extends number, TMax extends number> = {
  __min: TMin;
  __max: TMax;
};
type RangeSet<
  TMin extends number,
  TMax extends number,
  TNums extends number
> = AGreaterEqualBBinary<
  NumberToBinary<TMax>,
  NumberToBinary<TMin>
> extends true
  ? { __nums: TNums } & RangeTag<TMin, TMax>
  : never;

// type TagFromRange<TRange extends RangeTag<number, number>> = Omit<
//   TRange,
//   keyof number
// >;

// type NumbersFrom0ToNMinusOne<
//   N extends number,
//   TArray = TupleOfLength<N, []>
// > = TArray[keyof TArray];
type NumbersFrom0ToN<N extends number> = TupleOfLength<NPlusOne<N>>[number];
type TestNums = NumbersFrom0ToN<10>;
type NumberRangeSet<
  TMin extends Numbers8Bits,
  TMax extends Numbers8Bits
> = RangeSet<
  TMin,
  TMax,
  Exclude<NumbersFrom0ToN<TMax>, NumbersFrom0ToN<TMin>> | TMin
>;
type IfEquals<T, U, Y = unknown, N = never> = (<G>() => G extends T
  ? 1
  : 2) extends <G>() => G extends U ? 1 : 2
  ? Y
  : N;

// semantic declarations to trigger a compiler error when a value is _not_ an exact type. */

// type PotentiallyNever = never
// type IsNever<TPot extends PotentiallyNever>=TPot extends never ? true : false
// type NotNever<TPot extends PotentiallyNever>=LogicalNot<IsNever<TPot>>
// declare const assertTrue: <T extends PotentiallyNever>(
//   draft: T & NotNever<T>,

// ) =>NotNever<T>;
declare const assertExactType: <T, U>(
  draft: T & IfEquals<T, U>,
  expected: U & IfEquals<T, U>
) => IfEquals<T, U>;
// declare const assertTrue:<T extends true>(bool:T)=>void
// declare const assertNonNever:<T>(val:T&IfEquals<T,never,unknown,never>)=>IfEquals<T,never,unknown>

// export declare const assertNotExactType: <T, U>(
//   draft: T & IfEquals<T, U, never, unknown>,
//   expected: U & IfEquals<T, U, never, unknown>
// ) => IfEquals<T, U, never, unknown>;
// type InvalidRange = NumberRangeSet<11, 10>;
// export declare let a: false;
// export declare let b: never;

// assertTrue(a)
// assertNonNever(b)

// Add Endpoints
type AddTwoRanges<
  TRangeSetA extends NumberRangeSet<number, number>,
  TRangeSetB extends NumberRangeSet<number, number>
> = NumberRangeSet<
  AddNumbers<TRangeSetA["__min"], TRangeSetB["__min"]>,
  AddNumbers<TRangeSetA["__max"], TRangeSetB["__max"]>
>;
type MultiplyTwoRanges<
  TRangeSetA extends NumberRangeSet<Numbers8Bits, Numbers8Bits>,
  TRangeSetB extends NumberRangeSet<Numbers8Bits, Numbers8Bits>
> = NumberRangeSet<
  MultiplyNumbers<TRangeSetA["__min"], TRangeSetB["__min"]>,
  MultiplyNumbers<TRangeSetA["__max"], TRangeSetB["__max"]>
>;
type Test3412312 = MultiplyTwoRanges<
  NumberRangeSet<2, 5>,
  NumberRangeSet<2, 4>
>;
type DoRangesOverlap<
  TRangeSetA extends RangeSet<Numbers8Bits, Numbers8Bits, Numbers8Bits>,
  TRangeSetB extends RangeSet<Numbers8Bits, Numbers8Bits, Numbers8Bits>
> = TRangeSetA["__nums"] & TRangeSetB["__nums"] extends never ? false : true;

type NumberIsInRange<
  NumberMin extends BinaryNumber,
  NumberCheck extends BinaryNumber,
  NumberMax extends BinaryNumber
> = AGreaterThanBBinary<NumberCheck, NumberMin> extends false
  ? false
  : AGreaterThanBBinary<NumberMax, NumberCheck> extends false
  ? false
  : true;

type NumInRangeTest = NumberIsInRange<One, ThirtyTwo, Two>;
type IntegersBetween<
  TMin extends Numbers8Bits,
  TMax extends Numbers8Bits
> = NumberRangeSet<TMin, TMax>["__nums"];

// !sanity check - [0,1]*[0,1]=[0,1]
// something simple that anyone can reason through themselves. If this is wrong then smth is deeply messed up
// any number between 0 & 1 * any other number between 0 & 1 should always be between 0 & 1
declare const numRange0To1: NumberRangeSet<0, 1>;
declare const shouldBeNumRange0To1: MultiplyTwoRanges<
  typeof numRange0To1,
  typeof numRange0To1
>;
assertExactType(numRange0To1, shouldBeNumRange0To1);

// any number between 0 & 2 * any other number between 0 & 2 should always be between 0 & 4
declare const numRange0To2: NumberRangeSet<0, 2>;
declare const numRange0To4: NumberRangeSet<0, 4>;
declare const shouldBeNumRange0To4: MultiplyTwoRanges<
  typeof numRange0To2,
  typeof numRange0To2
>;
assertExactType(numRange0To4, shouldBeNumRange0To4);

declare const integersBetween0To5: IntegersBetween<0, 5>;
assertExactType(integersBetween0To5, 0 | 1 | 2 | 3 | 4 | 5);

type ArrV0 = [];
type ArrV1<T = number> = [T];
type ArrV2<T = number> = [T, T];
type ArrV3<T = number> = [T, T, T];
type ArrV4<T = number> = [T, T, T, T];
type ArrV5<T = number> = [T, T, T, T, T];
type ArrV6<T = number> = [T, T, T, T, T, T];
type ArrV7<T = number> = [T, T, T, T, T, T, T];
type ArrV8<T = number> = [T, T, T, T, T, T, T, T];
type ArrV9<T = number> = [T, T, T, T, T, T, T, T, T];
type ArrV10<T = number> = [T, T, T, T, T, T, T, T, T, T];

type Arrays = [
  ArrV0,
  ArrV1,
  ArrV2,
  ArrV3,
  ArrV4,
  ArrV5,
  ArrV6,
  ArrV7,
  ArrV8,
  ArrV9,
  ArrV10
];

type ArrayLength<TArray extends Arrays[number]> = TArray extends ArrV0
  ? 0
  : TArray extends ArrV1
  ? 1
  : TArray extends ArrV2
  ? 2
  : TArray extends ArrV3
  ? 3
  : TArray extends ArrV4
  ? 4
  : TArray extends ArrV5
  ? 5
  : TArray extends ArrV6
  ? 6
  : TArray extends ArrV7
  ? 7
  : TArray extends ArrV8
  ? 8
  : TArray extends ArrV9
  ? 9
  : 10;

type AvailableArrVs = ArrayLength<Arrays>;
type ArrV<TDim extends AvailableArrVs> = Arrays[TDim];

type Modulo<TModulus extends Numbers8Bits> = IntegersBetween<0, TModulus>;
interface Demo<
  TDimensions extends IntegersBetween<TMin, TMax>,
  // TArray extends Arrays[IntegersBetween<TMin,TMax>] = ArrV<TDimensions>,
  // TArrayLength extends IntegersBetween<TMin,TMax>=ArrayLength<TArray>,
  TMin extends AvailableArrVs = 1,
  TMax extends AvailableArrVs = 5
> {
  demoMethod(
    // take an array of a given dimension, return an array of the next dimension - demo
    demoParam: ArrV<TDimensions>
  ): TMax extends 10 ? never : ArrV<AddNumbers<TDimensions, 1>>;
}

type Num1to10 = IntegersBetween<1, 5>;
// TODO why is this 64 - smth overflowing?
type Num2to11 = AddNumbers<Num1to10, 1>;
type Line<M extends number, B extends number, X extends number> = AddNumbers<
  MultiplyNumbers<M, X>,
  B
>;

type Line1Plus1<X extends Numbers8Bits> = Line<2, 1, X>;

type Test12312312 = Line1Plus1<3>;

// // y=a*x**2+b*x+c
// type Parabola<
//   A extends 1,
//   B extends 1,
//   C extends 1,
//   X extends 1
// > = AddNumbers<
//   AddNumbers<MultiplyNumbers<1, SquareNumber<1>>, MultiplyNumbers<B, X>>,
//     C
// >;
// type Par111<X extends 0 | 1> = Parabola<1, 1, 1, 1>;
// type ConstrainedPair<
// TNumberA extends number,
// TNumberB extends number,
// TConstraint extends number>=[TNumberA,TNumberB]&TConstraint
type FixedProductPair<
  TNumberA extends Numbers8Bits,
  TNumberB extends Numbers8Bits,
  TProduct extends Numbers8Bits,
  TFixed = IfEquals<MultiplyNumbers<TNumberA, TNumberB>, TProduct>
> = Readonly<[TNumberA, TNumberB]> & TFixed;
type FixedSumPair<
  TNumberA extends Numbers8Bits,
  TNumberB extends Numbers8Bits,
  TSum extends Numbers8Bits
  // These Readonlys make  this useable in actual code
> = Readonly<[TNumberA, TNumberB]> &
  IfEquals<AddNumbers<TNumberA, TNumberB>, TSum>;
type RectangleArea1<
  TNumberA extends Numbers8Bits & TFixed,
  TNumberB extends Numbers8Bits & TFixed,
  TFixed = IfEquals<MultiplyNumbers<TNumberA, TNumberB>, 1>

  // why error
> = FixedProductPair<TNumberA, TNumberB, 1>;
type ValidRectangle = RectangleArea1<1, 1>;
type InvalidRectangle = RectangleArea1<1, 2>;
type Test1234 = FixedSumPair<2, 0, 2>;

declare function takesTwoNumbersThatAddTo10<
  TNumA extends Numbers8Bits,
  TNumB extends Numbers8Bits
>(nums: FixedSumPair<TNumA, TNumB, 10>): number;
// valid
takesTwoNumbersThatAddTo10([0, 10]);
// invalid
takesTwoNumbersThatAddTo10([0, 11]);

// not equal
type OrderedPairGreatestToLeast<
  TNumberA extends Numbers8Bits,
  TNumberB extends Numbers8Bits
> = [TNumberA, TNumberB] &
  IfEquals<AGreaterThanBNumber<TNumberA, TNumberB>, true>;

declare function takesPairOrderedBigSmall<
  TNumA extends Numbers8Bits,
  TNumB extends Numbers8Bits
>(nums: OrderedPairGreatestToLeast<TNumA, TNumB>): number;
// valid
takesPairOrderedBigSmall([10, 1]);
// invalid
takesPairOrderedBigSmall([1, 10]);

type OrderedArrVec4Decreasing<
  TNumA extends Numbers8Bits,
  TNumB extends Numbers8Bits,
  TNumC extends Numbers8Bits,
  TNumD extends Numbers8Bits,
  TArray = ArrV4Het<TNumA, TNumB, TNumC, TNumD>,
  ABiggerB = AGreaterThanBNumber<TNumA, TNumB>,
  BBiggerC = AGreaterThanBNumber<TNumB, TNumC>,
  CBiggerD = AGreaterThanBNumber<TNumC, TNumD>
> = TArray &
  IfEquals<ABiggerB, true> &
  IfEquals<BBiggerC, true> &
  IfEquals<CBiggerD, true>;
type OrderedArrVec4Increasing<
  TNumA extends Numbers8Bits,
  TNumB extends Numbers8Bits,
  TNumC extends Numbers8Bits,
  TNumD extends Numbers8Bits
> = ReverseArrV4<OrderedArrVec4Decreasing<TNumA, TNumB, TNumC, TNumD>>;
type ValidOrderedArrV4 = OrderedArrVec4Decreasing<4, 3, 2, 1>;
type InvalidOrderedArrV4 = OrderedArrVec4Decreasing<1, 2, 3, 4>;

declare function takesArrV4OrderedBigSmall<
  TNumA extends Numbers8Bits,
  TNumB extends Numbers8Bits,
  TNumC extends Numbers8Bits,
  TNumD extends Numbers8Bits
>(arr: OrderedArrVec4Decreasing<TNumA, TNumB, TNumC, TNumD>): number;
// valid
takesArrV4OrderedBigSmall([4, 3, 2, 1]);
takesArrV4OrderedBigSmall([1, 2, 3, 4]);
// invalid
type Max<
  TNumberA extends Numbers8Bits,
  TNumberB extends Numbers8Bits
> = AGreaterThanBNumber<TNumberA, TNumberB> extends true ? TNumberA : TNumberB;
type Min<
  TNumberA extends Numbers8Bits,
  TNumberB extends Numbers8Bits
> = AGreaterThanBNumber<TNumberA, TNumberB> extends true ? TNumberB : TNumberA;
