#Subject 3
#TOPIC: REST

# Having the following application developed using NodeJS, complete the `POST` method on path `/students` :

- If no request body is present you should return a json with the following format: `{message: "Body is missing"}`. Response status code should be: `500`;
- If the request body properties are missing you should return a json with the following format: `{message: "Invlid body format"}`. Response status code should be: `500`;
- Student age should be positive, otherwise return a json with the following format: `{message: "Age should be a positive number"}`. Response status code should be: `500`; 
- If the student already exists in the array. Return a json with the following format: `{message: "Student already exists"}`.Response status code should be: `500`. Checking is done by `name`;
- If the request body is good, student should be added in the array and return a json with the following format: `{message: "Created"}`.Response status code should be: `201`;