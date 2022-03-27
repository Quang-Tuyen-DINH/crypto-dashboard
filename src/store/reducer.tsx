import botM1 from "../interfaces/botM1";
import * as types from "./constants";

const initialState = {
  scenarioBotM1: []
};

const reducer = (state = initialState, action: any) => {
  switch(action.type) {
    case types.ADD_CFG_BOT_M1:
      return {
        ...state,
        scenarioBotM1: state.scenarioBotM1.findIndex((bot: botM1) => bot.id === action.payload.id) >= 0 ? state.scenarioBotM1 : state.scenarioBotM1.concat(action.payload)
      };
      case types.DELETE_CFG_BOT_M1:
        return {
          ...state,
          scenarioBotM1: state.scenarioBotM1.filter((bot: botM1) => bot.id !== action.payload)
        };
    default:
      return state;
  }
}

export default reducer;