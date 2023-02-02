# Subiectul 2 (2.5 pts)
# Tematica: Javascript

# Avand urmatoarea functie `function applyBonus(employees, bonus)`, completati urmatoarele taskuri:

- Functia trebuie sa returneze un Promise; (0.5 pts)
- Daca `bonus` nu este numar, functia trebuie sa apeleze `reject` cu `Error` si mesajul `Invalid bonus`; (0.5 pts)
- `employees` este un vector ce contine elemente cu urmatorul format: `{name: string, salary: number}` (Example: [{name: "John Doe", salary: 5000}]). Daca este pasat un vector cu elemente invalide, functia trebuie sa apeleze `reject` cu `Error` si mesajul `Invalid array format`; (0.5 pts)
- Functia trebuie sa apeleze `reject` cu `string` cu valoarea `Bonus too small` daca `bonus` este mai mic de 10% din salariul maxim din `employees` array; (0.5 pts)
- Functia trebuie sa apeleze `resolve` cu un vector ce contine salariile marite pentru fiecare angajat; (0.5 pts)