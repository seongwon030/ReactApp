import './App.css';

function App() {
  return (
    <div className="App">
      <div className='sound'>
        <button>
          <img src="./sound.png"/>
        </button>
      </div>
      <div className='text1'>
        <h2>음악 장르의 취향,</h2>
        <h2><span style={{fontStyle: 'italic', textShadow: '0 0 5px #aebbc2'}}>사운드</span>와 함께 알아보기</h2>
      </div>
      <div className='text2'>
        <h3>소리가 첨부된 음악테스트를 통해</h3>
        <h3>자신의 음악장르를 찾아봐요!</h3>
      </div>
      <div className='text3'>
        <h4>음악 장르에는 하위장르를 포함하여 무수히 많은 장르가 존재합니다.</h4>
        <h4>이 테스트에는 많은 장르 중 대중적인 장르들을 선별하여 추천됩니다.</h4>
      </div>
      <hr/>
      <div className='test'>
        <button>테스트 시작하기</button>
      </div>
    </div>
  );
}

export default App;
