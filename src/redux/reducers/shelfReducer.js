const shelfReducer = (state = [], action) => {
  return state;
};

const counter = (state = [], action )=>{
  switch (action.type){
    case 'GET_COUNT':
    return [...state,action.payload];
  }
  return state;
}
export default shelfReducer;