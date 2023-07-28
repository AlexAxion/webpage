import { createContext, useState } from "react"

export const CalcContext = createContext()
const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  });

  const providerValue = {
    calc, setCalc
  }

  return (
    <body id='calculator_page'>
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
    </body>
  )
}

export default CalcProvider