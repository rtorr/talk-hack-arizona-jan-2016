import Immutable from 'immutable';

let Store = Immutable.List();
let index = 0;

export function update(state) {
  Store = Store.push(Immutable.fromJS(state));
  index = Store.size - 1;
  return Store.get(index).toJS();
}

export function timeTravel(direction) {
  const forward = direction === 'forward';
  if (forward) {
    if ((index + 1) !== (Store.size - 1)) {
      index += 1;
    }
  }
  if (!forward) {
    if (index - 1 >= 0) {
      index -= 1;
    }
  }
  return Store.get(index).toJS();
}

export function get() {
  return Store.get(index).toJS();
}

export function setInitial(data) {
  Store = Store.push(Immutable.fromJS(data));
  return Store.get(index).toJS();
}