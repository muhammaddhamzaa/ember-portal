import { helper } from '@ember/component/helper';

export function crudHelper() {
  return sessionStorage.getItem('mode');
}

export default helper(crudHelper);
