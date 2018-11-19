import { helper } from '@ember/component/helper';

export function displayModuleName() {
  return sessionStorage.getItem('module');
}

export default helper(displayModuleName);
