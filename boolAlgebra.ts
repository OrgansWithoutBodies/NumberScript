type Bit = 1 | 0;

type NumberToBinary<TNum extends Number> = TNum extends 0
  ? BinaryNumber<0, 0, 0, 0, 0, 0>
  : TNum extends 1
  ? BinaryNumber<0, 0, 0, 0, 0, 1>
  : TNum extends 2
  ? BinaryNumber<0, 0, 0, 0, 1, 0>
  : TNum extends 3
  ? BinaryNumber<0, 0, 0, 0, 1, 1>
  : TNum extends 4
  ? BinaryNumber<0, 0, 0, 1, 0, 0>
  : TNum extends 5
  ? BinaryNumber<0, 0, 0, 1, 0, 1>
  : TNum extends 6
  ? BinaryNumber<0, 0, 0, 1, 1, 0>
  : TNum extends 7
  ? BinaryNumber<0, 0, 0, 1, 1, 1>
  : TNum extends 8
  ? BinaryNumber<0, 0, 1, 0, 0, 0>
  : TNum extends 9
  ? BinaryNumber<0, 0, 1, 0, 0, 1>
  : TNum extends 10
  ? BinaryNumber<0, 0, 1, 0, 1, 0>
  : TNum extends 11
  ? BinaryNumber<0, 0, 1, 0, 1, 1>
  : TNum extends 12
  ? BinaryNumber<0, 0, 1, 1, 0, 0>
  : TNum extends 13
  ? BinaryNumber<0, 0, 1, 1, 0, 1>
  : TNum extends 14
  ? BinaryNumber<0, 0, 1, 1, 1, 0>
  : TNum extends 15
  ? BinaryNumber<0, 0, 1, 1, 1, 1>
  : TNum extends 16
  ? BinaryNumber<0, 1, 0, 0, 0, 0>
  : TNum extends 17
  ? BinaryNumber<0, 1, 0, 0, 0, 1>
  : TNum extends 18
  ? BinaryNumber<0, 1, 0, 0, 1, 0>
  : TNum extends 19
  ? BinaryNumber<0, 1, 0, 0, 1, 1>
  : TNum extends 20
  ? BinaryNumber<0, 1, 0, 1, 0, 0>
  : TNum extends 21
  ? BinaryNumber<0, 1, 0, 1, 0, 1>
  : TNum extends 22
  ? BinaryNumber<0, 1, 0, 1, 1, 0>
  : TNum extends 23
  ? BinaryNumber<0, 1, 0, 1, 1, 1>
  : TNum extends 24
  ? BinaryNumber<0, 1, 1, 0, 0, 0>
  : TNum extends 25
  ? BinaryNumber<0, 1, 1, 0, 0, 1>
  : TNum extends 26
  ? BinaryNumber<0, 1, 1, 0, 1, 0>
  : TNum extends 27
  ? BinaryNumber<0, 1, 1, 0, 1, 1>
  : TNum extends 28
  ? BinaryNumber<0, 1, 1, 1, 0, 0>
  : TNum extends 29
  ? BinaryNumber<0, 1, 1, 1, 0, 1>
  : TNum extends 30
  ? BinaryNumber<0, 1, 1, 1, 1, 0>
  : TNum extends 31
  ? BinaryNumber<0, 1, 1, 1, 1, 1>
  : TNum extends 32
  ? BinaryNumber<1, 0, 0, 0, 0, 0>
  : TNum extends 33
  ? BinaryNumber<1, 0, 0, 0, 0, 1>
  : TNum extends 34
  ? BinaryNumber<1, 0, 0, 0, 1, 0>
  : TNum extends 35
  ? BinaryNumber<1, 0, 0, 0, 1, 1>
  : TNum extends 36
  ? BinaryNumber<1, 0, 0, 1, 0, 0>
  : TNum extends 37
  ? BinaryNumber<1, 0, 0, 1, 0, 1>
  : TNum extends 38
  ? BinaryNumber<1, 0, 0, 1, 1, 0>
  : TNum extends 39
  ? BinaryNumber<1, 0, 0, 1, 1, 1>
  : TNum extends 40
  ? BinaryNumber<1, 0, 1, 0, 0, 0>
  : TNum extends 41
  ? BinaryNumber<1, 0, 1, 0, 0, 1>
  : TNum extends 42
  ? BinaryNumber<1, 0, 1, 0, 1, 0>
  : TNum extends 43
  ? BinaryNumber<1, 0, 1, 0, 1, 1>
  : TNum extends 44
  ? BinaryNumber<1, 0, 1, 1, 0, 0>
  : TNum extends 45
  ? BinaryNumber<1, 0, 1, 1, 0, 1>
  : TNum extends 46
  ? BinaryNumber<1, 0, 1, 1, 1, 0>
  : TNum extends 47
  ? BinaryNumber<1, 0, 1, 1, 1, 1>
  : TNum extends 48
  ? BinaryNumber<1, 1, 0, 0, 0, 0>
  : TNum extends 49
  ? BinaryNumber<1, 1, 0, 0, 0, 1>
  : TNum extends 50
  ? BinaryNumber<1, 1, 0, 0, 1, 0>
  : TNum extends 51
  ? BinaryNumber<1, 1, 0, 0, 1, 1>
  : TNum extends 52
  ? BinaryNumber<1, 1, 0, 1, 0, 0>
  : TNum extends 53
  ? BinaryNumber<1, 1, 0, 1, 0, 1>
  : TNum extends 54
  ? BinaryNumber<1, 1, 0, 1, 1, 0>
  : TNum extends 55
  ? BinaryNumber<1, 1, 0, 1, 1, 1>
  : TNum extends 56
  ? BinaryNumber<1, 1, 1, 0, 0, 0>
  : TNum extends 57
  ? BinaryNumber<1, 1, 1, 0, 0, 1>
  : TNum extends 58
  ? BinaryNumber<1, 1, 1, 0, 1, 0>
  : TNum extends 59
  ? BinaryNumber<1, 1, 1, 0, 1, 1>
  : TNum extends 60
  ? BinaryNumber<1, 1, 1, 1, 0, 0>
  : TNum extends 61
  ? BinaryNumber<1, 1, 1, 1, 0, 1>
  : TNum extends 62
  ? BinaryNumber<1, 1, 1, 1, 1, 0>
  : TNum extends 63
  ? BinaryNumber<1, 1, 1, 1, 1, 0>
  : BinaryNumber<0, 0, 0, 0, 0, 0, true>;

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
type AGreaterThanB<
  NumberA extends BinaryNumber<T1A, T2A, T3A, T4A, T5A, T6A>,
  NumberB extends BinaryNumber<T1B, T2B, T3B, T4B, T5B, T6B>,
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
// type Assert<TBoolean extends boolean>=TBoolean extends true ? unknown : never
// type test=Assert<false>
// TODO something here messing up - 31 + 1 != 32
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
type EvenNumber = BinaryNumber<Bit, Bit, Bit, Bit, Bit, 0>;
type OddNumber = BinaryNumber<Bit, Bit, Bit, Bit, Bit, 1>;
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

