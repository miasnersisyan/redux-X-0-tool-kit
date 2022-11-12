
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { changeData } from '../redux/allState/allState';
import { changeLetPlay } from '../redux/letPlay/letPlay';


function Player({props}){
    const dispatch = useDispatch()
    const letPlay = useSelector((state) => state.letPlay.letPlay)
    const data = useSelector((state) => state.data.data)
  return(
    <div className="w1" style={{backgroundColor : `${props.color}`}} onClick = {() => {
       if(letPlay === 0){
        dispatch(changeLetPlay(1))
          if(props.text === ''){
            dispatch(changeData(data.map((d) => {
                if(d.id === props.id){
                    return {
                        ...props,
                        text : 'X'
                    }
                  
                }
                return d
            })))
          }
          
       }else{
        dispatch(changeLetPlay(0))
        if(props.text === ''){
            dispatch(changeData(data.map((d) => {
                if(d.id === props.id){
                    return {
                        ...props,
                        text : '0'
                    }
                  
                }
                return d
            })))
          }
         
       }
    }}>
      {props.text}
    </div> 
  )
}

export default Player