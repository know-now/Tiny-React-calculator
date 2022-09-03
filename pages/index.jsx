import { useReducer } from "react";
import DigitButton from "./../components/DigitButton";
import OperationButton from "./../components/OperationButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit == 0 && state.currentOperand == 0) return state;
      if (payload.digit == "." && state.currentOperand.includes(".")) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""} ${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }
  }
}
function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case " + ":
      computation = prev + current;
      break;
    case " - ":
      computation = prev - current;
      break;
    case " * ":
      computation = prev * current;
      break;
    case " / ":
      computation = prev / current;
      break;
  }
  return computation.toString();
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {previousOperand}
            {operation}
          </div>
          <div className="current-operand">{currentOperand}</div>
        </div>
        <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          AC
        </button>
        <button>DEL</button>
        <OperationButton operation=" / " dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation=" × " dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation=" + " dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation=" - " dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />

        <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        >
          =
        </button>
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
          justify-content: center;
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
