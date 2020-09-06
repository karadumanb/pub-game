import React, { createContext, useContext, useState } from "react";
import { Alert } from "src/components/feedback/Alert";
import Modal from "src/components/feedback/Modal";

type KDrawerType = {
  showAlert: (success?: boolean, onHideCallback?: () => void) => void;
  toggleModal: (visible?: boolean, children?: React.ReactNode) => void;
}

export type ModalConfig = {
  visible: boolean,
  children: React.ReactNode,
}

const NotifyContext = createContext<KDrawerType>({
  showAlert: () => { },
  toggleModal: () => { }
});

export function useNotifier() {
  const { showAlert, toggleModal } = useContext(NotifyContext);
  return { showAlert, toggleModal };
};

const NotifyProvider = ({ children }: { children: React.ReactNode }) => {
  const [alertConfig, setAlertConfig] = useState({ visible: false, success: false });
  const [modalConfig, setModalConfig] = useState<ModalConfig>({ visible: false, children: null });

  const onShowAlert = (success: boolean = false, onHideCallback?: () => void) => {
    setAlertConfig({ success, visible: true })
    setTimeout(() => {
      setAlertConfig({ ...alertConfig, visible: false });
      onHideCallback && onHideCallback();
    }, 750);
  };

  const onModalToggle = (visible: boolean = false, children: React.ReactNode = null) => {
    setModalConfig({
      visible,
      children
    });
  };

  const contextValue = {
    showAlert: (success?: boolean, onHideCallback?: () => void) => onShowAlert(success, onHideCallback),
    toggleModal: (visible?: boolean, children?: React.ReactNode) => onModalToggle(visible, children)
  };

  return (
    <NotifyContext.Provider value={contextValue}>
      {children}
      <Alert {...alertConfig} />
      <Modal {...modalConfig} onClose={() => onModalToggle(false, null)} />
    </NotifyContext.Provider>
  );
};


export default NotifyProvider;
