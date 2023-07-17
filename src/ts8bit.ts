/**
 * Vendored from https://github.com/sinclairzx81/ts-8-bit
 */
// -------------------------------------------------------------------------
//       _______ _____       ___        _     _ _
//      |__   __/ ____|     / _ \      | |   (_) |
//         | | | (___ _____| (_) |_____| |__  _| |_
//         | |  \___ \______> _ <______| '_ \| | __|
//         | |  ____) |    | (_) |     | |_) | | |_
//         |_| |_____/      \___/      |_.__/|_|\__|
//
//    Using the TypeScript type system for 8-bit arithmetic
//
//                    sinclair 2020 | MIT
//
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// Bit
// -------------------------------------------------------------------------

export type Bit = 0 | 1;

export type BinaryNumber<
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

// -------------------------------------------------------------------------
// Gates
// -------------------------------------------------------------------------

export type BitNot<T extends Bit> = T extends 0 ? 1 : T extends 1 ? 0 : never;

export type BitAnd<T extends [Bit, Bit]> = T extends [0, 0]
  ? 0
  : T extends [0, 1]
  ? 0
  : T extends [1, 0]
  ? 0
  : T extends [1, 1]
  ? 1
  : never;

export type BitOr<T extends [Bit, Bit]> = T extends [0, 0]
  ? 0
  : T extends [0, 1]
  ? 1
  : T extends [1, 0]
  ? 1
  : T extends [1, 1]
  ? 1
  : never;

export type BitXor<T extends [Bit, Bit]> = T extends [0, 0]
  ? 0
  : T extends [0, 1]
  ? 1
  : T extends [1, 0]
  ? 1
  : T extends [1, 1]
  ? 0
  : never;

// -------------------------------------------------------------------------
// Iterator
// -------------------------------------------------------------------------

export type Index = keyof Iterator;
export type Prev<T extends keyof Iterator> = Iterator[T][0];
export type Next<T extends keyof Iterator> = Iterator[T][1];
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

// -------------------------------------------------------------------------
// Bitwise
// -------------------------------------------------------------------------

export type Not<T extends BinaryNumber> = [
  BitNot<T[0]>,
  BitNot<T[1]>,
  BitNot<T[2]>,
  BitNot<T[3]>,
  BitNot<T[4]>,
  BitNot<T[5]>,
  BitNot<T[6]>,
  BitNot<T[7]>
];

export type And<A extends BinaryNumber, B extends BinaryNumber> = [
  BitAnd<[A[0], B[0]]>,
  BitAnd<[A[1], B[1]]>,
  BitAnd<[A[2], B[2]]>,
  BitAnd<[A[3], B[3]]>,
  BitAnd<[A[4], B[4]]>,
  BitAnd<[A[5], B[5]]>,
  BitAnd<[A[6], B[6]]>,
  BitAnd<[A[7], B[7]]>
];

export type Or<A extends BinaryNumber, B extends BinaryNumber> = [
  BitOr<[A[0], B[0]]>,
  BitOr<[A[1], B[1]]>,
  BitOr<[A[2], B[2]]>,
  BitOr<[A[3], B[3]]>,
  BitOr<[A[4], B[4]]>,
  BitOr<[A[5], B[5]]>,
  BitOr<[A[6], B[6]]>,
  BitOr<[A[7], B[7]]>
];

export type Xor<A extends BinaryNumber, B extends BinaryNumber> = [
  BitXor<[B[0], A[0]]>,
  BitXor<[B[1], A[1]]>,
  BitXor<[B[2], A[2]]>,
  BitXor<[B[3], A[3]]>,
  BitXor<[B[4], A[4]]>,
  BitXor<[B[5], A[5]]>,
  BitXor<[B[6], A[6]]>,
  BitXor<[B[7], A[7]]>
];

