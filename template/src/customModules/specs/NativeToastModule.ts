import { TurboModule, TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  showToast(message: string): void;
}

// Register the module
export default TurboModuleRegistry.getEnforcing<Spec>('NativeToastModule');
