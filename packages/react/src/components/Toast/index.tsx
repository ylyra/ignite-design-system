import * as RadixToast from "@radix-ui/react-toast";
import { X } from "phosphor-react";
import { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, Description, Title, Viewport } from "./styles";

export type ToastItemProps = {
  id: string;
  title?: string;
  description?: string;
  status?: "info" | "success" | "warning" | "error";
  onDismiss?: () => void;
};

type ToastContextProvider = {
  toast: {
    (toast: Omit<ToastItemProps, "id">): void;
    success(toast: Omit<ToastItemProps, "id" | "status">): void;
    error(toast: Omit<ToastItemProps, "id" | "status">): void;
    warning(toast: Omit<ToastItemProps, "id" | "status">): void;
    info(toast: Omit<ToastItemProps, "id" | "status">): void;
  };
};

export type ToastProps = {
  duration?: number;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  children: ReactNode;
};

const ToastContext = createContext({} as ToastContextProvider);

export function Toast({
  duration = 5000,
  position = "top-right",
  children,
}: ToastProps) {
  const [toasts, setToasts] = useState<ToastItemProps[]>([]);

  function createToast(toast: ToastItemProps) {
    setToasts((toasts) => [
      ...toasts,
      {
        onDismiss: () => {},
        ...toast,
      },
    ]);
  }

  const toast = (toast: Omit<ToastItemProps, "id">) => {
    const id = uuidv4();
    createToast({
      id,
      ...toast,
    });
  };
  toast.success = (toast: Omit<ToastItemProps, "id" | "status">) => {
    const id = uuidv4();
    createToast({
      id,
      ...toast,
      status: "success",
    });
  };
  toast.error = (toast: Omit<ToastItemProps, "id" | "status">) => {
    const id = uuidv4();
    createToast({
      id,
      ...toast,
      status: "error",
    });
  };
  toast.warning = (toast: Omit<ToastItemProps, "id" | "status">) => {
    const id = uuidv4();
    createToast({
      id,
      ...toast,
      status: "warning",
    });
  };
  toast.info = (toast: Omit<ToastItemProps, "id" | "status">) => {
    const id = uuidv4();
    createToast({
      id,
      ...toast,
      status: "info",
    });
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      <RadixToast.Provider duration={duration}>
        {toasts.map((item) => (
          <Container
            key={item.id}
            type={item.status}
            onOpenChange={item.onDismiss}
          >
            <Title>
              {item.title}
              <RadixToast.Close>
                <X size={20} />
              </RadixToast.Close>
            </Title>
            {item.description && (
              <Description asChild>
                <span>{item.description}</span>
              </Description>
            )}
          </Container>
        ))}
        <Viewport position={position} />
      </RadixToast.Provider>
      {children}
    </ToastContext.Provider>
  );
}

Toast.displayName = "Toast";

export const useToast = () => {
  return useContext(ToastContext);
};
