let time = selector("#time")

const date = new Date()
let day = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
const realday = day[date.getDay()]
const month = date.toLocaleString('default' , { month: 'long'})
const datenumber = date.getDate()
const year = date.getFullYear()

const datestring = realday + "," + month + " " + datenumber + "," + year
console.log(datestring)
console.log (day[date.getDay()])

time.textContent = realday + "," + month + " " + datenumber + "," + year