import { ReactNode } from 'react';
import { DataFetchProvider } from './DataFetchProvider';
import { FlowProvider } from '../flows';

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <DataFetchProvider>
      <FlowProvider>
        {children}
      </FlowProvider>
    </DataFetchProvider>
  );
}
