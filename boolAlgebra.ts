type Bit = 1 | 0;
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
type NumberToBinary<TNum extends number> = [
  BinaryNumber<0, 0, 0, 0, 0, 0>,
  BinaryNumber<0, 0, 0, 0, 0, 1>,
  BinaryNumber<0, 0, 0, 0, 1, 0>,
  BinaryNumber<0, 0, 0, 0, 1, 1>,
  BinaryNumber<0, 0, 0, 1, 0, 0>,
  BinaryNumber<0, 0, 0, 1, 0, 1>,
  BinaryNumber<0, 0, 0, 1, 1, 0>,
  BinaryNumber<0, 0, 0, 1, 1, 1>,
  BinaryNumber<0, 0, 1, 0, 0, 0>,
  BinaryNumber<0, 0, 1, 0, 0, 1>,
  BinaryNumber<0, 0, 1, 0, 1, 0>,
  BinaryNumber<0, 0, 1, 0, 1, 1>,
  BinaryNumber<0, 0, 1, 1, 0, 0>,
  BinaryNumber<0, 0, 1, 1, 0, 1>,
  BinaryNumber<0, 0, 1, 1, 1, 0>,
  BinaryNumber<0, 0, 1, 1, 1, 1>,
  BinaryNumber<0, 1, 0, 0, 0, 0>,
  BinaryNumber<0, 1, 0, 0, 0, 1>,
  BinaryNumber<0, 1, 0, 0, 1, 0>,
  BinaryNumber<0, 1, 0, 0, 1, 1>,
  BinaryNumber<0, 1, 0, 1, 0, 0>,
  BinaryNumber<0, 1, 0, 1, 0, 1>,
  BinaryNumber<0, 1, 0, 1, 1, 0>,
  BinaryNumber<0, 1, 0, 1, 1, 1>,
  BinaryNumber<0, 1, 1, 0, 0, 0>,
  BinaryNumber<0, 1, 1, 0, 0, 1>,
  BinaryNumber<0, 1, 1, 0, 1, 0>,
  BinaryNumber<0, 1, 1, 0, 1, 1>,
  BinaryNumber<0, 1, 1, 1, 0, 0>,
  BinaryNumber<0, 1, 1, 1, 0, 1>,
  BinaryNumber<0, 1, 1, 1, 1, 0>,
  BinaryNumber<0, 1, 1, 1, 1, 1>,
  BinaryNumber<1, 0, 0, 0, 0, 0>,
  BinaryNumber<1, 0, 0, 0, 0, 1>,
  BinaryNumber<1, 0, 0, 0, 1, 0>,
  BinaryNumber<1, 0, 0, 0, 1, 1>,
  BinaryNumber<1, 0, 0, 1, 0, 0>,
  BinaryNumber<1, 0, 0, 1, 0, 1>,
  BinaryNumber<1, 0, 0, 1, 1, 0>,
  BinaryNumber<1, 0, 0, 1, 1, 1>,
  BinaryNumber<1, 0, 1, 0, 0, 0>,
  BinaryNumber<1, 0, 1, 0, 0, 1>,
  BinaryNumber<1, 0, 1, 0, 1, 0>,
  BinaryNumber<1, 0, 1, 0, 1, 1>,
  BinaryNumber<1, 0, 1, 1, 0, 0>,
  BinaryNumber<1, 0, 1, 1, 0, 1>,
  BinaryNumber<1, 0, 1, 1, 1, 0>,
  BinaryNumber<1, 0, 1, 1, 1, 1>,
  BinaryNumber<1, 1, 0, 0, 0, 0>,
  BinaryNumber<1, 1, 0, 0, 0, 1>,
  BinaryNumber<1, 1, 0, 0, 1, 0>,
  BinaryNumber<1, 1, 0, 0, 1, 1>,
  BinaryNumber<1, 1, 0, 1, 0, 0>,
  BinaryNumber<1, 1, 0, 1, 0, 1>,
  BinaryNumber<1, 1, 0, 1, 1, 0>,
  BinaryNumber<1, 1, 0, 1, 1, 1>,
  BinaryNumber<1, 1, 1, 0, 0, 0>,
  BinaryNumber<1, 1, 1, 0, 0, 1>,
  BinaryNumber<1, 1, 1, 0, 1, 0>,
  BinaryNumber<1, 1, 1, 0, 1, 1>,
  BinaryNumber<1, 1, 1, 1, 0, 0>,
  BinaryNumber<1, 1, 1, 1, 0, 1>,
  BinaryNumber<1, 1, 1, 1, 1, 0>,
  BinaryNumber<1, 1, 1, 1, 1, 0>,
  BinaryNumber<0, 0, 0, 0, 0, 0, true>
][TNum];
type BinaryToNumber<TBin extends BinaryNumber> = TBin extends BinaryNumber<
  0,
  0,
  0,
  0,
  0,
  0