export type Rsh<T extends BinaryNumber, I extends Index> = I extends 0
  ? T
  : Rsh<[T[1], T[2], T[3], T[4], T[5], T[6], T[7], 0], Prev<I>>;

export type Lsh<T extends BinaryNumber, I extends Index> = I extends 0
  ? T
  : Lsh<[0, T[0], T[1], T[2], T[3], T[4], T[5], T[6]], Prev<I>>;

// -------------------------------------------------------------------------
// Equality
// -------------------------------------------------------------------------

export type Eq<A extends BinaryNumber, B extends BinaryNumber> = A extends B
  ? true
  : false;

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

export type Lt<A extends BinaryNumber, B extends BinaryNumber> = LtOp<A, B, 7>;

export type Lte<A extends BinaryNumber, B extends BinaryNumber> = [
  Eq<A, B>,
  Lt<A, B>
] extends [true, false]
  ? true
  : [Eq<A, B>, Lt<A, B>] extends [false, true]
  ? true
  : false;

export type GtOp<
  A extends BinaryNumber,
  B extends BinaryNumber,
  I extends Index
> = A extends B
  ? false
  : [A[I], B[I]] extends [0, 0]
  ? GtOp<A, B, Prev<I>>
  : [A[I], B[I]] extends [1, 1]
  ? GtOp<A, B, Prev<I>>
  : [A[I], B[I]] extends [0, 1]
  ? false
  : [A[I], B[I]] extends [1, 0]
  ? true
  : false;

export type Gt<A extends BinaryNumber, B extends BinaryNumber> = GtOp<A, B, 7>;

export type Gte<A extends BinaryNumber, B extends BinaryNumber> = [
  Eq<A, B>,
  Gt<A, B>
] extends [true, false]
  ? true
  : [Eq<A, B>, Gt<A, B>] extends [false, true]
  ? true
  : false;

// -------------------------------------------------------------------------
// Addition
// -------------------------------------------------------------------------

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
  A extends BinaryNumber,
  B extends BinaryNumber,
  I extends Index,
  O extends Bit
> = FullAdder<[A[I], B[I], I extends 0 ? 0 : AddOp<A, B, Prev<I>, 1>]>[O];

export type Add<A extends BinaryNumber, B extends BinaryNumber> = [
  AddOp<A, B, 0, 0>,
  AddOp<A, B, 1, 0>,
  AddOp<A, B, 2, 0>,
  AddOp<A, B, 3, 0>,
  AddOp<A, B, 4, 0>,
  AddOp<A, B, 5, 0>,
  AddOp<A, B, 6, 0>,
  AddOp<A, B, 7, 0>
];

// -------------------------------------------------------------------------
// Subtraction
// -------------------------------------------------------------------------

export type FullSubtractor<T extends [Bit, Bit, Bit]> = T extends [0, 0, 0]
  ? [0, 0]
  : T extends [1, 0, 0]
  ? [1, 0]
  : T extends [0, 1, 0]
  ? [1, 1]
  : T extends [1, 1, 0]
  ? [0, 0]
  : T extends [0, 0, 1]
  ? [1, 1]
  : T extends [1, 0, 1]
  ? [0, 0]
  : T extends [0, 1, 1]
  ? [0, 1]
  : T extends [1, 1, 1]
  ? [1, 1]
  : never;

export type SubOp<
  A extends BinaryNumber,
  B extends BinaryNumber,
  I extends Index,
  O extends Bit
> = FullSubtractor<[A[I], B[I], I extends 0 ? 0 : SubOp<A, B, Prev<I>, 1>]>[O];

export type Sub<A extends BinaryNumber, B extends BinaryNumber> = [
  SubOp<A, B, 0, 0>,
  SubOp<A, B, 1, 0>,
  SubOp<A, B, 2, 0>,
  SubOp<A, B, 3, 0>,
  SubOp<A, B, 4, 0>,
  SubOp<A, B, 5, 0>,
  SubOp<A, B, 6, 0>,
  SubOp<A, B, 7, 0>
];

