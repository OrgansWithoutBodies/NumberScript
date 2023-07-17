// type AssertExtends<Expected, Actual extends Expected = Expected> = Actual;
// type ZeroOut<Ints extends Bit[]> = {
//   [Index in keyof Ints]: 0;
// };
// type ReplaceBits<Bits extends Bit[], Replacements extends Bit[]> = {
//   [Index in keyof Bits]: Index extends keyof Replacements
//     ? Replacements[Index]
//     : Bits[Index];
// };
import { IfEquals } from "./assertions";
export type TupleOfLength<
  Len extends number,
  Arr extends any[] = [],
  TEntry = Arr["length"]
> = Arr["length"] extends Len
  ? Arr
  : TupleOfLength<Len, [...Arr, TEntry], TEntry>;
export type ArrV<L extends number, E = number> = TupleOfLength<L, [], E>;

// type TupleRectOfSize<
//   Len extends number,
//   TEntry extends any[] = [0],
//   TPasses extends number = 0,
//   TArr extends any[] = []
// > = Len extends TPasses
//   ? TArr
//   : TupleRectOfSize<Len, TEntry, APlusB<TPasses, 1>, [...TArr, ...TEntry]>;
// export type APowerOfB<
//   A extends number,
//   B extends number,
//   TCounter extends number = 0,
//   TRunningTotal extends number = 1
// > = TCounter extends B
//   ? TRunningTotal
//   : APowerOfB<A, B, APlusB<TCounter, 1>, ATimesB<TRunningTotal, A>>;

// might be able to use the TupleRectOfSize (limited to square) to check roots?
// export type RootOf<
//   N extends number,
//   TIndex extends number = 1
// > = AGreaterBExclusive<TIndex, N> extends true
//   ? never
//   : SquareNumber<TIndex> extends N
//   ? TIndex
//   : RootOf<N, APlusB<TIndex, 1>>;

export type APlusB<
  TA extends number,
  TB extends number,
  TResult = [...TupleOfLength<TA>, ...TupleOfLength<TB>]["length"]
> = TResult extends number ? TResult : never;
// export type ATimesB<TA extends number, TB extends number> = TupleRectOfSize<
//   TA,
//   TupleOfLength<TB>
// >["length"];
export type AMinusB<
  TA extends number,
  TB extends number
> = TupleOfLength<TA> extends [...TupleOfLength<TB>, ...infer TRest]
  ? TRest["length"]
  : never;
// export type NumbersFrom0ToN<N extends number> = TupleOfLength<
//   APlusB<N, 1>
// >[number];

// export type SquareNumber<TNumber extends number> = ATimesB<TNumber, TNumber>;
// export type FixedProductPair<
//   TNumberA extends number,
//   TNumberB extends number,
//   TProduct extends number,
//   TFixed = IfEquals<ATimesB<TNumberA, TNumberB>, TProduct>
// > = Readonly<[TNumberA, TNumberB]> & TFixed;

export type FixedSumPair<
  TNumberA extends number,
  TNumberB extends number,
  TSum extends number
  // These Readonlys make  this useable in actual code
> = Readonly<[TNumberA, TNumberB]> & IfEquals<APlusB<TNumberA, TNumberB>, TSum>;

export type AGreaterBInclusive<A extends number, B extends number> = AMinusB<
  A,
  B
> extends never
  ? false
  : true;
export type AGreaterBExclusive<A extends number, B extends number> = AMinusB<
  A,
  B
> extends 0
  ? false
  : AGreaterBInclusive<A, B>;

// monotonic
export type OrderedPairGreatestToLeast<
  TNumberA extends number,
  TNumberB extends number
> = [TNumberA, TNumberB] &
  IfEquals<AGreaterBExclusive<TNumberA, TNumberB>, true>;

export type Max<
  TNumberA extends number,
  TNumberB extends number
> = AGreaterBExclusive<TNumberA, TNumberB> extends true ? TNumberA : TNumberB;
export type Min<
  TNumberA extends number,
  TNumberB extends number
> = AGreaterBExclusive<TNumberA, TNumberB> extends true ? TNumberB : TNumberA;

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
// export type PowerOf2<N extends number> = APowerOfB<2, N>;
