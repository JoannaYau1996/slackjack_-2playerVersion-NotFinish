import './App.css';
import { useState, useEffect, useRef } from 'react';
import { newPoker, newCard, allCards } from './Card';


let gamedeck = [];
let middle = Math.floor(newPoker.length / 2);
let a_deck = newPoker.slice(0, middle);
let b_deck = newPoker.slice(middle, newPoker.length);



export default function App() {
  let a_index = Math.floor(Math.random() * a_deck.length);
  let b_index = Math.floor(Math.random() * b_deck.length);
  let first = [];
  const [playerA, setPlayerA] = useState("");//name
  const [playerB, setPlayerB] = useState("");//name
  const [currentcard, setCurrentcard] = useState(a_deck[a_index]);
  const [index, setIndex] = useState(-1);
  const [deal, setDeal] = useState(false);
  const [adeck, setAdeck] = useState(a_deck.length);
  const [bdeck, setBdeck] = useState(b_deck.length);
  const [counter, setCounter] = useState(0);
  const [takecard, setTakecard] = useState([]);
  const [gamedecklength, setGamedecklength] = useState(gamedeck.lenght);
  const a_nameRef = useRef("");
  const b_nameRef = useRef("");


  useEffect(() => {
    document.addEventListener('keyup', start);
    return () => {
      document.removeEventListener('keyup', start);
    }
  });



  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    }
  });


  useEffect(() => {
    document.addEventListener('keyup', slap);
    return () => {
      document.removeEventListener('keyup', slap);
    }
  });



  useEffect(() => {
    if (index >= 0) {
      if (counter % 2 == 0) {
        b_deck.splice(b_deck.indexOf(currentcard), 1);
        setBdeck(b_deck.length)
        gamedeck.push(currentcard);
        b_index = Math.floor(Math.random() * b_deck.length);
      } else if (counter % 2 != 0) {
        a_deck.splice(a_deck.indexOf(currentcard), 1);
        setAdeck(a_deck.length)
        gamedeck.push(currentcard);
        a_index = Math.floor(Math.random() * a_deck.length);
      }
    }
  }, [counter]);




  function start(e) {
    if (index < 0) {
      if (e.code == "Space") {
        newCard();
        setPlayerA(a_nameRef.current.value);
        setPlayerB(b_nameRef.current.value);
        setIndex(prev => prev + 1);
        setCounter(0);
        a_deck = newPoker.slice(0, middle);
        b_deck = newPoker.slice(middle, newPoker.length);
        gamedeck = [];
        setCurrentcard(a_deck[a_index]);
      }
    }
  }

  function handleKeyUp(e) {
    if (index >= 0) {
      if (e.code === 'ArrowRight') {
        setTakecard([]);
        setGamedecklength(0);
        setCounter(prev => prev + 1);
        if (index >= 0 && index < 13) {
          setDeal(true);
          setIndex(prev => prev + 1);
        } else if (index == 13) {
          setIndex(1);
        }
        if (index >= 1) {
          if (counter % 2 == 0) {
            setCurrentcard(a_deck[a_index]);
          } else if (counter % 2 != 0) {
            setCurrentcard(b_deck[b_index]);
          }
        }
      }
    }
  }


  function slap(e) {
    if (index >= 1) {
      if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
        if (index == currentcard) {
          first.push(playerA);
          console.log(first)
        }
      } else if (e.code == 'Enter' || e.code == 'NumpadEnter') {
        if (index == currentcard) {
          first.push(playerB);
          console.log(first)
        }
      }
      if (first[0] == playerA) {
        setTakecard([playerB, playerA])
        b_deck.push(...gamedeck);
        setGamedecklength(gamedeck.length)
        setBdeck(b_deck.length)
        gamedeck = [];
      } else if (first[0] == playerB) {
        setTakecard([playerA, playerB])
        a_deck.push(...gamedeck);
        setGamedecklength(gamedeck.length)
        setAdeck(a_deck.length)
        gamedeck = [];
      }
    }

  }



  function Gamestart({ index, currentcard }) {
    return (
      <div>
        {index == -1 ?
          <>
            <div id="input">
              <label htmlFor="a">Player 1: </label>
              <input type="text" placeholder='Name' id='a' name='a' ref={a_nameRef} defaultValue="Joanna" />
              <br />
              <label htmlFor="b">Player 2: </label>
              <input type="text" placeholder='Name' id='b' name='b' ref={b_nameRef} defaultValue="Karen" />
            </div>
            <br /><br />
            <p>*Press "Space Bar" To Start*</p>

          </> :
          <div id="game-start">
            {!deal &&
              <>
                <br /><br />
                <p>* Press Arrow Right To Deal Card *</p>
                <p>{playerA} you go first.</p>
                <br /><br />
                <div id="left">
                  <b>{playerA}'s</b> total card: {adeck}
                </div>
                <br />
                <div id="right">
                  <b>{playerB}'s</b> total card: {bdeck}
                </div>
                <br /><br />
                <div className="rule">
                  <p><b>How To Play:</b></p>
                  <hr className="hr" />
                  <br />
                  <label>"Arrow Right" :</label>deal card
                  <br /><br />
                  <label>Player 1 "Shift" :</label>slap
                  <br /><br />
                  <label>Player 2 "Enter" :</label>slap
                </div>
              </>}
            {deal &&
              <>
                {takecard.length != 0 &&
                  <div>{takecard[1]} Win !<br />  {takecard[0]} take {gamedecklength} cards</div>}
                <div className='playground'>
                  <div className="poker">
                    <span className="cards">{allCards[index]}</span>
                    <p>Counter</p>
                  </div>
                  <div className="poker">
                    <span className="cards">{allCards[currentcard]}</span>
                    <p>Current Card</p>
                  </div>
                </div>
                <br /> <br />
                <div id="left">
                  <b>{playerA}'s</b> total card: {adeck}
                </div>
                <br />
                <div id="right">
                  <b>{playerB}'s</b> total card: {bdeck}
                </div>
                <br /> <br />
                <div className="rule">
                  <p><b>How To Play:</b></p>
                  <hr className="hr" />
                  <br />
                  <label>"Arrow Right" :</label>deal card
                  <br /><br />
                  <label>Player 1 "Shift" :</label>slap
                  <br /><br />
                  <label>Player 2 "Enter" :</label>slap
                </div>
              </>}
          </div>

        }

      </div>

    )
  }
  return (
    <main>
      <>
        <p>SlapJack</p>
        <Gamestart index={index} currentcard={currentcard} />
      </>
    </main >
  )

}
