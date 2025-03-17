package com.projectname

import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.projectname.NativeToastModuleSpec

class NativeToastModuleModule(reactContext: ReactApplicationContext) : NativeToastModuleSpec(reactContext) {

    companion object {
        const val NAME = "NativeToastModule"
    }

    override fun getName(): String {
        return NAME
    }

    override fun showToast(message: String) {
        Toast.makeText(reactApplicationContext, message, Toast.LENGTH_LONG).show()
    }
}
