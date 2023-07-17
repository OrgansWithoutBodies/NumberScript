import { AGreaterBInclusive } from "./arrayOps";

// type TagFromRange<TRange extends RangeTag<number, number>> = Omit<
//   TRange,
//   keyof number
// >;

export type RangeTag<TMin extends number, TMax extends number> = {
  __min: TMin;
  __max: TMax;
};
export type RangeSet<
  TMin extends number,
  TMax extends number,
  TNums extends number
> = AGreaterBInclusive<TMax, TMin> extends true
  ? { __nums: TNums } & RangeTag<TMin, TMax>
  : never;
// type NumbersFrom0ToNMinusOne<
//   N extends number,
//   TArray = TupleOfLength<N, []>
// > = TArray[keyof TArray];
// export type NumberRangeSet<TMin extends number, TMax extends number> = RangeSet<
//   TMin,
//   TMax,
//   Exclude<NumbersFrom0ToN<TMax>, NumbersFrom0ToN<TMin>> | TMin
// >;
export type IntegersBetween<
  TMin extends number,
  TMax extends number
> = TMin extends number ? (TMax extends number ? number : number) : number;
// export type IntegersBetween<
//   TMin extends number,
//   TMax extends number
// > = NumberRangeSet<TMin, TMax>["__nums"];
// Add Endpoints
// export type AddTwoRanges<
//   // TODO NumberFixedRange
//   TRangeSetA extends NumberRangeSet<number, number>,
//   TRangeSetB extends NumberRangeSet<number, number>
// > = NumberRangeSet<
//   APlusB<TRangeSetA["__min"], TRangeSetB["__min"]>,
//   APlusB<TRangeSetA["__max"], TRangeSetB["__max"]>
// >;

// TODO excessively deep
// export type MultiplyTwoRanges<
//   TRangeSetA extends NumberRangeSet<number, number>,
//   TRangeSetB extends NumberRangeSet<number, number>
// > = NumberRangeSet<
//   ATimesB<TRangeSetA["__min"], TRangeSetB["__min"]>,
//   ATimesB<TRangeSetA["__max"], TRangeSetB["__max"]>
// >;
export type DoRangesOverlap<
  TRangeSetA extends RangeSet<number, number, number>,
  TRangeSetB extends RangeSet<number, number, number>
> = TRangeSetA["__nums"] & TRangeSetB["__nums"] extends never ? false : true;

export type NumberIsInRangeInclusive<
  NumberMin extends number,
  NumberCheck extends number,
  NumberMax extends number
> = AGreaterBInclusive<NumberCheck, NumberMin> extends false
  ? false
  : AGreaterBInclusive<NumberMax, NumberCheck> extends false
  ? false
  : true;
