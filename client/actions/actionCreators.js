export function increment(postIndex) {
  return {
    type: 'INCREMENT_LIKES',
    postIndex
  }
}

export function addComment(postID, author, comment){
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

export function removeComment(postID, i) {
  return {
    type. 'REMOVE_COMMENT',
    i,
    postID
  }
}
