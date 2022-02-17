export declare type UseInputVisibility = [
    type: HTMLInputElement['type'],
    toggleVisibility: () => void
];
/**
 * Toggle your text based input to password mode to hide or show the content
 */
declare const useInputVisibility: (clearType: HTMLInputElement['type']) => UseInputVisibility;
export default useInputVisibility;
