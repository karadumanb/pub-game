import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Modal as RNModal, SafeAreaView } from 'react-native';
import { ModalConfig } from 'src/contexts/NotifyContext';
import Colors from 'src/core/Colors';
import { globalStyles } from 'src/core/Styles';

const Modal: React.FC<ModalConfig & { onClose: () => void }> = ({ visible, children, onClose }) => {
  return (
    <RNModal
      transparent={false}
      animationType={"slide"}
      visible={visible}
      onRequestClose={onClose}>
      <SafeAreaView style={[globalStyles.flexCenter, { flex: 1, marginTop: 30 }]}>
        <MaterialCommunityIcons name='close' onPress={onClose} color={Colors.light.neverHave} size={24} style={{ position: 'absolute', right: 15, top: 15 }} />
        {children}
      </SafeAreaView>
    </RNModal>
  )
};

export default Modal;