type Numbers1Bit = Bit;
type Binaries1Bit = NumberToBinary<Numbers1Bit>;
type Numbers2Bits = Numbers1Bit | 2 | 3;
type Binaries2Bit = NumberToBinary<Numbers2Bits>;
type Numbers3Bits = Numbers2Bits | 4 | 5 | 6 | 7;
// TODO why isnt this convertible to BinaryNumber<0,0,0,Bit,Bit,Bit>
type Binaries3Bit = NumberToBinary<Numbers3Bits>;

type One = BinaryNumber<0, 0, 0, 0, 0, 1>;
type Two = AddBinaries<One, One>;
type Four = MultiplyBinaries<Two, Two>;
type Eight = MultiplyBinaries<Four, Two>;
type Sixteen = AddBinaries<Eight, Eight>;
type ThirtyTwo = AddBinaries<Sixteen, Sixteen>;
type SixtyFour = AddBinaries<ThirtyTwo, ThirtyTwo>;

type TwoGreaterThanOne = AGreaterThanB<Two, One>;
type OneGreaterThanTwo = AGreaterThanB<One, Two>;
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

type N1 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<0>>>;
type N2 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<1>>>;
type N3 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<2>>>;
type N4 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<3>>>;
type N5 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<4>>>;
type N6 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<5>>>;
type N7 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<6>>>;
type N8 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<7>>>;
type N9 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<8>>>;
type N10 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<9>>>;
type N11 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<10>>>;
type N12 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<11>>>;
type N13 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<12>>>;
type N14 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<13>>>;
type N15 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<14>>>;
type N16 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<15>>>;
type N17 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<16>>>;
type N18 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<17>>>;
type N19 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<18>>>;
type N20 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<19>>>;
type N21 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<20>>>;
type N22 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<21>>>;
type N23 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<22>>>;
type N24 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<23>>>;
type N25 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<24>>>;
type N26 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<25>>>;
type N27 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<26>>>;
type N28 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<27>>>;
type N29 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<28>>>;
type N30 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<29>>>;
type N31 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<30>>>;
type N32 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<31>>>;
type N33 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<32>>>;
type N34 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<33>>>;
type N35 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<34>>>;
type N36 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<35>>>;
type N37 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<36>>>;
type N38 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<37>>>;
type N39 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<38>>>;
type N40 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<39>>>;
type N41 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<40>>>;
type N42 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<41>>>;
type N43 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<42>>>;
type N44 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<43>>>;
type N45 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<44>>>;
type N46 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<45>>>;
type N47 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<46>>>;
type N48 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<47>>>;
type N49 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<48>>>;
type N50 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<49>>>;
type N51 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<50>>>;
type N52 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<51>>>;
type N53 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<52>>>;
type N54 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<53>>>;
type N55 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<54>>>;
type N56 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<55>>>;
type N57 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<56>>>;
type N58 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<57>>>;
type N59 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<58>>>;
type N60 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<59>>>;
type N61 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<60>>>;
type N62 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<61>>>;
type N63 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<62>>>;
type N64 = BinaryToNumber<AddBinaries<NumberToBinary<1>, NumberToBinary<63>>>;

