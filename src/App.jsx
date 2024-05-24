import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

function App() {
  const [] = useState();

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIndentifier, newValue) {
    /*
    inputIndentifier คือ property เอาไว้เก็บค่า 4 ดังต่อไปนี้ 
      initialInvestment, 
      annualInvestment, 
      expectedReturn, 
      duration 
    ซึ่งขึ้นอยู่กับ User จะเลือกเปลี่ยนแปลงค่า text box กล่องไหน
   */

    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIndentifier]: +newValue
      }
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      { !inputIsValid && <p className="center">จำนวนปีที่ลงทุนต้องเป็น 1 ปีขึ้นไป</p>  }
      { inputIsValid && <Results userInput={userInput} /> }
    </>
  )
}

export default App
