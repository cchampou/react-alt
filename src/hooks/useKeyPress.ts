import { useEffect } from "react";

const useKeyPress = (action: Function, keyCode: string) => {

  const keyHandler = (e: KeyboardEvent) => {
    const { key } = e;
    if (action && key === keyCode) action();
  }

  useEffect(() => {
    addEventListener('keydown', keyHandler);
    return () => {
      removeEventListener('keydown', keyHandler)
    }
  }, [])
}

export default useKeyPress
