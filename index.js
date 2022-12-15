const employee = {
    name: "Nadia Virjee",
    streetAddress: "1796 Northampton Drive",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key, value) {
    const deleteEmployee = {...delete employee.value};
    deleteEmployee[key] = value;
    return deleteEmployee
};

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    delete employee.value
    return employee
};