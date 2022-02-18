import React from 'react'

function Die(props) {
  const {holdDice,...rest} =props
  const styles={
    backgroundColor:props.isHeld ?  '#59E391' :'none '
  }
  return (
    <div className='die' style={styles} onClick={()=>holdDice(rest.id)}>
        <h1>{rest.value}</h1>
    </div>
  )
}

export default Die