'use client';

import { startProgress } from '@/core/signalRService';
import { useAppContext } from '@/providers/app.provider';
import { Progress } from '@nextui-org/progress';
import { useEffect } from 'react';

export default function ProgressPage() {
  const appContext = useAppContext();

  return (
    <>
      <Progress
        size="md"
        color="primary"
        showValueLabel={true}
        className="max-w-md"
        value={appContext.progress}
      />
      <button onClick={() => startProgress()}>start log running process</button>
    </>
  );
}
