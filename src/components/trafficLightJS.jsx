import { useEffect, useState } from 'react';
import '../styles/trafficLight.css';

const lightConfig = [{
  start: 0,
  end: 20000,
  color: 'red',
},{
  start: 20001,
  end: 40000,
  color: 'yellow',
},{
  start: 40001,
  end: 56500,
  color: 'green',
},{
  start: 56501,
  end: 57000,
  color: 'black',
},{
  start: 57001,
  end: 58500,
  color: 'green',
},{
  start: 58501,
  end: 59000,
  blink: true,
  color: 'black',
},{
  start: 59001,
  end: 60000,
  blink: true,
  color: 'green',
}];
const TrafficLightJS = function() {
  const [running, setRunning] = useState(false);
  const [tcSec, setTcSec] = useState(0);
  const [color, setColor] = useState('black');
  const [blink, setBlink] = useState(false);
  useEffect(() => {
    if (running) {
      setTcSec(0);
      const id = setInterval(() => {
        setTcSec((originTcSec) => {
          return originTcSec > 60000 ? 0 : originTcSec + 500;
        });
      }, 500);
      return () => clearInterval(id);
    }
  }, [running])
  useEffect(() => {
    const matchConfig = lightConfig.find(({start, end}) => {
      return tcSec > start && tcSec <= end;
    })
    if(matchConfig) {
      setColor(matchConfig.color);
      setBlink(matchConfig.blink);
    } else {
      setColor('black');
      setBlink(false);
    }
  }, [tcSec]);
  return <div className='traffic-wrapper' style={{
    marginTop: '100px'
  }}>
    常规react组件实现红绿灯动画 {tcSec} {color}
    <p>
    <button onClick={() => {
      setRunning(true);
    }}>开始运转</button>
    </p>
    <p>
    <button onClick={() => {
      setRunning(false);
    }}>结束运转</button>
    </p>
    <div className='traffic-border'>
      <div className='one-light-wrapper'>
        <div className='traffic-light' style={{
          backgroundColor: color === 'red' ? 'red' : 'black',
          borderColor: color === 'red' ? 'red' : 'black',
        }}>
        </div>
      </div>
      <div className='one-light-wrapper'>
        <div className='traffic-light' style={{
          backgroundColor: color === 'yellow' ? 'yellow' : 'black',
          borderColor: color === 'yellow' ? 'yellow' : 'black',
        }}>
        </div>
      </div>
      <div className='one-light-wrapper'>
        <div className='traffic-light' style={{
          backgroundColor: color === 'green' ? 'green' : 'black',
          borderColor: color === 'green' ? 'green' : 'black',
        }}>
        </div>
      </div>
    </div>
  </div>
}
export default TrafficLightJS;