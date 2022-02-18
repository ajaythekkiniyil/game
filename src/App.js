import '../src/style.css'
import Die from '../src/Die.js'
import { useState } from 'react'
function App() {
  const [array,setArray]=useState(allNewDice())
  function allNewDice(){
    const newDices=[]
    for(let i=0;i<10;i++){
      let obj=
      {
        value : Math.floor(Math.random() * 6 + 1),
        isHeld : false,
        id: i
      }
      newDices.push(obj)
    }
    return newDices

  }
  function holdDice(id){
        setArray(oldV=>(
          oldV.map(Dices=>(
            Dices.id===id ? {...Dices,isHeld:!Dices.isHeld} : Dices
          ))
        ))
  }
  return(
    <main>
        <div className="container">
          <div className="row pt-5">
            {
              array.map((items,index)=>{
                return(
                  <div key={items.id} className="col-2 dies--style">
                    <Die {...items} holdDice={holdDice}/>
                </div>
                )
              })
            }
          </div>
          <button type="button" className="btn btn-primary" onClick={()=>setArray(allNewDice)}>Roll</button>
        </div>
    </main>
  )
}

export default App;
