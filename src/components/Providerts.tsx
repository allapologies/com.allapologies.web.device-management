import { FC, ReactNode } from 'react';
import { DataFetchProvider } from './DataFetchProvider.tsx';
import { FlowProvider } from './flows';

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <DataFetchProvider>
      <FlowProvider>
        {children}
      </FlowProvider>
    </DataFetchProvider>
  );
};
