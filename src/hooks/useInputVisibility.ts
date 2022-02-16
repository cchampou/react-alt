import { useCallback, useMemo, useState } from 'react';

export type UseInputVisibility = [
  type: HTMLInputElement['type'],
  toggleVisibility: () => void,
];

/**
 * Toggle your text based input to password mode to hide or show the content
 */
const useInputVisibility = (
  clearType: HTMLInputElement['type'],
): UseInputVisibility => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const type = useMemo(() => (visible ? clearType : 'password'), [visible]);
  return [type, toggleVisibility];
};

export default useInputVisibility;