// TODO maybe endpoints?
type NumberIsInRange<
  NumberMin extends BinaryNumber<T1A, T2A, T3A, T4A, T5A, T6A>,
  NumberCheck extends BinaryNumber<T1C, T2C, T3C, T4C, T5C, T6C>,
  NumberMax extends BinaryNumber<T1B, T2B, T3B, T4B, T5B, T6B>,
  T1A extends Bit = NumberMin[0],
  T2A extends Bit = NumberMin[1],
  T3A extends Bit = NumberMin[2],
  T4A extends Bit = NumberMin[3],
  T5A extends Bit = NumberMin[4],
  T6A extends Bit = NumberMin[5],
  T1C extends Bit = NumberCheck[0],
  T2C extends Bit = NumberCheck[1],
  T3C extends Bit = NumberCheck[2],
  T4C extends Bit = NumberCheck[3],
  T5C extends Bit = NumberCheck[4],
  T6C extends Bit = NumberCheck[5],
  T1B extends Bit = NumberMax[0],
  T2B extends Bit = NumberMax[1],
  T3B extends Bit = NumberMax[2],
  T4B extends Bit = NumberMax[3],
  T5B extends Bit = NumberMax[4],
  T6B extends Bit = NumberMax[5]
> = AGreaterThanB<NumberCheck, NumberMin> extends false
  ? false
  : AGreaterThanB<NumberMax, NumberCheck> extends false
  ? false
  : true;

type NumInRangeTest = NumberIsInRange<One, ThirtyTwo, Two>;
