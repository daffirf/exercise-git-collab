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

// case 5: remove the first occurrence of a substring from a string
let mainText: string = "Hello World" // string utama
let searchText: string = "ell"       // substring yang dicari

let output: string = ""              // untuk menampung hasil akhir setelah substring dipotong
let found: boolean = false           // untuk menandakan bagian mana yang cocok sesuai dengan hasil search
let k: number = 0

while (k < mainText.length) {
    let match: boolean = true
    let b: number = 0

    // cek apakah substring cocok
    while (b < searchText.length && k + b < mainText.length) {
        if (mainText[k + b] !== searchText[b]) {
            match = false
        }
        b = b + 1
    }

    // jika cocok dan belum pernah dihapus sebelumnya
    if (match && !found) {
        k = k + searchText.length // skip substring
        found = true
    } else {
        output = output + mainText[k] // tambahkan karakter ke hasil
        k = k + 1
    }
}

console.log(output)

// case 6: capitalize the first letter of each word in a string
// pecah string menjadi array kata-kata (split dengan spasi)
// ubah huruf pertama menjadi kapital, lalu gabungkan dengan sisa huruf lainnya
// gabungkan kembali array kata-kata menjadi satu string dengan spasi

let cap: string = "hello world"
let words = cap.split(" ")
let a = 0

while (a < words.length) {
    if (words[a].length > 0) {
        words[a] = words[a][0].toUpperCase() + words[a].slice(1)
    }
    a++
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
let temp = 0

while (temp < chg.length) {
    let char = chg[temp]
    if (char === char.toUpperCase()) {
        swapped += char.toLowerCase()
    } else {
        swapped += char.toUpperCase()
    }
    temp++
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
// jika nom1 > nom2, tukar nom1 dan nom2
// jika nom1 > nom3, tukar nom1 dan nom3
// jika nom2 > nom3, tukar nom2 dan nom3

let nom1: number = 42
let nom2: number = 27
let nom3: number = 18

if(nom1 > nom2){
    let sem: number = nom1
    nom1 = nom2
    nom2 = sem
}

if(nom1 > nom3){
    let sem: number = nom1
    nom1 = nom3
    nom3 = sem
}

if(nom2 > nom3){
    let sem: number = nom2
    nom2 = nom3
    nom3 = sem
}

console.log(nom1, nom2, nom3)

// case 10: shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type
// cek tipe data input
// jika string, tampilkan 1
// jika number, tampilkan 2
// selain itu, tampilkan 3

let input: any = "hello"

if (typeof input === "string") {
    console.log(1)
} else if (typeof input === "number") {
    console.log(2)
} else {
    console.log(3)
}

// case 11: change every letter a into * from a string of input
// ambil input string
// buat string kosong untuk hasil
// gunakan while untuk iterasi setiap karakter

let text: string = "An apple a day keeps the doctor away"
let replaced: string = ""
let idx = 0

while (idx < text.length) {
    let char = text[idx]
    if (char === 'a' || char === 'A') {
        replaced += '*'
    } else {
        replaced += char
    }
    idx++
}
console.log(replaced)