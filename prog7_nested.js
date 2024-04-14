//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// b = employee.flat()
// console.log(b);


// print all employee name 

// for(let i =1;i<b.length;i+=6){
//     console.log(b[i]);
// }
//print total numbers of employee

// count = 0
// for(let i of employee){
//     count++
// }

// console.log(`Total no of employees = ${count}`);


//print developer employee details

// for(let i of employee){

//     for(let j of i){
//         if(j == 'developer'){
//             console.log(i);
//         }
//     }
// }

// for(let i of employee){
//     if(i[2] == 'developer')
//     {
//         console.log(i);
//     }
// }

// print details of employee Laisha

// for(let i of employee){
//     for(let j of i){
//         if(j == 'Laisha'){
//             console.log(i);
//         }
//     }
// }



//sort employee based on their salary in descending order

// employee.sort((n1,n2)=>n2[4]-n1[4])
// console.log(employee);


//sort employee based on their experience in ascending order

// employee.sort((n1,n2)=>n1[5]-n2[5])
// console.log(employee);


// print the employ name whose have the higest salary

employee.sort((n1,n2)=>n2[4]-n1[4])

for(i of employee){
   console.log(i[1]);
   break
}

// console.log(employee[0][1])


