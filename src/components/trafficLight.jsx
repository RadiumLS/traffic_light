import '../styles/trafficLight.css';

const TrafficLight = function() {
  return <div className='traffic-wrapper'>
    纯CSS实现红绿灯动画
    <div className='traffic-border'>
      <div className='one-light-wrapper'>
        <div className='red-light traffic-light'>
        </div>
      </div>
      <div className='one-light-wrapper'>
        <div className='yellow-light traffic-light'>
        </div>
      </div>
      <div className='one-light-wrapper'>
        <div className='green-light traffic-light'>
        </div>
      </div>
    </div>
  </div>
}
export default TrafficLight;