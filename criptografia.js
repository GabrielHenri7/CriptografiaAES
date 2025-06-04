const CryptoJS = require("crypto-js");
const chaveSecreta = "minha-chave-super-secreta";
const dadoOriginal = "Nome do cliente: Gabriel Henrique";

console.log("=== CRIPTOGRAFIA COM AES ===\n");
console.log("Dado original:");
console.log(dadoOriginal);
console.log("\n");

const dadoCriptografado = CryptoJS.AES.encrypt(
  dadoOriginal,
  chaveSecreta
).toString();

console.log("Dado criptografado:");
console.log(dadoCriptografado);
console.log("\n");

const bytes = CryptoJS.AES.decrypt(dadoCriptografado, chaveSecreta);
const dadoDecifrado = bytes.toString(CryptoJS.enc.Utf8);

console.log("Dado decifrado:");
console.log(dadoDecifrado);
