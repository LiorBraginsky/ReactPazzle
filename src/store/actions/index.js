import { MOVE, RELOAD, EAZY_WIN } from "../constants/";

export function move(payload) {
  return {
    type: MOVE,
    payload
  };
}

export function reload() {
  return {
    type: RELOAD
  };
}

export function eazyWin(payload) {
  return {
    type: EAZY_WIN,
    payload
  };
}

