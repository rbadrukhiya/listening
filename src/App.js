import logo from './logo.svg';
import './App.css';
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var car=['bmw' , 'od' , 'volvo']
function App() {
  return (

    <>
      <ul>
        {
          arr.map ((item, k)=>{
            return(
              <>
              <li>{arr[item]}    {arr[k]}   </li>
              
              </>
            )
            })
        }
      </ul>
      <ul>
        {
          car.map((cr, k)=>{
            return(
              <>
              <li>{car[k ]}</li>
              </>
            )
          })
        }
      </ul>
    </>
  );
}

export default App;
