'use client';

import { useEffect, useState } from 'react';
import { clearSession, getStoredSession, LandingSession, onSessionChange } from '@/lib/landing-auth';

export function useLandingSession() {
  const [session, setSession] = useState<LandingSession | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const syncSession = () => {
      setSession(getStoredSession());
      setReady(true);
    };

    syncSession();
    return onSessionChange(syncSession);
  }, []);

  return {
    session,
    ready,
    logout: clearSession,
  };
}
