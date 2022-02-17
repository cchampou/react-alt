/**
 * Choose the key you want to respond and pass it an action, a function of any
 * kind.
 * @param action
 * @param keyCode
 */
declare const useKeyPress: (action: () => unknown, keyCode: string) => void;
export default useKeyPress;