>
  ? 0
  : TBin extends BinaryNumber<0, 0, 0, 0, 0, 1>
  ? 1
  : TBin extends BinaryNumber<0, 0, 0, 0, 1, 0>
  ? 2
  : TBin extends BinaryNumber<0, 0, 0, 0, 1, 1>
  ? 3
  : TBin extends BinaryNumber<0, 0, 0, 1, 0, 0>
  ? 4
  : TBin extends BinaryNumber<0, 0, 0, 1, 0, 1>
  ? 5
  : TBin extends BinaryNumber<0, 0, 0, 1, 1, 0>
  ? 6
  : TBin extends BinaryNumber<0, 0, 0, 1, 1, 1>
  ? 7
  : TBin extends BinaryNumber<0, 0, 1, 0, 0, 0>
  ? 8
  : TBin extends BinaryNumber<0, 0, 1, 0, 0, 1>
  ? 9
  : TBin extends BinaryNumber<0, 0, 1, 0, 1, 0>
  ? 10
  : TBin extends BinaryNumber<0, 0, 1, 0, 1, 1>
  ? 11
  : TBin extends BinaryNumber<0, 0, 1, 1, 0, 0>
  ? 12
  : TBin extends BinaryNumber<0, 0, 1, 1, 0, 1>
  ? 13
  : TBin extends BinaryNumber<0, 0, 1, 1, 1, 0>
  ? 14
  : TBin extends BinaryNumber<0, 0, 1, 1, 1, 1>
  ? 15
  : TBin extends BinaryNumber<0, 1, 0, 0, 0, 0>
  ? 16
  : TBin extends BinaryNumber<0, 1, 0, 0, 0, 1>
  ? 17
  : TBin extends BinaryNumber<0, 1, 0, 0, 1, 0>
  ? 18
  : TBin extends BinaryNumber<0, 1, 0, 0, 1, 1>
  ? 19
  : TBin extends BinaryNumber<0, 1, 0, 1, 0, 0>
  ? 20
  : TBin extends BinaryNumber<0, 1, 0, 1, 0, 1>
  ? 21
  : TBin extends BinaryNumber<0, 1, 0, 1, 1, 0>
  ? 22
  : TBin extends BinaryNumber<0, 1, 0, 1, 1, 1>
  ? 23
  : TBin extends BinaryNumber<0, 1, 1, 0, 0, 0>
  ? 24
  : TBin extends BinaryNumber<0, 1, 1, 0, 0, 1>
  ? 25
  : TBin extends BinaryNumber<0, 1, 1, 0, 1, 0>
  ? 26
  : TBin extends BinaryNumber<0, 1, 1, 0, 1, 1>
  ? 27
  : TBin extends BinaryNumber<0, 1, 1, 1, 0, 0>
  ? 28
  : TBin extends BinaryNumber<0, 1, 1, 1, 0, 1>
  ? 29
  : TBin extends BinaryNumber<0, 1, 1, 1, 1, 0>
  ? 30
  : TBin extends BinaryNumber<0, 1, 1, 1, 1, 1>
  ? 31
  : TBin extends BinaryNumber<1, 0, 0, 0, 0, 0>
  ? 32
  : TBin extends BinaryNumber<1, 0, 0, 0, 0, 1>
  ? 33
  : TBin extends BinaryNumber<1, 0, 0, 0, 1, 0>
  ? 34
  : TBin extends BinaryNumber<1, 0, 0, 0, 1, 1>
  ? 35
  : TBin extends BinaryNumber<1, 0, 0, 1, 0, 0>
  ? 36
  : TBin extends BinaryNumber<1, 0, 0, 1, 0, 1>
  ? 37
  : TBin extends BinaryNumber<1, 0, 0, 1, 1, 0>
  ? 38
  : TBin extends BinaryNumber<1, 0, 0, 1, 1, 1>
  ? 39
  : TBin extends BinaryNumber<1, 0, 1, 0, 0, 0>
  ? 40
  : TBin extends BinaryNumber<1, 0, 1, 0, 0, 1>
  ? 41
  : TBin extends BinaryNumber<1, 0, 1, 0, 1, 0>
  ? 42
  : TBin extends BinaryNumber<1, 0, 1, 0, 1, 1>
  ? 43
  : TBin extends BinaryNumber<1, 0, 1, 1, 0, 0>
  ? 44
  : TBin extends BinaryNumber<1, 0, 1, 1, 0, 1>
  ? 45
  : TBin extends BinaryNumber<1, 0, 1, 1, 1, 0>
  ? 46
  : TBin extends BinaryNumber<1, 0, 1, 1, 1, 1>
  ? 47
  : TBin extends BinaryNumber<1, 1, 0, 0, 0, 0>
  ? 48
  : TBin extends BinaryNumber<1, 1, 0, 0, 0, 1>
  ? 49
  : TBin extends BinaryNumber<1, 1, 0, 0, 1, 0>
  ? 50
  : TBin extends BinaryNumber<1, 1, 0, 0, 1, 1>
  ? 51
  : TBin extends BinaryNumber<1, 1, 0, 1, 0, 0>
  ? 52
  : TBin extends BinaryNumber<1, 1, 0, 1, 0, 1>
  ? 53
  : TBin extends BinaryNumber<1, 1, 0, 1, 1, 0>
  ? 54
  : TBin extends BinaryNumber<1, 1, 0, 1, 1, 1>
  ? 55
  : TBin extends BinaryNumber<1, 1, 1, 0, 0, 0>
  ? 56
  : TBin extends BinaryNumber<1, 1, 1, 0, 0, 1>
  ? 57
  : TBin extends BinaryNumber<1, 1, 1, 0, 1, 0>
  ? 58
  : TBin extends BinaryNumber<1, 1, 1, 0, 1, 1>
  ? 59
  : TBin extends BinaryNumber<1, 1, 1, 1, 0, 0>
  ? 60
  : TBin extends BinaryNumber<1, 1, 1, 1, 0, 1>
  ? 61
  : TBin extends BinaryNumber<1, 1, 1, 1, 1, 0>
  ? 62
  : TBin extends BinaryNumber<1, 1, 1, 1, 1, 0>
  ? 63
  : 64;

