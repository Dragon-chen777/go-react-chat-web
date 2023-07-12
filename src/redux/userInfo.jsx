const USER_SET = Symbol()

const _state = {
  user: {}
}
export const userAction = {
  set(user) {
    return {
      type: USER_SET,
      user
    }
  }
}

export default function userInfoReducer(state = _state, action) {
  if (action.type === USER_SET) return { ...state, user: action.user }
  return state
}