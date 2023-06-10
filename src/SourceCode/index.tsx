'use client';

import { FC } from 'react';
import { Color } from '@brj-typescript/global-context';
import { Box } from '@mui/material';

type SourceCodeProps = {
  code: string;
  format?: 'json';
};

export const SourceCode: FC<SourceCodeProps> = ({ code, format }) => (
  <Box sx={{ background: Color.grayLight, border: `1px solid ${Color.gray}`, padding: '.5em' }}>
    <pre style={{ fontFamily: 'monospace', fontSize: '10pt' }}>{code}</pre>
  </Box>
);
