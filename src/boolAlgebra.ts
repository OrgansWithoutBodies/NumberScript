import {
  Add as AddBinaries,
  Byte as NumberToBinary,
  Gt as AGreaterThanBBinary,
  Gte as AGreaterEqualBBinary,
  Lt as ALessThanBBinary,
  Mul as MultiplyBinaries,
  Num as BinaryToNumber,
  Sub,
} from "./ts8bit";

// TODO be able to control 'word size'
type Bit = 1 | 0;
type AssertExtends<Expected, Actual extends Expected = Expected> = Actual;
type ZeroOut<Ints extends Bit[]> = {
  [Index in keyof Ints]: 0;
};

type ReplaceBits<Bits extends Bit[], Replacements extends Bit[]> = {
  [Index in keyof Bits]: Index extends keyof Replacements
    ? Replacements[Index]
    : Bits[Index];
};
type TupleOfLength<
  Len extends number,
  Arr extends any[] = [],
  TEntry = Arr["length"]
> = Arr["length"] extends Len ? Arr : TupleOfLength<Len, [...Arr, TEntry]>;

type NPlusOne<N extends number> = [...TupleOfLength<N>, 0]["length"];
/**
 * TODOs
 * codegen
 * consider decimals
 * cleaner assertion pattern
 *  assert true
 * sqrt
 */

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

type LogicalNot<TBool extends boolean> = TBool extends true ? false : true;
// ignore overflows

type AGreaterThanBNumber<
  NumberA extends Numbers8Bits,
  NumberB extends Numbers8Bits
> = AGreaterThanBBinary<NumberToBinary<NumberA>, NumberToBinary<NumberB>>;
type AGreaterEqualBNumber<
  NumberA extends Numbers8Bits,
  NumberB extends Numbers8Bits
> = AGreaterEqualBBinary<NumberToBinary<NumberA>, NumberToBinary<NumberB>>;
type EvenBinary = BinaryNumber<Bit, Bit, Bit, Bit, Bit, Bit, Bit, 0>;
type OddBinary = BinaryNumber<Bit, Bit, Bit, Bit, Bit, Bit, Bit, 1>;
// TODO why 0
// type EvenNumber = BinaryToNumber<EvenBinary>;
// type test131231 = BinaryToNumber<
//   ShiftNumberLeftByOneDigit<NumberToBinary<IntegersBetween<0, 31>>>
// >;
type ReverseList<
  TArray extends Exclude<ArrVHetNInclusive<8>, []>,
  N extends IntegersBetween<1, 8> = TArray["length"],
  T1 extends number | null | undefined = TArray[0],
  T2 extends number | null | undefined = TArray[1],
  T3 extends number | null | undefined = TArray[2],
  T4 extends number | null | undefined = TArray[3],
  T5 extends number | null | undefined = TArray[4],
  T6 extends number | null | undefined = TArray[5],
  T7 extends number | null | undefined = TArray[6],
  T8 extends number | null | undefined = TArray[7]
> = N extends 8
  ? [T8, T7, T6, T5, T4, T3, T2, T1]
  : N extends 7
  ? [T6, T5, T4, T3, T2, T1]
  : N extends 6
  ? [T6, T5, T4, T3, T2, T1]
  : N extends 5
  ? [T5, T4, T3, T2, T1]
  : N extends 4
  ? [T4, T3, T2, T1]
  : N extends 3
  ? [T3, T2, T1]
  : N extends 2
  ? [T2, T1]
  : N extends 1
  ? [T1]
  : {};

type ReverseListOp<
  ListLen extends IntegersBetween<0, 8>,
  List extends ArrVHetN<
    ListLen,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  >,
  IndexCounter extends BinariesBetween<0, 8> = NumberToBinary<0>,
  BuiltUpList extends ArrVHetN<
    ListLen,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  > = List,
  ListLenBinary extends BinariesBetween<0, 8> = NumberToBinary<ListLen>,
  AtEnd extends boolean = LogicalNot<
    ALessThanBBinary<IndexCounter, ListLenBinary>
  >,
  EndIndexBinary extends BinaryNumber = Sub<ListLenBinary, IndexCounter>,
  EndIndex extends number = BinaryToNumber<EndIndexBinary>,
  NextIndexBinary extends BinariesBetween<1, 8> = AddBinaries<
    IndexCounter,
    NumberToBinary<1>
  >,
  NextIndex extends NumberBetween<1, 8> = BinaryToNumber<NextIndexBinary>,
  ChangedArrayAtThisIteration = ChangeValueAtIndexN<
    NextIndex,
    List[EndIndex],
    BuiltUpList[0] extends undefined ? null : BuiltUpList[0],
    BuiltUpList[1] extends undefined ? null : BuiltUpList[1],
    BuiltUpList[2] extends undefined ? null : BuiltUpList[2],
    BuiltUpList[3] extends undefined ? null : BuiltUpList[3],
    BuiltUpList[4] extends undefined ? null : BuiltUpList[4],
    BuiltUpList[5] extends undefined ? null : BuiltUpList[5],
    BuiltUpList[6] extends undefined ? null : BuiltUpList[6],
    BuiltUpList[7] extends undefined ? null : BuiltUpList[7]
  >