// -------------------------------------------------------------------------
// Multiply
// -------------------------------------------------------------------------
type Depths = [never, 0, 1, 2];
export type MulOp<
  A extends BinaryNumber,
  B extends BinaryNumber,
  C extends BinaryNumber,
  D extends BinaryNumber,
  Depth extends Depths[number]
> = Lt<C, D> extends true
  ? MulOp<Add<A, B>, B, Add<C, Byte<1>>, D, Depths[Depth]>
  : A;

export type Mul<A extends BinaryNumber, B extends BinaryNumber> = MulOp<
  Byte<0>,
  A,
  Byte<0>,
  B,
  0
>;

// -------------------------------------------------------------------------
// Division
// -------------------------------------------------------------------------

export type DivOp<
  A extends BinaryNumber,
  B extends BinaryNumber,
  C extends BinaryNumber
> = Gte<A, B> extends true ? DivOp<Sub<A, B>, B, Add<C, Byte<1>>> : C;

export type Div<A extends BinaryNumber, B extends BinaryNumber> = DivOp<
  A,
  B,
  Byte<0>
>;

// -------------------------------------------------------------------------
// Modulo
// -------------------------------------------------------------------------

export type ModOp<
  A extends BinaryNumber,
  B extends BinaryNumber,
  C extends BinaryNumber
> = Gte<A, B> extends true ? ModOp<Sub<A, B>, B, Add<C, Byte<1>>> : A;

export type Mod<A extends BinaryNumber, B extends BinaryNumber> = ModOp<
  A,
  B,
  Byte<0>
>;

// -------------------------------------------------------------------------
// Converters
// -------------------------------------------------------------------------

type Size1 = [0];
type Size2 = [...Size1, ...Size1];
type Size3 = [...Size2, ...Size2];
type Size4 = [...Size3, ...Size3];
type Size5 = [...Size4, ...Size4];
type Size6 = [...Size5, ...Size5];
type Size7 = [...Size6, ...Size6];
type Size8 = [...Size7, ...Size7];
export type Num<T extends BinaryNumber> = [
  ...(T[0] extends 1 ? Size1 : []),
  ...(T[1] extends 1 ? Size2 : []),
  ...(T[2] extends 1 ? Size3 : []),
  ...(T[3] extends 1 ? Size4 : []),
  ...(T[4] extends 1 ? Size5 : []),
  ...(T[5] extends 1 ? Size6 : []),
  ...(T[6] extends 1 ? Size7 : []),
  ...(T[7] extends 1 ? Size8 : [])
]["length"];