type BinaryNumber<
  T1 extends Bit = Bit,
  T2 extends Bit = Bit,
  T3 extends Bit = Bit,
  T4 extends Bit = Bit,
  T5 extends Bit = Bit,
  T6 extends Bit = Bit,
  TOverflow extends boolean = false
> = TOverflow extends false
  ? [T1, T2, T3, T4, T5, T6]
  : [T1, T2, T3, T4, T5, T6] & { __overflows: TOverflow };

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
  T1B extends Bit = NumberB[0],
  T2B extends Bit = NumberB[1],
  T3B extends Bit = NumberB[2],
  T4B extends Bit = NumberB[3],
  T5B extends Bit = NumberB[4],
  T6B extends Bit = NumberB[5]
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
  : // all digits equal
    false;
type AGreaterEqualBBinary<
  NumberA extends BinaryNumber,
  NumberB extends BinaryNumber,
  TEqual extends boolean = NumberA extends NumberB ? true : false
> = TEqual extends true ? true : AGreaterThanBBinary<NumberA, NumberB>;
type AGreaterThanBNumber<
  NumberA extends number,
  NumberB extends number
> = AGreaterThanBBinary<NumberToBinary<NumberA>, NumberToBinary<NumberB>>;
type AGreaterEqualBNumber<
  NumberA extends number,
  NumberB extends number
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
  NumberB extends BinaryNumber
