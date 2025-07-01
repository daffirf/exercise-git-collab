//Exercise 1:

//Pseudocode: Multiplication table of given integer, in this case: the number 9.

/*
Multiplication table: 9 x 1 - 10.
Berarti: bikin 9 sebagai variable const
Set limit juga pakai const, di angka 10
Bisa pakai for loop kali ya? atau if dan for loop gt mungkin. wakaka bingung. eh, bener ya for loop.
*/

const n: number = 9
const limit: number = 10

for (let i = 1; i <= limit; i++)
{
console.log (`Multiplication of 9: ${n} x ${i} = ${n*i}`)
}
// Sempet bingung hasil perkaliannya gimana cara munculinnya, ternyata cuma di n*i doang yaa.

// Exercise 2:

/*
- Cari kata palindrome. (mamam, malam, etc)
- Buat variabel kata tersebut
- Cari cara untuk detect kalau kata itu palindrome (sama kalau dibalik)
*/

let palindrome: string = 'Madam'
let lower = palindrome.toLowerCase();
let reverse: string = lower.split("").reverse().join("");

if (lower === reverse){
  console.log ("Palindrome.")
}
else {
  console.log ("Not a Palindrome.")
}
/*Jadi dari exercise ini belajar kalau harus pakai beberapa built-in. yaitu:
- split
- reverse
- join
Split untuk mengubah string menjadi bagian dari array, contoh: [m], [a], [d], [a], [m]

Setelah itu, Reverse akan membalikkan dari index paling akhir menjadi paling awal.

Kemudian, array dirubah kembali menjadi string melalui built-in .join

Walaupun masih kurang ngerti kenapa harus pakai ("") di split dan Join, kemudian kenapa reverse() kurungnya dikosongin.

Kemudian, karena Ts juga case-sensitive, ternyata nggak bisa kalau 'Madam', ketika dibalik akan terbaca 'madaM', yang artinya tidak sama.

Jadi, ada dua cara:
- Ganti string jadi lower-case secara manual
- Ganti string jadi lower-case dengan built-in .toLowerCase.
- Kemudian, harus dua kali, pertama di let palindrome dan di dalam let reverse.
*/

//Exercise 3:
/*Pseudocode:
- Cari rumus mengubah centimeter ke km. Yaitu dengan:
kilometer = centimeter / 100000, karena:
100.000 centimeters = 1 kilometer

tentukan variable cm dan km, dalam hal ini:
1 km
100000
*/

let cm: number = 100000
let km: number = 1
let result = cm / 100000

console.log (`${cm} cm = ${result} km `)
//Yang ini agak mudah dipahami, jadi chatGPT-nya sedikit banget hehe

//Exercise 4:
/*Pseudo code:
Kalo gak salah kemarin pakai locale.string
*/

//Versi coba sendiri:
let rupiah: number = 1000
console.log (`Rp. ${rupiah.toLocaleString("id-ID")}`)

//Versi kak Bagas:

let amount: number = 1000
let amountStr: string = amount.toString() //Konvert dari angka jadi string
let formatted: string = ""
let counter: number = 0
let x: number = amountStr.length - 1

while (x >= 0){
  formatted = amountStr [x] + formatted // susun dari belakang
  counter = counter + 1

  if (counter % 3 == 0 && x !== 0){
    formatted = "." + formatted //tambahkan titik setiap 3 digit?
  }
  x = x - 1
}
console.log ("Rp." + formatted + ",00")

//Exercise 5:
/*
Ini untung dicatet, di lesson 1 pakai message.slice
karakter dihitung dari 0 (hello world berarti: 01234 56789)
Hilangin dari 1-3

Eh salah, kirain pakai message.slice, ternyata pakai ,replace: ilangin first occurrence.
*/

// versi belajar sama chat-GPT:
let message: string = 'hello world'; //string utama
let search: string = 'ell'; //sub-string yang dicari
let result2 = message.replace(search,"");
console.log (result2)

// Hasil belajar sama kak Bagas

let mainText: string = "Hello World" // ini jadi string utama.
let searchText: string = "ell" // substring yang dicari.

let output: string = "" // untuk menampung hasil akhir setelah substring dipotong
let found: boolean = false // untuk menandakan bagian mana yagn cocok sesuai dengan hasil
let a: number = 0

