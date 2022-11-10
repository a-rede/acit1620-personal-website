// Define a array containing course information
let course1 = {
    code: "ACIT 1620",
    name: "Web Fundamental Technologies "
}

let course2 = {
    code: 'ACIT 1515',
    name: 'Scripting for IT'
}

let course3 = {
    code: 'ACIT 1420',
    name: 'Introduction to Systems Administration'
}

const courseList = [course1, course2, course3]

//Prompting user for input, checking to see if input is invalid
//Input is invalid if input is a string or less than a 4 digit value
let input = '';
do {
    input = prompt('Enter a 4-digit number: ')
} while (input.length != 4 || isNaN(Number(input)))

//Writing a loop to iterate through courseList and match code number with user input
let flagState = false;
for (let course of courseList) {
    if (course.code.includes(input)) {
        console.log(`Yes I am taking the course: ${course.code} - ${course.name}`)
        flagState = true;
    }
}

if (flagState == false) {
    courseList.push({ code: input, name: null })
    console.log(`${input} has successfully been added.`)
    console.log(courseList)
}