type IfEquals<T, U, Y = unknown, N = never> = (<G>() => G extends T
  ? 1
  : 2) extends <G>() => G extends U ? 1 : 2
  ? Y
  : N;


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


declare const assertExactType: <T, U>(
    draft: T & IfEquals<T, U>,
    expected: U & IfEquals<T, U>
  ) => IfEquals<T, U>;
  

// semantic declarations to trigger a compiler error when a value is _not_ an exact type. */

// type PotentiallyNever = never
// type IsNever<TPot extends PotentiallyNever>=TPot extends never ? true : false
// type NotNever<TPot extends PotentiallyNever>=LogicalNot<IsNever<TPot>>
// declare const assertTrue: <T extends PotentiallyNever>(
//   draft: T & NotNever<T>,

// ) =>NotNever<T>;
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
