import type { ReactElement } from 'react';

export interface OverlayType {
  onClick?: () => undefined | void;
}

export type OverlaysType = OverlayType[];

export interface OverlayContextType {
  overlays: OverlaysType;
  setOverlays: (data: OverlaysType) => void;
}

export interface OverlayProviderProperties {
  children?: ReactElement;
}
