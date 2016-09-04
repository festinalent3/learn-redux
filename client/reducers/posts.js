// reducer takes action and COPY of the current state, and returns
// the updated store

function posts(state = [], action) {
  console.log('The post will change');
  console.log(state, action);

  // do stuff here... !

  return state
}

export default posts;
