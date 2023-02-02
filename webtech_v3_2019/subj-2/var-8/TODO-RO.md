#Subiect 3
#Tematica: REST

# Avand urmatoa aplicatie dezvoltata in NodeJS, sa se completeze metoda de tip `POST` de pe calea `/students` :

- Daca nu exista body pentru cererea http, trebuie sa returnati un JSON cu urmatorul format: `{message: "Body is missing"}`. Codul de raspuns trebuie sa fie: `500`;
- Daca body-ul nu respecta formatul unui student, trebuie sa returnati un JSON cu urmatorul format: `{message: "Invlid body format"}`. Codul de raspuns trebuie sa fie: `500`;
- Varsta unui student trebuie sa fie mai mare ca 0.In caz contrar trebuie sa returnati un JSON cu urmatorul format: `{message: "Age should be a positive number"}`. Codul de raspuns trebuie sa fie: `500`; 
- Daca studentul exista deja in vector, trebuie sa returnati un JSON cu urmatorul format: `{message: "Student already exists"}`.Codul de raspuns trebuie: `500`. Unicitatea se face in functie de nume;
- Daca body-ul are formatul corespunzator, studentul trebuie adaugat in vector si sa returnati un JSON cu urmatorul format: `{message: "Created"}`. Codul de raspuns trebuie sa fie: `201`;