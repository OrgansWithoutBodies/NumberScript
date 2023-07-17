import { APlusB } from "./arrayOps";

// export function multiplyNumbers<
//   TA extends number,
//   TB extends number
//   // TBinA extends Binaries3Bit = NumberToBinary<TA>,
//   // TBinB extends Binaries3Bit = NumberToBinary<TB>
// >(a: TA, b: TB): ATimesB<TA, TB> {
//   return (a * b) as any as ATimesB<TA, TB>;
// }

// this treats these as sorta fake types since the underlying numbers arent actually arrays, but in another real way at the register level they sorta are lol...
export function addNumbers<TA extends number, TB extends number>(
  a: TA,
  b: TB
): APlusB<TA, TB> {
  return (a + b) as APlusB<TA, TB>;
}
