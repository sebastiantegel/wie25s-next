"use client";

import { ReactNode } from "react";

export enum ButtonType {
  default,
  danger,
  info,
}

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type: ButtonType;
};

export const Button = ({ children, onClick, type }: ButtonProps) => {
  switch (type) {
    case ButtonType.default:
      return (
        <button
          className="p-3 border border-green-600 bg-green-900 rounded"
          onClick={onClick}
        >
          {children}
        </button>
      );

    case ButtonType.danger:
      return (
        <button
          className="p-3 border border-amber-600 bg-amber-900 rounded"
          onClick={onClick}
        >
          {children}
        </button>
      );

    case ButtonType.info:
      return (
        <button
          className="p-3 border border-blue-600 bg-blue-900 rounded"
          onClick={onClick}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          className="p-3 border border-green-600 bg-green-900 rounded"
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};
