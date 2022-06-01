import './style.css'


function CharCard(props) {

  return(
    <>
    
      <div className="cont--card">
        <p className='name--char'>{props.char.name}</p>
        <div>
          <img className='img--char' src={props.char.image} /> 
        </div>
        <div className='details--char'>
          <p className='p--created'>CREATED:{props.char.created}</p>
          <div className='cont--status'>
            <p>Specie: {props.char.species}</p>
            <p>{props.char.status}</p>
          </div>
          <div className='cont--origin'>
            <p>{props.char.origin.name}</p>
            <p>{props.char.gender}</p>
          </div>
          <div className='cont--localization'>
            <div><p className='p--localization'>&#x21d3; LOCALIZATION &#x21d3;</p></div>
            <div className='localization'><p>{props.char.location.name}</p></div>
          </div>
        </div>
        
               
        
      </div>
      
    </>
  )

}

export default CharCard