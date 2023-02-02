function applyBonus(employees, bonus){
    return new Promise((resolve, reject) =>{
      if(typeof bonus !="number"){
        reject(new Error("Invalid bonus"))
      }
      if(employees.some(e=>typeof e.name!=="string" || typeof e.salary !=="number")){
        reject(new Error("Invalid array format"))
      }
      let salMax = Math.max(...employees.map(e=>e.salary))
      if (bonus<salMax*0.1){
        reject("Bonus too small")
      }
      let salB=employees.map(x=>x={
        name:x.name,
        salary:x.salary+bonus
      })
      resolve(salB)
    })
}

let app = {
    applyBonus: applyBonus,
}

module.exports = app;