import CharCard from "../CharCard/index."

function Characters(props){

  return(
    <>
    {props.characterList.results !== undefined ? props.characterList.results.map((e)=>{
  return(
    <>
     <li key={e.id}>
       <CharCard char={e}/>
      </li>

    </>
  )

}) : ''  }
    </>
  )

}

export default Characters