while (a < mainText.length){
  let match: boolean = true
  let b: number = 0

//cek apakah substring cocok:

  while (b < searchText.length && a + b < mainText.length){
  if (mainText [a + b] !== searchText[b]){
    match = false
  }
  b = b + 1
}

// Kalau cocok dan belum pernah dihapus sebelumnya:
if (match && !found){
  a = a + searchText.length //skip substring
  found = true
} else {
  output = output + mainText [a] // tambahkan karakter hasil
  a = a + 1
}
}
console.log (output)

//Exercise 6:
/*
Ini versi belajar sama chat-GPT, ini udah pusing banget
*/

let split = message.split (" ")
let capitalized = split.map(word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
});
let result3 = capitalized.join(" ")
console.log (result3)

// Versi belajar dengan ka Bagas:

let sentence: string = "hello world" //nampung kalimat utama
let res: string = "" //nampung hasil akhir
let pos: number = 0
let isStartOfWord: boolean = true // memberikan flagging / menandai apakah karakter saat ini adalah awal kalimat

while (pos < sentence.length){
  let ch: string = sentence [pos] // ambil karakter saat ini

  if (ch === " "){
    res = res + ch // jika ada spasi, langsung tambahkan
    isStartOfWord = true // karakter berikutnya adalah awal kata
  } else {
    let code: number = sentence.charCodeAt(pos) // ambil kode ascii

    //jika awal kata dan huruf kecil
    if (isStartOfWord && code >= 97 && code <= 122){
      code = code - 32 // ubah ke huruf kapital (ASCII)
    }
    res = res + String.fromCharCode (code) // tambahkan ke hasil
    isStartOfWord = false // karakter selanjutnya bukan awal kata lagi
  }
  pos = pos + 1
}
console.log (res)

// Exercise 7:

let input: string = "The QuiCk BrOwN Fox" //input string
let swapped: string = ""
let idx: number = 0

while (idx < input.length) {
  let code: number = input.charCodeAt(idx) // ambil kode ASCII karakter
  let ch: string = input[idx]

  if (code >= 65 && code <= 90){
    // huruf besar jadi huruf kecil
    swapped = swapped + String.fromCharCode (code + 32)
  } else if (code >= 97 && code <= 122){
    //huruf kecil -> besar
    swapped = swapped + String.fromCharCode(code - 32)
  } else {
    // karakter lain tetap
    swapped = swapped + ch
  }
  idx = idx + 1
}
console.log (swapped)

// Exercise 8:

let num1: number = 17;
let num2: number = 23;

if (num1 > num2){
  console.log (`${num1} is the Bigger Number`)
} else {
  console.log (`${num2} is the Bigger number`)
}

// Exercise 9:
/*Pseudocode:
- bikin variabel number, 3 nomor.
- Urutkan dari yang terkecil sampai terbesar
- menggunakan if-else statement:
Pertama, cari tau dulu yang terkecil dari num1
Jika num1 terkecil, cari tau lebih kecil num2 / num3
pakai else untuk mencari yang terkecil terakhir.

Diulang 3 kali dengan kondisi jika num1 terkecil, jika num2 terkecil, dan jika num3 terkecil.
*/

let num3: number = 2;


if ((num1 <= num2) && (num1 <= num3)){
  if (num2 <= num3){
    console.log (num1, num2, num3);}
      else {
        console.log (num1, num3, num2);
      }
}

else if ((num2<= num1) && (num2 <= num3)){
  if (num3 <= num1){
    console.log (num2, num1, num3)
  } else {
    console.log (num2, num3, num1)
  }
}

else if ((num3 <= num2) && (num3 <= num1)){
  if (num1 <= num2){
    console.log (num3, num1, num2)}
    else {
      console.log (num3, num2,num1)
    }
}

//Exercise 10:
/*Pseudocode:
- Buat 1 variable: string, number, atau data lain.
- buatkan if-statement, kalau variable string = angka 1
kalau variable number = angka 2
kalau data lain = angka 3
print.
*/

let variable: any = true

if (typeof variable === "string" ){
  console.log (1)
} else if (typeof variable === "number"){
  console.log (2)
} else {
  console.log (3)
}

// Exercise 11:
/*pseudocode:
Yang ini beneran gak paham kak, tapi coba belajar sama chatGPT.
*/
let messagE: string = "An apple a day keeps the doctor away";
let resulT = "";

for (let i = 0; i < messagE.length; i++) {
  let chaR = messagE[i];
  if (chaR.toLowerCase() === "a") {
    resulT += "*";
  } else {
    resulT += chaR;
  }
}

console.log(resulT);