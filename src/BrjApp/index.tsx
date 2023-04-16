import { GlobalAppState, StoreData, createStore, loadInitStorage, useEffectOnce } from '@brj-typescript/global-context';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { FC, ReactNode, useState } from 'react';

type AppProps = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  stickyHeader?: boolean;
};

export const BrjApp: FC<AppProps> = ({ children, header, footer, stickyHeader }) => {
  const [storeDataCache, setStoreDataCache] = useState<StoreData>({});
  useEffectOnce(() => setStoreDataCache(loadInitStorage()));
  const { theme } = storeDataCache;

  return (
    <GlobalAppState.Provider value={createStore(storeDataCache, setStoreDataCache)}>
      <ThemeProvider theme={createTheme({ palette: { mode: theme } })}>
        <Box className={`theme-${theme}`} sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {stickyHeader ? (
            <Box sx={{ zIndex: 1000, position: 'fixed', left: 0, top: 0, width: '100%' }}>{header}</Box>
          ) : (
            header
          )}
          {stickyHeader ? <Box sx={{ marginTop: '50px' }}>{children}</Box> : children}
          {footer}
        </Box>
      </ThemeProvider>
    </GlobalAppState.Provider>
  );
};
