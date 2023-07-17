// TODO be able to control 'word size'
/**
 * TODOs
 * codegen
 * consider decimals
 * cleaner assertion pattern
 *  assert true
 * sqrt
 */
// type IgnoreHighestDigit<TByte extends BinaryNumber> = [
//   TByte[1],
//   TByte[2],
//   TByte[3],
//   TByte[4],
//   TByte[5],
//   TByte[6],
//   TByte[7]
// ];
// type LogicalNot<TBool extends boolean> = TBool extends true ? false : true;
// ignore overflows

// type EvenNumbers =
//   [...IgnoreHighestDigit<NumberToBinary<IntegersBetween<0, APowerOfB<2, 7>>>>, 0]

// type EvenBinary = BinaryNumber<Bit, Bit, Bit, Bit, Bit, Bit, Bit, 0>;
// type OddBinary = BinaryNumber<Bit, Bit, Bit, Bit, Bit, Bit, Bit, 1>;
// TODO why 0
// type EvenNumber = BinaryToNumber<EvenBinary>;
// type test131231 = BinaryToNumber<
//   ShiftNumberLeftByOneDigit<NumberToBinary<IntegersBetween<0, 31>>>
// >;
// type ReverseList<
//   TArray extends Exclude<ArrVHetNInclusive<8>, []>,
//   N extends IntegersBetween<1, 8> = TArray["length"],
//   T1 extends number | null | undefined = TArray[0],
//   T2 extends number | null | undefined = TArray[1],
//   T3 extends number | null | undefined = TArray[2],
//   T4 extends number | null | undefined = TArray[3],
//   T5 extends number | null | undefined = TArray[4],
//   T6 extends number | null | undefined = TArray[5],
//   T7 extends number | null | undefined = TArray[6],
//   T8 extends number | null | undefined = TArray[7]
// > = N extends 8
//   ? [T8, T7, T6, T5, T4, T3, T2, T1]
//   : N extends 7
//   ? [T6, T5, T4, T3, T2, T1]
//   : N extends 6
//   ? [T6, T5, T4, T3, T2, T1]
//   : N extends 5
//   ? [T5, T4, T3, T2, T1]
//   : N extends 4
//   ? [T4, T3, T2, T1]
//   : N extends 3
//   ? [T3, T2, T1]
//   : N extends 2
//   ? [T2, T1]
//   : N extends 1
//   ? [T1]
//   : {};

// type ReverseListOp<
//   ListLen extends IntegersBetween<0, 8>,
//   List extends ArrVHetN<
//     ListLen,
//     number,
//     number,
//     number,
//     number,
//     number,
//     number,
//     number,
//     number
//   >,
//   IndexCounter extends BinariesBetween<0, 8> = NumberToBinary<0>,
//   BuiltUpList extends ArrVHetN<
//     ListLen,
//     number,
//     number,
//     number,
//     number,
//     number,
//     number,
//     number,
//     number
//   > = List,
//   ListLenBinary extends BinariesBetween<0, 8> = NumberToBinary<ListLen>,
//   AtEnd extends boolean = LogicalNot<
//     ALessThanBBinary<IndexCounter, ListLenBinary>
//   >,
//   EndIndexBinary extends BinaryNumber = Sub<ListLenBinary, IndexCounter>,
//   EndIndex extends number = BinaryToNumber<EndIndexBinary>,
//   NextIndexBinary extends BinariesBetween<1, 8> = AddBinaries<
//     IndexCounter,
//     NumberToBinary<1>
//   >,
//   NextIndex extends IntegersBetween<1, 8> = BinaryToNumber<NextIndexBinary>,
//   ChangedArrayAtThisIteration = ChangeValueAtIndexN<
//     NextIndex,
//     List[EndIndex],
//     BuiltUpList[0] extends undefined ? null : BuiltUpList[0],
//     BuiltUpList[1] extends undefined ? null : BuiltUpList[1],
//     BuiltUpList[2] extends undefined ? null : BuiltUpList[2],
//     BuiltUpList[3] extends undefined ? null : BuiltUpList[3],
//     BuiltUpList[4] extends undefined ? null : BuiltUpList[4],
//     BuiltUpList[5] extends undefined ? null : BuiltUpList[5],
//     BuiltUpList[6] extends undefined ? null : BuiltUpList[6],
//     BuiltUpList[7] extends undefined ? null : BuiltUpList[7]
//   >
// > = AtEnd extends false
//   ? ReverseListOp<ListLen, List, NextIndexBinary, ChangedArrayAtThisIteration>
//   : BuiltUpList;

