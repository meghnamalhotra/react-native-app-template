package com.projectname

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeToastModulePackage : TurboReactPackage() {
    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
        return if (name == NativeToastModuleModule.NAME) NativeToastModuleModule(reactContext) else null
    }


  override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
    mapOf(
      NativeToastModuleModule.NAME to ReactModuleInfo(
       NativeToastModuleModule.NAME,
        NativeToastModuleModule.NAME,
        false,
        false,
        false,
        true
      )
    )
  }
}
