import { User, onAuthStateChanged } from 'firebase/auth';
import { ReactNode, createContext, use, useEffect, useState } from 'react';
import { auth } from '~/utils/firebase';

interface SessionContextType {
  user: User | null;
  isLoading: boolean;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function useSession(): SessionContextType {
  const context = use(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
}

export function SessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  return <SessionContext value={{ user, isLoading }}>{children}</SessionContext>;
}
