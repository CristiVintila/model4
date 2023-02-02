# Subject 2 (2.5 pts)
# TOPIC: Javascript

# Having the `function applyBonus(employees, bonus)`, complete the following tasks:

- Function should return a Promise; (0.5 pts)
- If `bonus` is not a number, the function should `reject` an `Error` with the message `Invalid bonus`; (0.5 pts)
- `employees` is an array that contains objects with the following format: `{name: string, salary: number}` (Example: [{name: "John Doe", salary: 5000}]). If an array with invalid objects is passed then the function should `reject` an `Error` with the message `Invalid array format`; (0.5 pts)
- Function should `reject` a `string` with the value `Bonus too small` if `bonus` is less than 10% of the max salary from `employees` array; (0.5 pts)
- Function should `resolve` an array with applied bonus to each `employee salary`; (0.5 pts)