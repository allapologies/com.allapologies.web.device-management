import { FC, ReactNode } from 'react';
import { DataFetchProvider } from './DataFetchProvider';
import { FlowProvider } from './flows';

export const Providers: FC<{ children: ReactNode }> = ({ children }) => (
  <DataFetchProvider>
    <FlowProvider>
      {children}
    </FlowProvider>
  </DataFetchProvider>
);
