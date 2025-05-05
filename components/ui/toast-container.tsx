"use client";
import { Toast } from "./toast";
import { useToast } from "@/hooks/use-toast";

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-0 right-0 z-50 flex flex-col gap-2 p-4 max-w-md w-full">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          variant={toast.variant}
          onClose={() => removeToast(toast.id)}
          className="animate-slide-in-right"
        >
          {toast.message}
        </Toast>
      ))}
    </div>
  );
}
