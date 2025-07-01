// case 1: multiplication table of a given number
// 1. Tentukan nilai input (misal: n = 9)
// 2. Tentukan batas perkalian (misal: batas = 10)
// 3. Untuk i dari 1 sampai batas lakukan:
//       Tampilkan: n x i = (n * i)

let n: number = 9
let boundary: number = 10

let i: number = 1
while (i <= boundary) {
    console.log(`${n} x ${i} = ${n * i}`)
    i++
}

// case 2: check a string is palindrome or not
// 1. tentukan nilai input
// 2. cek apakah string tersebut sama dengan string terbaliknya
// 3. jika sama, maka string tersebut adalah palindrome

let str: string = "imam"

let reversed: string = str.split('').reverse().join('')

if(str === reversed){
    console.log(`${str} is a palindrome`)
} else {
    console.log(`${str} is not a palindrome`)
}

// case 3: check centimeter to kilometer
// 1. ambil input dalam satuan cm
// 2. konversi cm ke km dengan rumus: km = cm / 100000

let cm: number = 100000
let km: number = cm / 100000

console.log(`${cm} cm = ${km} km`)

// case 4: change the number format number as currency
// use Intl.NumberFormat to change the number format as currency

let number: number = 1000

let formatted: string = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
}).format(number)

console.log(formatted)

// case 5: remove the first occurrence of a character from a string
// ambil input string utama dan search string
// cari posisi index di dalam string utama
// jika ditemukan, buat string baru tanpa bagian search string tsb
// jika tidak, string tetap sama

let mainString: string = "Hello World"
let searchString: string = "ell"

let index = mainString.indexOf(searchString)

if(index !== -1){
    let result = mainString.slice(0, index) + mainString.slice(index + searchString.length)
    console.log(result)
}else{
    console.log(mainString)
}

// case 6: capitalize the first letter of each word in a string
// pecah string menjadi array kata-kata (split dengan spasi)
// ubah huruf pertama menjadi kapital, lalu gabungkan dengan sisa huruf lainnya
// gabungkan kembali array kata-kata menjadi satu string dengan spasi

let cap: string = "hello world"
let words = cap.split(" ")

for (let i = 0; i < words.length; i++){
    if(words[i].length > 0){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
}

let result: string = words.join(" ")
console.log(result)

// case 7: swap the case of each character from string
// punya input string
// buat string kosong untuk hasil
// jika karakter adalah huruf besar, ubah ke huruf kecil
// jika karakter adalah huruf kecil, ubah ke huruf besar
// jika bukan huruf, biarkan tetap sama
// tambahkan string ke variabel hasil

let chg: string = "The QuiCk BrOwN Fox"
let swapped: string = ""

for(let i = 0; i < chg.length; i++){
    let char = chg[i]
    if(char === char.toUpperCase()){
        swapped += char.toLowerCase()
    }else{
        swapped += char.toUpperCase()
    }
}

console.log(swapped)

// case 8: find the largest of two given integers
// jika num1 > dari num2, tampilkan num1
// jika tidak, tampilkan num2

let num1: number = 42
let num2: number = 27

let largest: number = 0

if (num1 > num2){
    largest += num1
}else {
    largest += num2
}

console.log(largest)

// case 9: conditional statement to sort three numbers
// jika num 1 > 