> = AtEnd extends false
  ? ReverseListOp<ListLen, List, NextIndexBinary, ChangedArrayAtThisIteration>
  : BuiltUpList;

type test = Sub<NumberToBinary<8>, IndexCounter>;
type ReverseArrV4<TArr extends ArrVHetN<4, number, number, number, number>> =
  ReverseList<TArr>;
type ArrVHet<
  T1 extends number | null = null,
  T2 extends number | null = null,
  T3 extends number | null = null,
  T4 extends number | null = null,
  T5 extends number | null = null,
  T6 extends number | null = null,
  T7 extends number | null = null,
  T8 extends number | null = null
> = T8 extends null
  ? T7 extends null
    ? T6 extends null
      ? T5 extends null
        ? T4 extends null
          ? T3 extends null
            ? T2 extends null
              ? T1 extends null
                ? []
                : [T1]
              : [T1, T2]
            : [T1, T2, T3]
          : [T1, T2, T3, T4]
        : [T1, T2, T3, T4, T5]
      : [T1, T2, T3, T4, T5, T6]
    : [T1, T2, T3, T4, T5, T6, T7]
  : [T1, T2, T3, T4, T5, T6, T7, T8];

type BuiltUpList = ArrVHetNInclusive<4>;

type ArrVHetN<
  N extends IntegersBetween<0, 8>,
  T1 extends number | null = null,
  T2 extends number | null = null,
  T3 extends number | null = null,
  T4 extends number | null = null,
  T5 extends number | null = null,
  T6 extends number | null = null,
  T7 extends number | null = null,
  T8 extends number | null = null
> = [
  ArrVHet,
  ArrVHet<T1>,
  ArrVHet<T1, T2>,
  ArrVHet<T1, T2, T3>,
  ArrVHet<T1, T2, T3, T4>,
  ArrVHet<T1, T2, T3, T4, T5>,
  ArrVHet<T1, T2, T3, T4, T5, T6>,
  ArrVHet<T1, T2, T3, T4, T5, T6, T7>,
  ArrVHet<T1, T2, T3, T4, T5, T6, T7, T8>
][N];
type ChangeValueAtIndexN<
  ReplaceIndex extends IntegersBetween<1, 8>,
  ReplaceVal extends number,
  T1 extends number | null = null | number,
  T2 extends number | null = null | number,
  T3 extends number | null = null | number,
  T4 extends number | null = null | number,
  T5 extends number | null = null | number,
  T6 extends number | null = null | number,
  T7 extends number | null = null | number,
  T8 extends number | null = null | number
> = ArrVHet<
  ReplaceIndex extends 1 ? ReplaceVal : T1,
  ReplaceIndex extends 2 ? ReplaceVal : T2,
  ReplaceIndex extends 3 ? ReplaceVal : T3,
  ReplaceIndex extends 4 ? ReplaceVal : T4,
  ReplaceIndex extends 5 ? ReplaceVal : T5,
  ReplaceIndex extends 6 ? ReplaceVal : T6,
  ReplaceIndex extends 7 ? ReplaceVal : T7,
  ReplaceIndex extends 8 ? ReplaceVal : T8
>;
type TestChange = ChangeValueAtIndexN<1, 6, 1, 2, 3, 4>;
type ArrVHetNInclusive<
  NNN extends IntegersBetween<0, 8>,
  T1 extends number | null = null | number,
  T2 extends number | null = null | number,
  T3 extends number | null = null | number,
  T4 extends number | null = null | number,
  T5 extends number | null = null | number,
  T6 extends number | null = null | number,
  T7 extends number | null = null | number,
  T8 extends number | null = null | number
