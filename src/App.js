
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import Player from './everyPlayer/player';
import { useEffect } from 'react';
import { changeData } from './redux/allState/allState';
import { changeLetPlay } from './redux/letPlay/letPlay';

function App() {

  const data = useSelector((state) => state.data.data)
  const letPlay = useSelector((state) => state.letPlay.letPlay)
  const dispatch = useDispatch()

  function checkData(data,n1,n2,n3){
    return data.map((d) => {
      if(d.id === data[n1].id){
        return {
            ...data[n1],
            color : 'red'
        }
      }else if(d.id === data[n2].id){
        return {
            ...data[n2],
            color : 'red'
        }
      }else if(d.id === data[n3].id){
        return {
            ...data[n3],
            color : 'red'
        }
      }
      return d
     })
  }

  function winnerCheck(value){
    if(data[0].text === value && data[1].text === value && data[2].text === value){
      dispatch(changeData(checkData(data,0,1,2)))
      return 1
    }else if(data[3].text === value && data[4].text === value && data[5].text === value){
     dispatch(changeData(checkData(data,3,4,5)))
     return 1
    }else if(data[6].text === value && data[7].text === value && data[8].text === value){
     dispatch(changeData(checkData(data,6,7,8)))
     return 1
    }else if(data[0].text === value && data[4].text === value && data[8].text === value){
     dispatch(changeData(checkData(data,0,4,8)))
     return 1
    }else if(data[2].text === value && data[4].text === value && data[6].text === value){
     dispatch(changeData(checkData(data,2,4,6)))
     return 1
    }else if(data[0].text === value && data[3].text === value && data[6].text === value){
     dispatch(changeData(checkData(data,0,3,6)))
     return 1
    }else if(data[1].text === value && data[4].text === value && data[7].text === value){
     dispatch(changeData(checkData(data,1,4,7)))
     return 1
    }else if(data[2].text === value && data[5].text === value && data[8].text === value){
     dispatch(changeData(checkData(data,2,5,8)))
     return 1
    }
  }

  function refresh(data){
    let arr = []
    data.forEach((d) => {
      arr.push({
        id : d.id,
        text : '',
        color : 'white'
      })
    })
    dispatch(changeLetPlay(0))
    return arr
  }

  useEffect(() => {
    let valX = winnerCheck('X')
    let val0 = winnerCheck('0')
    
    if(valX === 1 || val0 === 1){
      setTimeout(() => {
        dispatch(changeData(refresh(data)))
      },2000)
    }

  },[letPlay])

  return (
    <div className="App">
    
       {
        data.map((d) => {
          return <Player props={d} key={d.id} />
        })
       }
    </div>
  );
}

export default App;
