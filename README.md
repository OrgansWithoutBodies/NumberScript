This is a type library that allows type literals that can do math. Originally DIY but after finding the ts 8-bit repo then its largely uses that as a core for more complex numerical types. 8 Bit numbers run into depth overflow issues when multiplying generically, but smaller numbers can do more before overflowing, so making the number of bits allowed per number configurable would make this more concretely usable. Alternatively, if the allowed depth for typescript types is configurable (I cant find it if it is) then that would make this more useful.

Check dev branch for latest changes
