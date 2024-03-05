import { Button, Html } from '@react-email/components';
import * as React from 'react';

export default function ConfirmEmail() {
  return (
    <Html>
      <Button
        style={{ background: '#000', color: '#fff', padding: '12px 20px' }}
      >
        Clique aqui
      </Button>
    </Html>
  );
}