> = BinaryNumber<
  AddDigit<
    NumberA[0],
    NumberB[0],
    GetOverflowFromAddDigit<
      NumberA[1],
      NumberB[1],
      GetOverflowFromAddDigit<
        NumberA[2],
        NumberB[2],
        GetOverflowFromAddDigit<
          NumberA[3],
          NumberB[3],
          GetOverflowFromAddDigit<
            NumberA[4],
            NumberB[4],
            AddBits<NumberA[5], NumberB[5]>["__bitOverflow"]
          >
        >
      >
    >
  >,
  AddDigit<
    NumberA[1],
    NumberB[1],
    GetOverflowFromAddDigit<
      NumberA[2],
      NumberB[2],
      GetOverflowFromAddDigit<
        NumberA[3],
        NumberB[3],
        GetOverflowFromAddDigit<
          NumberA[4],
          NumberB[4],
          AddBits<NumberA[5], NumberB[5]>["__bitOverflow"]
        >
      >
    >
  >,
  AddDigit<
    NumberA[2],
    NumberB[2],
    GetOverflowFromAddDigit<
      NumberA[3],
      NumberB[3],
      GetOverflowFromAddDigit<
        NumberA[4],
        NumberB[4],
        AddBits<NumberA[5], NumberB[5]>["__bitOverflow"]
      >
    >
  >,
  AddDigit<
    NumberA[3],
    NumberB[3],
    GetOverflowFromAddDigit<
      NumberA[4],
      NumberB[4],
      AddBits<NumberA[5], NumberB[5]>["__bitOverflow"]
    >
  >,
  AddDigit<
    NumberA[4],
    NumberB[4],
    AddBits<NumberA[5], NumberB[5]>["__bitOverflow"]
  >,
  AddDigit<NumberA[5], NumberB[5], false>,
  GetOverflowFromAddDigit<
    NumberA[0],
    NumberB[0],
    GetOverflowFromAddDigit<
      NumberA[1],
      NumberB[1],
      GetOverflowFromAddDigit<
        NumberA[2],
        NumberB[2],
        GetOverflowFromAddDigit<
          NumberA[3],
          NumberB[3],
          GetOverflowFromAddDigit<
            NumberA[4],
            NumberB[4],
            AddBits<NumberA[5], NumberB[5]>["__bitOverflow"]
          >
        >
      >
    >
  >
>;
type EvenBinary = BinaryNumber<Bit, Bit, Bit, Bit, Bit, 0>;
type OddBinary = BinaryNumber<Bit, Bit, Bit, Bit, Bit, 1>;
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
  TNum extends BinaryNumber<0, Bit, Bit, Bit, Bit, Bit>
> = BinaryNumber<TNum[1], TNum[2], TNum[3], TNum[4], TNum[5], 0>;
type MultiplyBinaries<
  NumberA extends Binaries3Bit,
  NumberB extends Binaries3Bit
> = AddBinaries<
  AddBinaries<
    MultiplyNumberByBit<NumberA, NumberB[5]>,
    MultiplyNumberByBit<ShiftNumberLeftByOneDigit<NumberA>, NumberB[4]>
  >,
  MultiplyNumberByBit<
    ShiftNumberLeftByOneDigit<ShiftNumberLeftByOneDigit<NumberA>>,
    NumberB[3]
  >
>;

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

type PowerOf2<N extends IntegersBetween<0, 5>> = BinaryNumber<
  N extends 5 ? 1 : 0,
  N extends 4 ? 1 : 0,
  N extends 3 ? 1 : 0,
  N extends 2 ? 1 : 0,
  N extends 1 ? 1 : 0,
  N extends 0 ? 1 : 0
>;

type NumbersNBits<N extends IntegersBetween<0, 5>> = IntegersBetween<
  0,
  BinaryToNumber<PowerOf2<N>>
>;
type BinariesNBits<N extends IntegersBetween<0, 5>> = NumberToBinary<
  NumbersNBits<N>
>;
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
type Numbers1Bit = NumbersNBits<1>;
type Binaries1Bit = NumberToBinary<
  BinariesBetween<[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1]>
>;
type Numbers2Bits = IntegersBetween<0, 3>;
type Binaries2Bit = NumberToBinary<Numbers2Bits>;
type Numbers3Bits = Numbers2Bits | 4 | 5 | 6 | 7;
type Binaries3Bit = NumberToBinary<Numbers3Bits>;
type Numbers4Bits = Numbers3Bits | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
type Numbers5Bits =
  | Numbers4Bits
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31;
type Numbers6Bits =
  | Numbers5Bits
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60
  | 61
  | 62
  | 63;

type One = BinaryNumber<0, 0, 0, 0, 0, 1>;
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
  TA extends number,
  TB extends number,
  TBinA extends BinaryNumber = NumberToBinary<TA>,
  TBinB extends BinaryNumber = NumberToBinary<TB>
