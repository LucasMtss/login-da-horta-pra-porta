// eslint-disable-next-line import/no-extraneous-dependencies
import { History } from 'history';
import { LastLocationType } from 'react-router-last-location';

export function secureGoBack(
  history: History,
  lastRoute: LastLocationType,
  defaultRoute: string,
): void {
  if (lastRoute) {
    history.goBack();
  } else {
    history.push(`${defaultRoute}`);
  }
}
