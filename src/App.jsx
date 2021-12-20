import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('...')
  const [linea2, setLinea2] = useState('...')
  const [imagenSelect, setImagenSelect] = useState('./img/Espera.png')
  
  const cambiarMensaje = (e,n) => {    
    (n===1)?setLinea1(e.target.value):setLinea2(e.target.value)
  }
  const cambiarImagen = (e) => {
    setImagenSelect(`./img/${e.target.value}.png`)
  }
  const onclickSubmit = () => {
   
    html2canvas(document.querySelector("#principal")).then(canvas => {
      let img    = canvas.toDataURL("image/png");
      let link = document.createElement('a');
      link.download = 'memes.png';
      link.href = img
      link.click();

      
  });
  }
  return (
    <div className="App">

        <label >Ingrese imagen:</label>
        <br />
        <select name="" id=""   onChange={(e)=>{cambiarImagen(e)}}>
          <option value=''></option>
          <option value='futurama'>Futurama</option>
          <option value='history'>History channel</option>
          <option value='bebe'>Bebe</option>
          <option value='perro'>Perro</option>
          <option value='llamas'>Casa en llamas</option>
          <option value='padrino'>Padrino</option>          
        </select>
        <br />
      
      <input type="text"  placeholder='Linea 1' onChange={ (e)=>cambiarMensaje(e,1) }/>
      <br />
      
      <input type="text" placeholder='Linea 2' onChange={ (e)=>cambiarMensaje(e,2)}/>
      <br />
      
      <button onClick={()=> onclickSubmit()}>Exportar</button>

        <hr />
        <div className="principal" id='principal'>
          
            <span className=' linea'>{linea2}</span>
            <img src={require(`${imagenSelect}`)} alt="" />        
            <span className=' linea'>{linea1}</span>

        </div>
        <hr />
      
    <div className="principal2" id='principal2'>

    </div>
    </div>

  );
}

export default App;