>(a: TA, b: TB): BinaryToNumber<AddBinaries<TBinA, TBinB>> {
  return ((a as any as number) + (b as any as number)) as any as BinaryToNumber<
    AddBinaries<TBinA, TBinB>
  >;
}
function multiplyNumbers<
  TA extends Numbers3Bits,
  TB extends Numbers3Bits,
  TBinA extends Binaries3Bit = NumberToBinary<TA>,
  TBinB extends Binaries3Bit = NumberToBinary<TB>
>(a: TA, b: TB): BinaryToNumber<MultiplyBinaries<TBinA, TBinB>> {
  return ((a as any as number) * (b as any as number)) as any as BinaryToNumber<
    MultiplyBinaries<TBinA, TBinB>
  >;
}

const itsAliiiive = multiplyNumbers(2, 2);

type AddNumbers<
  NumberA extends number,
  NumberB extends number
> = BinaryToNumber<
  AddBinaries<NumberToBinary<NumberA>, NumberToBinary<NumberB>>
>;
type MultiplyNumbers<
  NumberA extends number,
  NumberB extends number
> = BinaryToNumber<
  MultiplyBinaries<NumberToBinary<NumberA>, NumberToBinary<NumberB>>
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
type AddOneToRangeTagMax<
  TRange extends RangeTag<number, number>,
  TNewMax extends number = AddNumbers<TRange["__max"], 1>
> = RangeTag<TRange["__min"], TNewMax>;
type AddOneToRangeSetMax<
  TRangeSet extends RangeSet<number, number, number>,
  TNewMax extends number = AddNumbers<TRangeSet["__max"], 1>
> = { __nums: TRangeSet["__nums"] | TNewMax } & AddOneToRangeTagMax<
  Omit<TRangeSet, "__nums">
>;

type Range0To0 = RangeSet<0, 0, 0>;
type TagFromRange<TRange extends RangeTag<number, number>> = Omit<
  TRange,
  keyof number
>;

type Range0To1 = AddOneToRangeSetMax<Range0To0>;
type Range0To2 = AddOneToRangeSetMax<Range0To1>;
type Range0To3 = AddOneToRangeSetMax<Range0To2>;
type Range0To4 = AddOneToRangeSetMax<Range0To3>;
type Range0To5 = AddOneToRangeSetMax<Range0To4>;
type Range0To6 = AddOneToRangeSetMax<Range0To5>;
type Range0To7 = AddOneToRangeSetMax<Range0To6>;
type Range0To8 = AddOneToRangeSetMax<Range0To7>;
type Range0To9 = AddOneToRangeSetMax<Range0To8>;
type Range0To10 = AddOneToRangeSetMax<Range0To9>;
type Range0To11 = AddOneToRangeSetMax<Range0To10>;
type Range0To12 = AddOneToRangeSetMax<Range0To11>;
type Range0To13 = AddOneToRangeSetMax<Range0To12>;
type Range0To14 = AddOneToRangeSetMax<Range0To13>;
type Range0To15 = AddOneToRangeSetMax<Range0To14>;
type Range0To16 = AddOneToRangeSetMax<Range0To15>;
type Range0To17 = AddOneToRangeSetMax<Range0To16>;
type Range0To18 = AddOneToRangeSetMax<Range0To17>;
type Range0To19 = AddOneToRangeSetMax<Range0To18>;
type Range0To20 = AddOneToRangeSetMax<Range0To19>;
type Range0To21 = AddOneToRangeSetMax<Range0To20>;
type Range0To22 = AddOneToRangeSetMax<Range0To21>;
type Range0To23 = AddOneToRangeSetMax<Range0To22>;
type Range0To24 = AddOneToRangeSetMax<Range0To23>;
type Range0To25 = AddOneToRangeSetMax<Range0To24>;
type Range0To26 = AddOneToRangeSetMax<Range0To25>;
type Range0To27 = AddOneToRangeSetMax<Range0To26>;
type Range0To28 = AddOneToRangeSetMax<Range0To27>;
type Range0To29 = AddOneToRangeSetMax<Range0To28>;
type Range0To30 = AddOneToRangeSetMax<Range0To29>;
type Range0To31 = AddOneToRangeSetMax<Range0To30>;
type Range0To32 = AddOneToRangeSetMax<Range0To31>;
type Range0To33 = AddOneToRangeSetMax<Range0To32>;
type Range0To34 = AddOneToRangeSetMax<Range0To33>;
type Range0To35 = AddOneToRangeSetMax<Range0To34>;
type Range0To36 = AddOneToRangeSetMax<Range0To35>;
type Range0To37 = AddOneToRangeSetMax<Range0To36>;
type Range0To38 = AddOneToRangeSetMax<Range0To37>;
type Range0To39 = AddOneToRangeSetMax<Range0To38>;
type Range0To40 = AddOneToRangeSetMax<Range0To39>;
type Range0To41 = AddOneToRangeSetMax<Range0To40>;
type Range0To42 = AddOneToRangeSetMax<Range0To41>;
type Range0To43 = AddOneToRangeSetMax<Range0To42>;
type Range0To44 = AddOneToRangeSetMax<Range0To43>;
type Range0To45 = AddOneToRangeSetMax<Range0To44>;
type Range0To46 = AddOneToRangeSetMax<Range0To45>;
type Range0To47 = AddOneToRangeSetMax<Range0To46>;
type Range0To48 = AddOneToRangeSetMax<Range0To47>;
type Range0To49 = AddOneToRangeSetMax<Range0To48>;
type Range0To50 = AddOneToRangeSetMax<Range0To49>;
type Range0To51 = AddOneToRangeSetMax<Range0To50>;
type Range0To52 = AddOneToRangeSetMax<Range0To51>;
type Range0To53 = AddOneToRangeSetMax<Range0To52>;
type Range0To54 = AddOneToRangeSetMax<Range0To53>;
type Range0To55 = AddOneToRangeSetMax<Range0To54>;
type Range0To56 = AddOneToRangeSetMax<Range0To55>;
type Range0To57 = AddOneToRangeSetMax<Range0To56>;
type Range0To58 = AddOneToRangeSetMax<Range0To57>;
type Range0To59 = AddOneToRangeSetMax<Range0To58>;
type Range0To60 = AddOneToRangeSetMax<Range0To59>;
type Range0To61 = AddOneToRangeSetMax<Range0To60>;
type Range0To62 = AddOneToRangeSetMax<Range0To61>;
type Range0To63 = AddOneToRangeSetMax<Range0To62>;
type Range0To64 = AddOneToRangeSetMax<Range0To63>;

