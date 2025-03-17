import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider

@main
class AppDelegate: RCTAppDelegate {
  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    self.moduleName = "ProjectName"
    self.dependencyProvider = RCTAppDependencyProvider()

    // You can add your custom initial props in the dictionary below.
    // They will be passed down to the ViewController used by React Native.
    self.initialProps = [:]

    // return super.application(application, didFinishLaunchingWithOptions: launchOptions)
    let result = super.application(application, didFinishLaunchingWithOptions: launchOptions)
    showSplashScreen() // Call the method to display the splash screen
    return result
  }

      private func showSplashScreen() {
        DispatchQueue.main.async {
            if let splashClass = NSClassFromString("SplashView") as? NSObject.Type,
               let splashInstance = splashClass.perform(NSSelectorFromString("sharedInstance"))?.takeUnretainedValue() as? NSObject {
                splashInstance.perform(NSSelectorFromString("showSplash"))
            }
        }
    }

  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
}
