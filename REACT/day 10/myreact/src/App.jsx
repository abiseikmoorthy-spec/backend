import {useState} from 'react'


const App = () =>{

   
    
    const [Empolyees ,seytEmpolyees] =useState ([
        
        {id: 1,name: "abi",salary :80000},
        {id: 2,name: "aswin",salary:40000},
        {id: 3,name: "lenin",salary:30000},
        {id: 4,name: "akash",salary:20000},
        {id: 5,name: "shelton",salary:10000}


    ]);

const setdata =()=>{

const copy = [...Empolyees]
  
   
    const filteredempolyees =Empolyees.filter( (e,i) =>e.salary > 40000 );

    seytEmpolyees(filteredempolyees)

}
    
   return(

    <>
    <div>
        <h1>Empolyee details</h1>

        { Empolyees.map((e,i)=>(

            <div  key ={i}>
                <h2>name:{e.name}</h2>
                <h3>salary:${e.salary}</h3>
                <p>{e.id}</p>

            </div>

        ) ) }

        
        <button onClick={ setdata }>
             fitered saalary Above 40000
          
        </button>

  </div>

 </>
   
   )                         
}                               
export default App;
