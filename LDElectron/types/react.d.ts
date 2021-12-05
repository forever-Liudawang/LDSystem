import * as React from 'react';

declare module 'react' {
  interface HTMLProps<T> {
    size?: string;
  }
}