// Mapped value implicit from array index
export type Byte<T extends number> = [
  [0, 0, 0, 0, 0, 0, 0, 0],

  [0, 0, 0, 0, 0, 0, 0, 1],

  [0, 0, 0, 0, 0, 0, 1, 0],

  [0, 0, 0, 0, 0, 0, 1, 1],

  [0, 0, 0, 0, 0, 1, 0, 0],

  [0, 0, 0, 0, 0, 1, 0, 1],

  [0, 0, 0, 0, 0, 1, 1, 0],

  [0, 0, 0, 0, 0, 1, 1, 1],

  [0, 0, 0, 0, 1, 0, 0, 0],

  [0, 0, 0, 0, 1, 0, 0, 1],

  [0, 0, 0, 0, 1, 0, 1, 0],

  [0, 0, 0, 0, 1, 0, 1, 1],

  [0, 0, 0, 0, 1, 1, 0, 0],

  [0, 0, 0, 0, 1, 1, 0, 1],

  [0, 0, 0, 0, 1, 1, 1, 0],

  [0, 0, 0, 0, 1, 1, 1, 1],

  [0, 0, 0, 1, 0, 0, 0, 0],

  [0, 0, 0, 1, 0, 0, 0, 1],

  [0, 0, 0, 1, 0, 0, 1, 0],

  [0, 0, 0, 1, 0, 0, 1, 1],

  [0, 0, 0, 1, 0, 1, 0, 0],

  [0, 0, 0, 1, 0, 1, 0, 1],

  [0, 0, 0, 1, 0, 1, 1, 0],

  [0, 0, 0, 1, 0, 1, 1, 1],

  [0, 0, 0, 1, 1, 0, 0, 0],

  [0, 0, 0, 1, 1, 0, 0, 1],

  [0, 0, 0, 1, 1, 0, 1, 0],

  [0, 0, 0, 1, 1, 0, 1, 1],

  [0, 0, 0, 1, 1, 1, 0, 0],

  [0, 0, 0, 1, 1, 1, 0, 1],

  [0, 0, 0, 1, 1, 1, 1, 0],

  [0, 0, 0, 1, 1, 1, 1, 1],

  [0, 0, 1, 0, 0, 0, 0, 0],

  [0, 0, 1, 0, 0, 0, 0, 1],

  [0, 0, 1, 0, 0, 0, 1, 0],

  [0, 0, 1, 0, 0, 0, 1, 1],

  [0, 0, 1, 0, 0, 1, 0, 0],

  [0, 0, 1, 0, 0, 1, 0, 1],

  [0, 0, 1, 0, 0, 1, 1, 0],

  [0, 0, 1, 0, 0, 1, 1, 1],

  [0, 0, 1, 0, 1, 0, 0, 0],

  [0, 0, 1, 0, 1, 0, 0, 1],

  [0, 0, 1, 0, 1, 0, 1, 0],

  [0, 0, 1, 0, 1, 0, 1, 1],

  [0, 0, 1, 0, 1, 1, 0, 0],

  [0, 0, 1, 0, 1, 1, 0, 1],

  [0, 0, 1, 0, 1, 1, 1, 0],

  [0, 0, 1, 0, 1, 1, 1, 1],

  [0, 0, 1, 1, 0, 0, 0, 0],

  [0, 0, 1, 1, 0, 0, 0, 1],

  [0, 0, 1, 1, 0, 0, 1, 0],

  [0, 0, 1, 1, 0, 0, 1, 1],

  [0, 0, 1, 1, 0, 1, 0, 0],

  [0, 0, 1, 1, 0, 1, 0, 1],

  [0, 0, 1, 1, 0, 1, 1, 0],

  [0, 0, 1, 1, 0, 1, 1, 1],

  [0, 0, 1, 1, 1, 0, 0, 0],

  [0, 0, 1, 1, 1, 0, 0, 1],

  [0, 0, 1, 1, 1, 0, 1, 0],

  [0, 0, 1, 1, 1, 0, 1, 1],

  [0, 0, 1, 1, 1, 1, 0, 0],

  [0, 0, 1, 1, 1, 1, 0, 1],

  [0, 0, 1, 1, 1, 1, 1, 0],

  [0, 0, 1, 1, 1, 1, 1, 1],

  [0, 1, 0, 0, 0, 0, 0, 0],

  [0, 1, 0, 0, 0, 0, 0, 1],

  [0, 1, 0, 0, 0, 0, 1, 0],

  [0, 1, 0, 0, 0, 0, 1, 1],

  [0, 1, 0, 0, 0, 1, 0, 0],

  [0, 1, 0, 0, 0, 1, 0, 1],

  [0, 1, 0, 0, 0, 1, 1, 0],

  [0, 1, 0, 0, 0, 1, 1, 1],

  [0, 1, 0, 0, 1, 0, 0, 0],

  [0, 1, 0, 0, 1, 0, 0, 1],

  [0, 1, 0, 0, 1, 0, 1, 0],

  [0, 1, 0, 0, 1, 0, 1, 1],

  [0, 1, 0, 0, 1, 1, 0, 0],

  [0, 1, 0, 0, 1, 1, 0, 1],

  [0, 1, 0, 0, 1, 1, 1, 0],

  [0, 1, 0, 0, 1, 1, 1, 1],

  [0, 1, 0, 1, 0, 0, 0, 0],

  [0, 1, 0, 1, 0, 0, 0, 1],

  [0, 1, 0, 1, 0, 0, 1, 0],

  [0, 1, 0, 1, 0, 0, 1, 1],

  [0, 1, 0, 1, 0, 1, 0, 0],

  [0, 1, 0, 1, 0, 1, 0, 1],

  [0, 1, 0, 1, 0, 1, 1, 0],

  [0, 1, 0, 1, 0, 1, 1, 1],

  [0, 1, 0, 1, 1, 0, 0, 0],

  [0, 1, 0, 1, 1, 0, 0, 1],

  [0, 1, 0, 1, 1, 0, 1, 0],

  [0, 1, 0, 1, 1, 0, 1, 1],

  [0, 1, 0, 1, 1, 1, 0, 0],

  [0, 1, 0, 1, 1, 1, 0, 1],

  [0, 1, 0, 1, 1, 1, 1, 0],

  [0, 1, 0, 1, 1, 1, 1, 1],

  [0, 1, 1, 0, 0, 0, 0, 0],

  [0, 1, 1, 0, 0, 0, 0, 1],

  [0, 1, 1, 0, 0, 0, 1, 0],

  [0, 1, 1, 0, 0, 0, 1, 1],

  [0, 1, 1, 0, 0, 1, 0, 0],

  [0, 1, 1, 0, 0, 1, 0, 1],

  [0, 1, 1, 0, 0, 1, 1, 0],

  [0, 1, 1, 0, 0, 1, 1, 1],

  [0, 1, 1, 0, 1, 0, 0, 0],

  [0, 1, 1, 0, 1, 0, 0, 1],

  [0, 1, 1, 0, 1, 0, 1, 0],

  [0, 1, 1, 0, 1, 0, 1, 1],

  [0, 1, 1, 0, 1, 1, 0, 0],

  [0, 1, 1, 0, 1, 1, 0, 1],

  [0, 1, 1, 0, 1, 1, 1, 0],

  [0, 1, 1, 0, 1, 1, 1, 1],

  [0, 1, 1, 1, 0, 0, 0, 0],

  [0, 1, 1, 1, 0, 0, 0, 1],

  [0, 1, 1, 1, 0, 0, 1, 0],

  [0, 1, 1, 1, 0, 0, 1, 1],

  [0, 1, 1, 1, 0, 1, 0, 0],

  [0, 1, 1, 1, 0, 1, 0, 1],

  [0, 1, 1, 1, 0, 1, 1, 0],

  [0, 1, 1, 1, 0, 1, 1, 1],

  [0, 1, 1, 1, 1, 0, 0, 0],

  [0, 1, 1, 1, 1, 0, 0, 1],

  [0, 1, 1, 1, 1, 0, 1, 0],

  [0, 1, 1, 1, 1, 0, 1, 1],

  [0, 1, 1, 1, 1, 1, 0, 0],

  [0, 1, 1, 1, 1, 1, 0, 1],

  [0, 1, 1, 1, 1, 1, 1, 0],

  [0, 1, 1, 1, 1, 1, 1, 1],

  [1, 0, 0, 0, 0, 0, 0, 0],

  [1, 0, 0, 0, 0, 0, 0, 1],

  [1, 0, 0, 0, 0, 0, 1, 0],

  [1, 0, 0, 0, 0, 0, 1, 1],

  [1, 0, 0, 0, 0, 1, 0, 0],

  [1, 0, 0, 0, 0, 1, 0, 1],

  [1, 0, 0, 0, 0, 1, 1, 0],

  [1, 0, 0, 0, 0, 1, 1, 1],

  [1, 0, 0, 0, 1, 0, 0, 0],

  [1, 0, 0, 0, 1, 0, 0, 1],

  [1, 0, 0, 0, 1, 0, 1, 0],

  [1, 0, 0, 0, 1, 0, 1, 1],

  [1, 0, 0, 0, 1, 1, 0, 0],

  [1, 0, 0, 0, 1, 1, 0, 1],

  [1, 0, 0, 0, 1, 1, 1, 0],

  [1, 0, 0, 0, 1, 1, 1, 1],

  [1, 0, 0, 1, 0, 0, 0, 0],

  [1, 0, 0, 1, 0, 0, 0, 1],

  [1, 0, 0, 1, 0, 0, 1, 0],

  [1, 0, 0, 1, 0, 0, 1, 1],

  [1, 0, 0, 1, 0, 1, 0, 0],

  [1, 0, 0, 1, 0, 1, 0, 1],

  [1, 0, 0, 1, 0, 1, 1, 0],

  [1, 0, 0, 1, 0, 1, 1, 1],

  [1, 0, 0, 1, 1, 0, 0, 0],

  [1, 0, 0, 1, 1, 0, 0, 1],

  [1, 0, 0, 1, 1, 0, 1, 0],

  [1, 0, 0, 1, 1, 0, 1, 1],

  [1, 0, 0, 1, 1, 1, 0, 0],

  [1, 0, 0, 1, 1, 1, 0, 1],

  [1, 0, 0, 1, 1, 1, 1, 0],

  [1, 0, 0, 1, 1, 1, 1, 1],

  [1, 0, 1, 0, 0, 0, 0, 0],

  [1, 0, 1, 0, 0, 0, 0, 1],

  [1, 0, 1, 0, 0, 0, 1, 0],

  [1, 0, 1, 0, 0, 0, 1, 1],

  [1, 0, 1, 0, 0, 1, 0, 0],

  [1, 0, 1, 0, 0, 1, 0, 1],

  [1, 0, 1, 0, 0, 1, 1, 0],

  [1, 0, 1, 0, 0, 1, 1, 1],

  [1, 0, 1, 0, 1, 0, 0, 0],

  [1, 0, 1, 0, 1, 0, 0, 1],

  [1, 0, 1, 0, 1, 0, 1, 0],

  [1, 0, 1, 0, 1, 0, 1, 1],

  [1, 0, 1, 0, 1, 1, 0, 0],

  [1, 0, 1, 0, 1, 1, 0, 1],

  [1, 0, 1, 0, 1, 1, 1, 0],

  [1, 0, 1, 0, 1, 1, 1, 1],

  [1, 0, 1, 1, 0, 0, 0, 0],

  [1, 0, 1, 1, 0, 0, 0, 1],

  [1, 0, 1, 1, 0, 0, 1, 0],

  [1, 0, 1, 1, 0, 0, 1, 1],

  [1, 0, 1, 1, 0, 1, 0, 0],

  [1, 0, 1, 1, 0, 1, 0, 1],

  [1, 0, 1, 1, 0, 1, 1, 0],

  [1, 0, 1, 1, 0, 1, 1, 1],

  [1, 0, 1, 1, 1, 0, 0, 0],

  [1, 0, 1, 1, 1, 0, 0, 1],

  [1, 0, 1, 1, 1, 0, 1, 0],

  [1, 0, 1, 1, 1, 0, 1, 1],

  [1, 0, 1, 1, 1, 1, 0, 0],

  [1, 0, 1, 1, 1, 1, 0, 1],

  [1, 0, 1, 1, 1, 1, 1, 0],

  [1, 0, 1, 1, 1, 1, 1, 1],

  [1, 1, 0, 0, 0, 0, 0, 0],

  [1, 1, 0, 0, 0, 0, 0, 1],

  [1, 1, 0, 0, 0, 0, 1, 0],

  [1, 1, 0, 0, 0, 0, 1, 1],

  [1, 1, 0, 0, 0, 1, 0, 0],

  [1, 1, 0, 0, 0, 1, 0, 1],

  [1, 1, 0, 0, 0, 1, 1, 0],

  [1, 1, 0, 0, 0, 1, 1, 1],

  [1, 1, 0, 0, 1, 0, 0, 0],

  [1, 1, 0, 0, 1, 0, 0, 1],

  [1, 1, 0, 0, 1, 0, 1, 0],

  [1, 1, 0, 0, 1, 0, 1, 1],

  [1, 1, 0, 0, 1, 1, 0, 0],

  [1, 1, 0, 0, 1, 1, 0, 1],

  [1, 1, 0, 0, 1, 1, 1, 0],

  [1, 1, 0, 0, 1, 1, 1, 1],

  [1, 1, 0, 1, 0, 0, 0, 0],

  [1, 1, 0, 1, 0, 0, 0, 1],

  [1, 1, 0, 1, 0, 0, 1, 0],

  [1, 1, 0, 1, 0, 0, 1, 1],

  [1, 1, 0, 1, 0, 1, 0, 0],

  [1, 1, 0, 1, 0, 1, 0, 1],

  [1, 1, 0, 1, 0, 1, 1, 0],

  [1, 1, 0, 1, 0, 1, 1, 1],

  [1, 1, 0, 1, 1, 0, 0, 0],

  [1, 1, 0, 1, 1, 0, 0, 1],

  [1, 1, 0, 1, 1, 0, 1, 0],

  [1, 1, 0, 1, 1, 0, 1, 1],

  [1, 1, 0, 1, 1, 1, 0, 0],

  [1, 1, 0, 1, 1, 1, 0, 1],

  [1, 1, 0, 1, 1, 1, 1, 0],

  [1, 1, 0, 1, 1, 1, 1, 1],

  [1, 1, 1, 0, 0, 0, 0, 0],

  [1, 1, 1, 0, 0, 0, 0, 1],

  [1, 1, 1, 0, 0, 0, 1, 0],

  [1, 1, 1, 0, 0, 0, 1, 1],

  [1, 1, 1, 0, 0, 1, 0, 0],

  [1, 1, 1, 0, 0, 1, 0, 1],

  [1, 1, 1, 0, 0, 1, 1, 0],

  [1, 1, 1, 0, 0, 1, 1, 1],

  [1, 1, 1, 0, 1, 0, 0, 0],

  [1, 1, 1, 0, 1, 0, 0, 1],

  [1, 1, 1, 0, 1, 0, 1, 0],

  [1, 1, 1, 0, 1, 0, 1, 1],

  [1, 1, 1, 0, 1, 1, 0, 0],

  [1, 1, 1, 0, 1, 1, 0, 1],

  [1, 1, 1, 0, 1, 1, 1, 0],

  [1, 1, 1, 0, 1, 1, 1, 1],

  [1, 1, 1, 1, 0, 0, 0, 0],

  [1, 1, 1, 1, 0, 0, 0, 1],

  [1, 1, 1, 1, 0, 0, 1, 0],

  [1, 1, 1, 1, 0, 0, 1, 1],

  [1, 1, 1, 1, 0, 1, 0, 0],

  [1, 1, 1, 1, 0, 1, 0, 1],

  [1, 1, 1, 1, 0, 1, 1, 0],

  [1, 1, 1, 1, 0, 1, 1, 1],

  [1, 1, 1, 1, 1, 0, 0, 0],

  [1, 1, 1, 1, 1, 0, 0, 1],

  [1, 1, 1, 1, 1, 0, 1, 0],

  [1, 1, 1, 1, 1, 0, 1, 1],

  [1, 1, 1, 1, 1, 1, 0, 0],

  [1, 1, 1, 1, 1, 1, 0, 1],

  [1, 1, 1, 1, 1, 1, 1, 0],

  [1, 1, 1, 1, 1, 1, 1, 1]
][T];