// type ReverseArrV4<TArr extends ArrVHetN<4, number, number, number, number>> =
//   ReverseList<TArr>;
// type ArrVHet<
//   T1 extends number | null = null,
//   T2 extends number | null = null,
//   T3 extends number | null = null,
//   T4 extends number | null = null,
//   T5 extends number | null = null,
//   T6 extends number | null = null,
//   T7 extends number | null = null,
//   T8 extends number | null = null
// > = T8 extends null
//   ? T7 extends null
//     ? T6 extends null
//       ? T5 extends null
//         ? T4 extends null
//           ? T3 extends null
//             ? T2 extends null
//               ? T1 extends null
//                 ? []
//                 : [T1]
//               : [T1, T2]
//             : [T1, T2, T3]
//           : [T1, T2, T3, T4]
//         : [T1, T2, T3, T4, T5]
//       : [T1, T2, T3, T4, T5, T6]
//     : [T1, T2, T3, T4, T5, T6, T7]
//   : [T1, T2, T3, T4, T5, T6, T7, T8];

// type ArrVHetN<
//   N extends IntegersBetween<0, 8>,
//   T1 extends number | null = null,
//   T2 extends number | null = null,
//   T3 extends number | null = null,
//   T4 extends number | null = null,
//   T5 extends number | null = null,
//   T6 extends number | null = null,
//   T7 extends number | null = null,
//   T8 extends number | null = null
// > = [
//   ArrVHet,
//   ArrVHet<T1>,
//   ArrVHet<T1, T2>,
//   ArrVHet<T1, T2, T3>,
//   ArrVHet<T1, T2, T3, T4>,
//   ArrVHet<T1, T2, T3, T4, T5>,
//   ArrVHet<T1, T2, T3, T4, T5, T6>,
//   ArrVHet<T1, T2, T3, T4, T5, T6, T7>,
//   ArrVHet<T1, T2, T3, T4, T5, T6, T7, T8>
// ][N];
// type ChangeValueAtIndexN<
//   ReplaceIndex extends IntegersBetween<1, 8>,
//   ReplaceVal extends number,
//   T1 extends number | null = null | number,
//   T2 extends number | null = null | number,
//   T3 extends number | null = null | number,
//   T4 extends number | null = null | number,
//   T5 extends number | null = null | number,
//   T6 extends number | null = null | number,
//   T7 extends number | null = null | number,
//   T8 extends number | null = null | number
// > = ArrVHet<
//   ReplaceIndex extends 1 ? ReplaceVal : T1,
//   ReplaceIndex extends 2 ? ReplaceVal : T2,
//   ReplaceIndex extends 3 ? ReplaceVal : T3,
//   ReplaceIndex extends 4 ? ReplaceVal : T4,
//   ReplaceIndex extends 5 ? ReplaceVal : T5,
//   ReplaceIndex extends 6 ? ReplaceVal : T6,
//   ReplaceIndex extends 7 ? ReplaceVal : T7,
//   ReplaceIndex extends 8 ? ReplaceVal : T8
// >;
// type ArrVHetNInclusive<
//   NNN extends IntegersBetween<0, 8>,
//   T1 extends number | null = null | number,
//   T2 extends number | null = null | number,
//   T3 extends number | null = null | number,
//   T4 extends number | null = null | number,
//   T5 extends number | null = null | number,
//   T6 extends number | null = null | number,
//   T7 extends number | null = null | number,
//   T8 extends number | null = null | number
// > = NNN extends 0
//   ? ArrVHetN<0, T1, T2, T3, T4, T5, T6, T7, T8>
//   : NNN extends 1
//   ? ArrVHetN<NumbersFrom0ToN<1>, T1, T2, T3, T4, T5, T6, T7, T8>
//   : NNN extends 2
//   ? ArrVHetN<NumbersFrom0ToN<2>, T1, T2, T3, T4, T5, T6, T7, T8>
//   : NNN extends 3
//   ? ArrVHetN<NumbersFrom0ToN<3>, T1, T2, T3, T4, T5, T6, T7, T8>
//   : NNN extends 4
//   ? ArrVHetN<NumbersFrom0ToN<4>, T1, T2, T3, T4, T5, T6, T7, T8>
//   : NNN extends 5
//   ? ArrVHetN<NumbersFrom0ToN<5>, T1, T2, T3, T4, T5, T6, T7, T8>
//   : NNN extends 6
//   ? ArrVHetN<NumbersFrom0ToN<6>, T1, T2, T3, T4, T5, T6, T7, T8>
//   : NNN extends 7
//   ? ArrVHetN<NumbersFrom0ToN<7>, T1, T2, T3, T4, T5, T6, T7, T8>
//   : NNN extends 8
//   ? ArrVHetN<NumbersFrom0ToN<8>, T1, T2, T3, T4, T5, T6, T7, T8>
//   : never;
// type MaxNumberIndex = BinaryNumber["length"];
// export type PowerOf2<N extends number> = APowerOfB<2, N>;

