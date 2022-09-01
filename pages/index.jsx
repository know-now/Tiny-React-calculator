function App() {
  return (
    <>
      <div className="container">
        <div className="calculator-grid">
          <div className="output">
            <div className="previous-operand"></div>
            <div className="current-operand"></div>
          </div>
          <button className="span-two">AC</button>
          <button>DEL</button>
          <button>÷</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>×</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
          <button>.</button>
          <button>0</button>
          <button className="span-two">=</button>
        </div>
      </div>

      <style jsx>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        .container {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        .calculator-grid {
          display: grid;

          grid-template-columns: repeat(4, 6rem);
          grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);
          margin-top: 5vh;        
          
        }

        .calculator-grid > button {
          cursor: pointer;
          font-size: 2rem;
          border: 1px solid #ccc;
          outline: none;
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 5%;
        }
        .span-two {
          grid-column: span 2;
        }

        .calculator-grid > button:hover,
        .calculator-grid > button:focus {
          background-color: rgba(255, 255, 255, 0.9);
        }

        .output {
          grid-column: 1 / -1;
          background-color: rgba(0, 0, 0, 0.75);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-around;
          padding: 0.75rem;
          word-wrap: break-word;
          word-break: break-all;
          border-radius: 2%;
          

        }
        .output .previous-operand {
          color: rgba(255, 255, 255, 0.75);
        }
        .output .current-operand {
          color: white;
          font-size: 2.5rem;
        }
      `}</style>
    </>
  );
}
export default App;
