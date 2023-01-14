import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function RenderWindow({
  children,
  closeWindow,
}: {
  children: React.ReactNode;
  closeWindow: () => void;
}) {
  const exernalWindow = useRef<Window | null>(
    window.open('', 'oAuthNix', 'width=700,height=700'),
  );

  const containerEl = document.createElement('div');

  // useEffect(() => {
  //   const currentWindow = exernalWindow.current;

  //   return () => currentWindow?.close();
  // }, []);

  if (exernalWindow.current) {
    exernalWindow.current.document.title = 'oAuthNix';

    exernalWindow.current.document.body.appendChild(containerEl);

    exernalWindow.current.onbeforeunload = () => {
      closeWindow();
    };
    return containerEl ? createPortal(children, containerEl) : null;
  }
  return null;
}
