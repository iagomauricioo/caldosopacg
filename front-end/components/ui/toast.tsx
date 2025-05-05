"use client";

import * as React from "react";
import { X } from "lucide-react";

type ToastVariant = "default" | "success" | "destructive" | "warning";

const getVariantClasses = (variant: ToastVariant = "default") => {
  switch (variant) {
    case "success":
      return "border-green-500 bg-green-500 text-white";
    case "destructive":
      return "border-red-500 bg-red-500 text-white";
    case "warning":
      return "border-orange-500 bg-orange-500 text-white";
    default:
      return "border-gray-200 bg-white text-gray-900";
  }
};

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ToastVariant;
  onClose?: () => void;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant = "default", onClose, ...props }, ref) => {
    const variantClasses = getVariantClasses(variant);

    return (
      <div
        ref={ref}
        className={`group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all ${variantClasses} ${
          className || ""
        }`}
        {...props}
      >
        <div className="flex-1">{props.children}</div>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-2 top-2 rounded-md p-1 text-current opacity-70 hover:opacity-100 focus:opacity-100 focus:outline-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        )}
      </div>
    );
  }
);
Toast.displayName = "Toast";

export { Toast };