type PositiveRange = [
  Range0To0,
  Range0To1,
  Range0To2,
  Range0To3,
  Range0To4,
  Range0To5,
  Range0To6,
  Range0To7,
  Range0To8,
  Range0To9,
  Range0To10,
  Range0To11,
  Range0To12,
  Range0To13,
  Range0To14,
  Range0To15,
  Range0To16,
  Range0To17,
  Range0To18,
  Range0To19,
  Range0To20,
  Range0To21,
  Range0To22,
  Range0To23,
  Range0To24,
  Range0To25,
  Range0To26,
  Range0To27,
  Range0To28,
  Range0To29,
  Range0To30,
  Range0To31,
  Range0To32,
  Range0To33,
  Range0To34,
  Range0To35,
  Range0To36,
  Range0To37,
  Range0To38,
  Range0To39,
  Range0To40,
  Range0To41,
  Range0To42,
  Range0To43,
  Range0To44,
  Range0To45,
  Range0To46,
  Range0To47,
  Range0To48,
  Range0To49,
  Range0To50,
  Range0To51,
  Range0To52,
  Range0To53,
  Range0To54,
  Range0To55,
  Range0To56,
  Range0To57,
  Range0To58,
  Range0To59,
  Range0To60,
  Range0To61,
  Range0To62,
  Range0To63,
  Range0To64
];
type NumberRangeSet<TMin extends number, TMax extends number> = RangeSet<
  TMin,
  TMax,
  Exclude<PositiveRange[TMax]["__nums"], PositiveRange[TMin]["__nums"]> | TMin
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
  TRangeSetA extends NumberRangeSet<number, number>,
  TRangeSetB extends NumberRangeSet<number, number>
> = NumberRangeSet<
  MultiplyNumbers<TRangeSetA["__min"], TRangeSetB["__min"]>,
  MultiplyNumbers<TRangeSetA["__max"], TRangeSetB["__max"]>
>;
type Test3412312 = MultiplyTwoRanges<
  NumberRangeSet<2, 5>,
  NumberRangeSet<2, 4>
