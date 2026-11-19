import React,{usestate} from "react";

const Arrofobj = () =>{
    

    const [Empolyees ,seytEmpolyees] =usestate ([
        
        {id: 1,name: "abi",salary :80000}
        {id: 2,name: "aswin",salary:40000}
        {id: 3,name: "lenin",salary:30000}
        {id: 4,name: "akash",salary:20000}
        {id: 5,name: "shelton",salary:10000}


    ]);
    const [showfiltered ,setfiltered]=usestate(flase);


    const filteredEmpolyees =empolyees.filter(
        (emp) => emp.salary > 40000
    );

   return(
    <div>
        <h1>Empolyee details</h1>

        { (showfiltered ? filteredemployee :employe) map.((emp)=>(

            <div  key ={emp.id}>
                <h2>name:{emp.name}</h2>
                <h3>salary:${emp.salary}</h3>



            </div>

        ) ) }
        <button onclick={() => setdata (ture)}>
             fitered saalary Above 40000
          
        </button>
 </div>
   
   )                         
}                               
export default Arrofobj;
