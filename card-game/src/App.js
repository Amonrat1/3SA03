import React from 'react';
import './App.css';
import WordCard from './WordCard';


const word = "LABADVANCE";
function App() {
return (

<body >
      <h1>Game word card !</h1>
      <h2>ตอบดีๆน้าา เล่นได้แค่ 5 ครั้งนะไอสัส!! </h2>
      <h2>HINT :  240-301 </h2>
  <div>
      <WordCard value={word}/>
  </div>
</body>
);
}