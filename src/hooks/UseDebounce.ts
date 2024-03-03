import { useEffect, useCallback } from 'react';
import { Country } from '../types';

export default function useDebounce(
  effect: () => void,
  dependencies: [Country[] | undefined, string],
  delay: number
) {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}