> = NNN extends 0
  ? ArrVHetN<0, T1, T2, T3, T4, T5, T6, T7, T8>
  : NNN extends 1
  ?
      | ArrVHetN<0, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<1, T1, T2, T3, T4, T5, T6, T7, T8>
  : NNN extends 2
  ?
      | ArrVHetN<0, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<1, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<2, T1, T2, T3, T4, T5, T6, T7, T8>
  : NNN extends 3
  ?
      | ArrVHetN<0, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<1, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<2, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<3, T1, T2, T3, T4, T5, T6, T7, T8>
  : NNN extends 4
  ?
      | ArrVHetN<0, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<1, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<2, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<3, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<4, T1, T2, T3, T4, T5, T6, T7, T8>
  : NNN extends 5
  ?
      | ArrVHetN<0, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<1, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<2, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<3, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<4, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<5, T1, T2, T3, T4, T5, T6, T7, T8>
  : NNN extends 6
  ?
      | ArrVHetN<0, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<1, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<2, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<3, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<4, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<5, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<6, T1, T2, T3, T4, T5, T6, T7, T8>
  : NNN extends 7
  ?
      | ArrVHetN<0, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<1, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<2, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<3, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<4, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<5, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<6, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<7, T1, T2, T3, T4, T5, T6, T7, T8>
  : NNN extends 8
  ?
      | ArrVHetN<0, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<1, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<2, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<3, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<4, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<5, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<6, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<7, T1, T2, T3, T4, T5, T6, T7, T8>
      | ArrVHetN<8, T1, T2, T3, T4, T5, T6, T7, T8>
  : never;
type MaxNumberIndex = BinaryNumber["length"];
type PowerOf2<
  N extends IntegersBetween<0, SubtractNumbers<MaxNumberIndex, 1>>
> = BinaryNumber<
  N extends 7 ? 1 : 0,
  N extends 6 ? 1 : 0,
  N extends 5 ? 1 : 0,
  N extends 4 ? 1 : 0,
  N extends 3 ? 1 : 0,
  N extends 2 ? 1 : 0,
  N extends 1 ? 1 : 0,
  N extends 0 ? 1 : 0
>;

type SubtractNumbers<
  A extends number,
  B extends number,
  ABin extends BinaryNumber = NumberToBinary<A>,
  BBin extends BinaryNumber = NumberToBinary<B>
> = BinaryToNumber<Sub<ABin, BBin>>;
type BinariesNBits<N extends IntegersBetween<1, 8>> = PowerOf2<
  SubtractNumbers<N, 1>
>;

type Power2To0 = PowerOf2<0>;
type Power2To1 = PowerOf2<1>;
type Power2To2 = PowerOf2<2>;
type Power2To3 = PowerOf2<3>;
type Power2To4 = PowerOf2<4>;
type Power2To5 = PowerOf2<5>;

type BinariesBetween<
  TMin extends Numbers8Bits,
  TMax extends Numbers8Bits
> = NumberToBinary<IntegersBetween<TMin, TMax>>;
// TODO change to range obj & remove max to emulate sub 1?
// type NumbersRangeNBits<N extends IntegersBetween<0,6>>=
// type Numbers1Bit = NumbersNBits<1>;
type Numbers1Bit = IntegersBetween<0, 1>;

type Numbers2Bits = IntegersBetween<0, 3>;
type Binaries2Bit = BinariesNBits<2>;
type Binaries4Bits = BinariesNBits<4>;
type Numbers3Bits = IntegersBetween<0, 7>;
type Binaries3Bit = NumberToBinary<Numbers3Bits>;
type Numbers4Bits = IntegersBetween<0, 15>;
type Numbers5Bits = IntegersBetween<0, 31>;
type Numbers6Bits = IntegersBetween<0, 63>;
type Numbers7Bits = IntegersBetween<0, 127>;
type Numbers8Bits = IntegersBetween<0, 255>;
type Binaries8Bits = NumberToBinary<Numbers8Bits>;

type MultiplyNumbers<
  NumberA extends Numbers4Bits,
  NumberB extends Numbers4Bits,
  BinA extends Binaries4Bits = NumberToBinary<NumberA>,
  BinB extends Binaries4Bits = NumberToBinary<NumberB>
> = BinaryToNumber<MultiplyBinaries<BinA, BinB>>;
function multiplyNumbers<
  TA extends Numbers4Bits,
  TB extends Numbers4Bits
  // TBinA extends Binaries3Bit = NumberToBinary<TA>,
  // TBinB extends Binaries3Bit = NumberToBinary<TB>
>(a: TA, b: TB): MultiplyNumbers<TA, TB> {
  return (a * b) as MultiplyNumbers<TA, TB>;
}

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
type NumberRangeSet<
  TMin extends Numbers8Bits,
  TMax extends Numbers8Bits
