// import { IntegersBetween } from "./rangeOps";

// type NumberStringFromDecimal<
//   Integer extends IntegersBetween<0, 8>,
//   Remainder extends IntegersBetween<0, 9>,
//   SignString extends "-" | ""
// > = Remainder extends 0
//   ? `${SignString}${Integer}`
//   : `${SignString}${Integer}.${Remainder}`;
// // type DecimalNumberString<
// //   Integer extends IntegersBetween<0, 8>,
// //   Remainder extends number,
// //   SignString extends "-" | ""
// // > = `${SignString}${Integer}.${Remainder}`;
// type DecimalSafeNumbers = 1.3 | 1.1 | 1.2;
// type Decimal<
//   TInt extends IntegersBetween<0, 8>,
//   TRemainder extends IntegersBetween<0, 9>,
//   TSign extends "" | "-"
// > = {
//   __int: TInt;
//   __remainder: TRemainder;
//   __sign: TSign extends "" ? "+" : "-";
// };

// type DecimalFromNumberString<
//   TNumStr extends NumberStringFromDecimal<TInt, TRemainder, TSign>,
//   TInt extends IntegersBetween<0, 8> = TNumStr extends NumberStringFromDecimal<
//     infer InferredTInt,
//     TRemainder,
//     TSign
//   >
//     ? InferredTInt
//     : 0,
//   TRemainder extends IntegersBetween<
//     0,
//     9
//   > = TNumStr extends NumberStringFromDecimal<
//     TInt,
//     infer InferredTRemainder,
//     TSign
//   >
//     ? InferredTRemainder
//     : 0,
//   TSign extends "-" | "" = TNumStr extends NumberStringFromDecimal<
//     TInt,
//     TRemainder,
//     infer InferredSign
//   >
//     ? InferredSign
//     : ""
// > = Decimal<TInt, TRemainder, TSign>; // type NumberFromNumberString
// type NumberStringFromNumber<
//   TNum extends DecimalSafeNumbers
//   // TNumStr
// > = `${TNum}`;
// type DecimalFromNumber<
//   TNum extends DecimalSafeNumbers,
//   TNumStr extends DecimalFromNumberString<TNum> = NumberStringFromNumber<TNum>
// > = DecimalFromNumberString<TNumStr>;
// type RemainderFromNumber<TDecimal extends DecimalSafeNumbers> =
//   DecimalFromNumber<TDecimal>["__remainder"];
// type IntegerFromNumber<TDecimal extends DecimalSafeNumbers> =
//   DecimalFromNumber<TDecimal>["__int"];
// type SignFromNumber<TDecimal extends DecimalSafeNumbers> =
//   DecimalFromNumber<TDecimal>["__sign"];
// type Test = DecimalFromNumber<-1.3>;
