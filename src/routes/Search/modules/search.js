// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_SEARCH = 'UPDATE_SEARCH'
// ------------------------------------
// Actions
// ------------------------------------

export function updateSearch (value) {
  return {
    type: UPDATE_SEARCH,
    payload: value
  }
}


export const actions = {
  updateSearch
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_SEARCH] : (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = ""
export default function searchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