> = RangeSet<
  TMin,
  TMax,
  Exclude<NumbersFrom0ToN<TMax>, NumbersFrom0ToN<TMin>> | TMin
>;
// Add Endpoints
type AddTwoRanges<
  TRangeSetA extends NumberRangeSet<Numbers8Bits, Numbers8Bits>,
  TRangeSetB extends NumberRangeSet<Numbers8Bits, Numbers8Bits>
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

type IntegersBetween<
  TMin extends Numbers8Bits,
  TMax extends Numbers8Bits
> = NumberRangeSet<TMin, TMax>["__nums"];

type ArrV<L extends number, E = number> = TupleOfLength<L, [], E>;

type Modulo<TModulus extends Numbers8Bits> = IntegersBetween<0, TModulus>;
interface Demo<
  TDimensions extends IntegersBetween<TMin, TMax>,
  // TArray extends Arrays[IntegersBetween<TMin,TMax>] = ArrV<TDimensions>,
  // TArrayLength extends IntegersBetween<TMin,TMax>=ArrayLength<TArray>,
  TMin extends Numbers8Bits = 1,
  TMax extends Numbers8Bits = 5,
  TNextDimension extends Numbers8Bits = NPlusOne<TDimensions>
> {
  demoMethod(
    // take an array of a given dimension, return an array of the next dimension - demo
    demoParam: ArrV<TDimensions>
  ): TMax extends 10 ? never : ArrV<TNextDimension>;
}

type Num1to10 = IntegersBetween<1, 5>;
// TODO why is this 64 - smth overflowing?
type Num2to11 = AddNumbers<Num1to10, 1>;
type Line<M extends number, B extends number, X extends number> = AddNumbers<
  MultiplyNumbers<M, X>,
  B
>;

type Line1Plus1<X extends Numbers8Bits> = Line<2, 1, X>;

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
type TestList = ReverseList<[1, 2, 3, 4, 5]>;
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
type NumberStringFromDecimal<
  Integer extends IntegersBetween<0, 8>,
  Remainder extends IntegersBetween<0, 9>,
  SignString extends "-" | ""
> = Remainder extends 0
  ? `${SignString}${Integer}`
  : `${SignString}${Integer}.${Remainder}`;
// type DecimalNumberString<
//   Integer extends IntegersBetween<0, 8>,
//   Remainder extends number,
//   SignString extends "-" | ""
// > = `${SignString}${Integer}.${Remainder}`;
type DecimalSafeNumbers = 1.3 | 1.1 | 1.2;
type Decimal<
  TInt extends IntegersBetween<0, 8>,
  TRemainder extends IntegersBetween<0, 9>,
  TSign extends "" | "-"
> = {
  __int: TInt;
  __remainder: TRemainder;
  __sign: TSign extends "" ? "+" : "-";
};

type DecimalFromNumberString<
  TNumStr extends NumberStringFromDecimal<TInt, TRemainder, TSign>,
  TInt extends IntegersBetween<0, 8> = TNumStr extends NumberStringFromDecimal<
    infer InferredTInt,
    TRemainder,
    TSign
  >
    ? InferredTInt
    : 0,
  TRemainder extends IntegersBetween<
    0,
    9
  > = TNumStr extends NumberStringFromDecimal<
    TInt,
    infer InferredTRemainder,
    TSign
  >
    ? InferredTRemainder
    : 0,
  TSign extends "-" | "" = TNumStr extends NumberStringFromDecimal<
    TInt,
    TRemainder,
    infer InferredSign
  >
    ? InferredSign
    : ""
> = Decimal<TInt, TRemainder, TSign>; // type NumberFromNumberString
type NumberStringFromNumber<
  TNum extends DecimalSafeNumbers
  // TNumStr
> = `${TNum}`;
type DecimalFromNumber<
  TNum extends DecimalSafeNumbers,
  TNumStr extends DecimalFromNumberString<TNum> = NumberStringFromNumber<TNum>
> = DecimalFromNumberString<TNumStr>;
type RemainderFromNumber<TDecimal extends DecimalSafeNumbers> =
  DecimalFromNumber<TDecimal>["__remainder"];
type IntegerFromNumber<TDecimal extends DecimalSafeNumbers> =
  DecimalFromNumber<TDecimal>["__int"];
type SignFromNumber<TDecimal extends DecimalSafeNumbers> =
  DecimalFromNumber<TDecimal>["__sign"];
type Test = DecimalFromNumber<-1.3>;

// type
