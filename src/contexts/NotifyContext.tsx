import React, { createContext, useContext, useState } from "react";
import { Alert } from "src/components/feedback/Alert";

type KDrawerType = {
  showAlert: (success?: boolean, onHideCallback?: () => void) => void;
}

const NotifyContext = createContext<KDrawerType>({
  showAlert: () => { }
});

export function useNotifier() {
  const { showAlert } = useContext(NotifyContext);
  return { showAlert };
};

const NotifyProvider = ({ children }: { children: React.ReactNode }) => {
  const [alertConfig, setAlertConfig] = useState({ visible: false, success: false });


  const onShowAlert = (success: boolean = false, onHideCallback?: () => void) => {
    setAlertConfig({ success, visible: true })
    setTimeout(() => {
      setAlertConfig({ ...alertConfig, visible: false });
      onHideCallback && onHideCallback();
    }, 750);
  };

  const contextValue = {
    showAlert: (success?: boolean, onHideCallback?: () => void) => onShowAlert(success, onHideCallback)
  };

  return (
    <NotifyContext.Provider value={contextValue}>
      {children}
      <Alert {...alertConfig} />
    </NotifyContext.Provider>
  );
};


export default NotifyProvider;
