import type { ReactElementProps } from 'types';

export default function (props: ReactElementProps) {
  return (
    <div {...props} className={`flex mx-auto ${props.className ? props.className : ''}`}>
      {props.children}
    </div>
  );
}
