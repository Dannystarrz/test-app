import './App.css';

function App() {
  return (
    <div className="App">
      <div className='first-half'></div>
      <div className='second-half'>
        <form>
          <div className='align'>
            <label>
              CARDHOLDER NAME
            </label>
            <input type="text" placeholder='e.g. Jane Appleseed'></input>
          </div>
          <div className='align'>
            <label>
              CARD NUMBER
            </label>
            <input type="text" placeholder='e.g. 1234 5678 9123 0000'></input>
          </div>
          <div className='hori-align'>
            <div className='align'>
              <label>
                EXP. DATE (MM/YY)
              </label>
              <input className='smal' type="month"></input>
            </div>
            <div className='align'>
              <label>
                CVC
              </label>
              <input className='smal' type="" placeholder='e.g. 123'></input>
            </div>
          </div>
          <button className='btn'>Confirm</button>
        </form>
      </div >
      <div className='card-front'>
        <div className='circle-container'>
          <div className='circle-one'></div>
          <div className='circle-two'></div>
        </div>
        <p className='card-num'>0000 0000 0000 0000</p>
        <div className='name-expd'>
          <p className='crd-name'>JANE APPLESEED</p>
          <p className='expd'>00/00</p>
        </div>
      </div>
      <div className='card-back'></div>
    </div >
  );
}

export default App;
