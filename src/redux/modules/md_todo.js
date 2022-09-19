// src/redux/modules/md_todo.js


// Action Value
const INPUT = "INPUT";
const REMOVE = "REMOVE";
const COMPLETE = "COMPLETE";

// Action Creator
export const addTodo = (addTodo) => {
  return {
    type: INPUT,
    payTitle: addTodo.title,
    payBody: addTodo.body,
  };
};
export const removeTodo = (id) => {
  return {
    type: REMOVE,
    payId : id,
  };
};
export const completeTodo = (todo) => {
  return {
    type: COMPLETE,
    compId : todo.id,
    compTitle : todo.title,
    compBody : todo.body,
    compIsDone : todo.isDone,
  };
};

// Initial State
const initialState = [{
    id: 1,
    title: "자바스크립트를 배우자",
    body: "구글링을 통해 간단한 자바스크립트 언어를 연습하자",
    isDone: true,
  },
  {
    id: 2,
    title: "리액트를 배우자",
    body: "스파르타에 가입해서 항해99 2주 단기 과정을 통하여 간단한 'to do list'를 만들어 리액트기초 공부하기",
    isDone: false,
  }
];

// Reducer
const MdTodo = (state = initialState, action) => {
  let today = new Date();  
  const year = today.getFullYear();
  const month = ("00" + (today.getMonth()+1)).slice(-2);
  const date = ("00" + (today.getDate())).slice(-2);
  const hours = ("00" + (today.getHours())).slice(-2);
  const minutes = ("00" + (today.getMinutes())).slice(-2);
  const seconds = ("00" + (today.getSeconds())).slice(-2);
  const milliseconds = today.getMilliseconds();
    
    switch (action.type) {
        case INPUT:
          return [...state, {
            id: `${year}${month}${date}${hours}${minutes}${seconds}${milliseconds}`,
            title: action.payTitle,
            body: action.payBody,
            isDone: false
          }];
        case REMOVE:
          return [...state.filter((state) => state.id !== action.payId)];
        case COMPLETE:
          return [...state.filter((state) => state.id !== action.compId),
          {
            id: action.compId,
            title: action.compTitle,
            body: action.compBody,
            isDone: !action.compIsDone
          }];

      default:
        return state;
    }
  };

// export default reducer
export default MdTodo;