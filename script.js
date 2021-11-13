

let num = +prompt('Son kiriting')

while (isNaN(num)) {
    num = +prompt('Son kiriting')
}
if (num == 0) {
    alert('Siz 0 sonini kiritdingiz, bu ham JUFT son hisoblanadi.')
} else if (num % 2 == 0) {
    alert('Siz JUFT son kiritdingiz')
} else {
    alert('Siz TOQ son kiritdingiz')
}