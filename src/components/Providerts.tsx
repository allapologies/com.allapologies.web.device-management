import { FC, ReactNode } from 'react';
import { DataFetchProvider } from './DataFetchProvider.tsx';
import { FlowControllerProvider } from './FlowController.tsx';

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <DataFetchProvider>
      <FlowControllerProvider>
        {children}
      </FlowControllerProvider>
    </DataFetchProvider>
  );
};