// TODO change to range obj & remove max to emulate sub 1?
// type NumbersRangeNBits<N extends IntegersBetween<0,6>>=
// type Numbers1Bit = NumbersNBits<1>;
// type Numbers1Bit = IntegersBetween<0, 1>;

// type Numbers2Bits = IntegersBetween<0, 3>;
// type Binaries2Bit = BinariesNBits<2>;
// type Binaries4Bits = BinariesNBits<4>;
// type Binaries3Bit = NumberToBinary<Numbers3Bits>;
// export type Numbers4Bits = IntegersBetween<0, 15>;
// type Numbers5Bits = IntegersBetween<0, 31>;
// type Numbers6Bits = IntegersBetween<0, 63>;
// type Numbers7Bits = IntegersBetween<0, 127>;
// export type Numbers8Bits = IntegersBetween<0, 255>;
// type Binaries8Bits = NumberToBinary<Numbers8Bits>;

// type Modulo<TModulus extends Numbers8Bits> = IntegersBetween<0, TModulus>;
// interface Demo<
//   TDimensions extends IntegersBetween<TMin, TMax>,
//   // TArray extends Arrays[IntegersBetween<TMin,TMax>] = ArrV<TDimensions>,
//   // TArrayLength extends IntegersBetween<TMin,TMax>=ArrayLength<TArray>,
//   TMin extends Numbers8Bits = 1,
//   TMax extends Numbers8Bits = 5,
//   TNextDimension extends Numbers8Bits = NPlusOne<TDimensions>
// > {
//   demoMethod(
//     // take an array of a given dimension, return an array of the next dimension - demo
//     demoParam: ArrV<TDimensions>
//   ): TMax extends 10 ? never : ArrV<TNextDimension>;
// }

// type Num1to10 = IntegersBetween<1, 5>;
// // TODO why is this 64 - smth overflowing?
// type Num2to11 = AddNumbers<Num1to10, 1>;

// type Line<
//   M extends Numbers4Bits,
//   B extends Numbers4Bits,
//   X extends Numbers4Bits
// > = AddNumbers<MultiplyNumbers<M, X>, B>;

// type Line1Plus1<X extends Numbers8Bits> = Line<2, 1, X>;

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
// TODO excessive stack depth

// type ValidRectangle = RectangleArea1<1, 1>;
// type InvalidRectangle = RectangleArea1<1, 2>;

// declare function takesTwoNumbersThatAddTo10<
//   TNumA extends Numbers8Bits,
//   TNumB extends Numbers8Bits
// >(nums: FixedSumPair<TNumA, TNumB, 10>): number;
// // valid
// takesTwoNumbersThatAddTo10([0, 10]);
// // invalid
// takesTwoNumbersThatAddTo10([0, 11]);

// not equal
// declare function takesPairOrderedBigSmall<
//   TNumA extends Numbers8Bits,
//   TNumB extends Numbers8Bits
// >(nums: OrderedPairGreatestToLeast<TNumA, TNumB>): number;
// // valid
// takesPairOrderedBigSmall([10, 1]);
// // invalid
// takesPairOrderedBigSmall([1, 10]);

// type OrderedArrVec4Decreasing<
//   TNumA extends Numbers8Bits,
//   TNumB extends Numbers8Bits,
//   TNumC extends Numbers8Bits,
//   TNumD extends Numbers8Bits,
//   TArray = ArrVHetN<4, TNumA, TNumB, TNumC, TNumD>,
//   ABiggerB = AGreaterThanBNumber<TNumA, TNumB>,
//   BBiggerC = AGreaterThanBNumber<TNumB, TNumC>,
//   CBiggerD = AGreaterThanBNumber<TNumC, TNumD>
// > = TArray &
//   IfEquals<ABiggerB, true> &
//   IfEquals<BBiggerC, true> &
//   IfEquals<CBiggerD, true>;
// type OrderedArrVec4Increasing<
//   TNumA extends Numbers8Bits,
//   TNumB extends Numbers8Bits,
//   TNumC extends Numbers8Bits,
//   TNumD extends Numbers8Bits
// > = ReverseArrV4<OrderedArrVec4Decreasing<TNumA, TNumB, TNumC, TNumD>>;
// type ValidOrderedArrV4 = OrderedArrVec4Decreasing<4, 3, 2, 1>;
// type InvalidOrderedArrV4 = OrderedArrVec4Decreasing<1, 2, 3, 4>;
// declare function takesArrV4OrderedBigSmall<
//   TNumA extends Numbers8Bits,
//   TNumB extends Numbers8Bits,
//   TNumC extends Numbers8Bits,
//   TNumD extends Numbers8Bits
// >(arr: OrderedArrVec4Decreasing<TNumA, TNumB, TNumC, TNumD>): number;
// // valid
// takesArrV4OrderedBigSmall([4, 3, 2, 1]);
// invalid
// takesArrV4OrderedBigSmall([1, 2, 3, 4]);

// type