>;
type DoRangesOverlap<
  TRangeSetA extends RangeSet<number, number, number>,
  TRangeSetB extends RangeSet<number, number, number>
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
type IntegersBetween<TMin extends number, TMax extends number> = NumberRangeSet<
  TMin,
  TMax
>["__nums"];

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

type AvailableArrVs = IntegersBetween<0, 10>;
type ArrayLength<TArray extends Arrays[AvailableArrVs]> = TArray extends ArrV0
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

type ArrV<TDim extends AvailableArrVs> = Arrays[TDim];

type Modulo<TModulus extends number> = IntegersBetween<0, TModulus>;
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

type Line1Plus1<X extends number> = Line<2, 1, X>;

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
  TNumberA extends number,
  TNumberB extends number,
  TProduct extends number,
  TFixed = IfEquals<MultiplyNumbers<TNumberA, TNumberB>, TProduct>
> = Readonly<[TNumberA, TNumberB]> & TFixed;
type FixedSumPair<
  TNumberA extends number,
  TNumberB extends number,
  TSum extends number
  // These Readonlys make  this useable in actual code
> = Readonly<[TNumberA, TNumberB]> &
  IfEquals<AddNumbers<TNumberA, TNumberB>, TSum>;
type RectangleArea1<
  TNumberA extends number & TFixed,
  TNumberB extends number & TFixed,
  TFixed = IfEquals<MultiplyNumbers<TNumberA, TNumberB>, 1>

  // why error
> = FixedProductPair<TNumberA, TNumberB, 1>;
type ValidRectangle = RectangleArea1<1, 1>;
type InvalidRectangle = RectangleArea1<1, 2>;
type Test1234 = FixedSumPair<2, 0, 2>;

declare function takesTwoNumbersThatAddTo10<
  TNumA extends number,
  TNumB extends number
>(nums: FixedSumPair<TNumA, TNumB, 10>): number;
// valid
takesTwoNumbersThatAddTo10([0, 10]);
// invalid
takesTwoNumbersThatAddTo10([0, 11]);

// not equal
type OrderedPairGreatestToLeast<
  TNumberA extends number,
  TNumberB extends number
> = [TNumberA, TNumberB] &
  IfEquals<AGreaterThanBNumber<TNumberA, TNumberB>, true>;

declare function takesPairOrderedBigSmall<
  TNumA extends number,
  TNumB extends number
>(nums: OrderedPairGreatestToLeast<TNumA, TNumB>): number;
// valid
takesPairOrderedBigSmall([10, 1]);
// invalid
takesPairOrderedBigSmall([1, 10]);

type OrderedArrVec4Decreasing<
  TNumA extends number,
  TNumB extends number,
  TNumC extends number,
  TNumD extends number,
  TArray = ArrV4Het<TNumA, TNumB, TNumC, TNumD>,
  ABiggerB = AGreaterThanBNumber<TNumA, TNumB>,
  BBiggerC = AGreaterThanBNumber<TNumB, TNumC>,
  CBiggerD = AGreaterThanBNumber<TNumC, TNumD>
> = TArray &
  IfEquals<ABiggerB, true> &
  IfEquals<BBiggerC, true> &
  IfEquals<CBiggerD, true>;
type OrderedArrVec4Increasing<
  TNumA extends number,
  TNumB extends number,
  TNumC extends number,
  TNumD extends number
> = ReverseArrV4<OrderedArrVec4Decreasing<TNumA, TNumB, TNumC, TNumD>>;
type ValidOrderedArrV4 = OrderedArrVec4Decreasing<4, 3, 2, 1>;
type InvalidOrderedArrV4 = OrderedArrVec4Decreasing<1, 2, 3, 4>;

declare function takesArrV4OrderedBigSmall<
  TNumA extends number,
  TNumB extends number,
  TNumC extends number,
  TNumD extends number
>(arr: OrderedArrVec4Decreasing<TNumA, TNumB, TNumC, TNumD>): number;
// valid
takesArrV4OrderedBigSmall([4, 3, 2, 1]);
takesArrV4OrderedBigSmall([1, 2, 3, 4]);
// invalid
type Max<
  TNumberA extends number,
  TNumberB extends number
> = AGreaterThanBNumber<TNumberA, TNumberB> extends true ? TNumberA : TNumberB;
type Min<
  TNumberA extends number,
  TNumberB extends number
> = AGreaterThanBNumber<TNumberA, TNumberB> extends true ? TNumberB : TNumberA;
