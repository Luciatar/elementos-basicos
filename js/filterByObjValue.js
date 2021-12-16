let data = [
    {
      "id": 1,
      "name": "Juana",
      "lastname": "Gonzalez"
    },
    {
      "id": 2,
      "name": "Jose",
      "lastname": "Perez"
    },
    {
      "id": 3,
      "name": "Pedro",
      "lastname": "Gonzalez"
    },
    {
      "id": 4,
      "name": "Maria",
      "lastname": "Suarez"
    },
  ];

  export const filterByObjValue = (arrayOfObj, valueToFind) =>{
    let res = []
    arrayOfObj.forEach(item => {
      for (const [key, value] of Object.entries(item)) {
        if(value === valueToFind){
          res.push(item)
        }
      }
    });
      return res
  }
  
  console.log("-------------Data------------")
  console.log(data)
  console.log("-----------Filtered----------")
  console.log(filterByObjValue(data, "Gonzalez"))