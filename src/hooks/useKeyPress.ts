import { useEffect } from 'react';

/**
 * Choose the key you want to respond and pass it an action, a function of any
 * kind.
 * @param action
 * @param keyCode
 */
const useKeyPress = (action: () => unknown, keyCode: string): void => {
  const keyHandler = (e: KeyboardEvent) => {
    const { key } = e;
    if (action && key === keyCode) action();
  };

  useEffect(() => {
    addEventListener('keydown', keyHandler);
    return () => {
      removeEventListener('keydown', keyHandler);
    };
  }, []);
};

export default useKeyPress;
