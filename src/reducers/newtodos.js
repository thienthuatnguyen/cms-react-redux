const newtodos = (state = [], action) => {
  console.log(action.text);
  switch (action.type) {
   
    case 'ADD_NEW_TODO':
      return [
        ...state,
        {
          text: action.text
        }
      ]
    default:
      return state
  }
}

export default newtodos
