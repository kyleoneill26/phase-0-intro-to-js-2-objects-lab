
// Write your solution in this file!
const employee = {
        name: "Kyle",
        streetAddress: "11 North"
    }

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employees = {...employee};
    employees[key] = value;
    return employees;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}