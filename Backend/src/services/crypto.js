import crypto from "crypto";

export function encrypt(password, salt) {
  const mykey = crypto.createCipher("aes-128-cbc", `Agu@7${salt}_P@n3l@`);
  let mystr = mykey.update(password, "utf8", "hex");
  mystr += mykey.final("hex");

  return mystr;
}

export function decrypt(password, salt) {
  const mykey = crypto.createDecipher("aes-128-cbc", `Agu@7${salt}_P@n3l@`);
  let mystr = mykey.update(password, "hex", "utf8");
  mystr += mykey.final("utf8");

  return mystr;
}
