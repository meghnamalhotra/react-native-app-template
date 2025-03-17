//
//  RCTNativeToastModule.m
//  ProjectName
//
//  Created by Admin on 06/03/25.
//


#import "RCTNativeToastModule.h"

// Interface declaration for RCTNativeToastModule
@interface RCTNativeToastModule()
@end

// Implementation of RCTNativeToastModule
@implementation RCTNativeToastModule

// Macro to export the module to React Native
RCT_EXPORT_MODULE(NativeToastModule)

RCT_EXPORT_METHOD(showToast:(NSString *)message) {
    dispatch_async(dispatch_get_main_queue(), ^{
        UIWindow *keyWindow = [UIApplication sharedApplication].keyWindow;
        UIViewController *rootViewController = keyWindow.rootViewController;

        if (rootViewController) {
            UIAlertController *alert = [UIAlertController alertControllerWithTitle:nil
                                                                           message:message
                                                                    preferredStyle:UIAlertControllerStyleAlert];

            // Remove the "OK" button (no actions added)

             // Customize toast background to transparent
            UIView *backgroundView = alert.view.subviews.firstObject;
            if (backgroundView) {
                backgroundView.backgroundColor = [UIColor clearColor]; // Set transparent background
                backgroundView.layer.cornerRadius = 10; // Optional: Rounded corners for aesthetics
            }

            // Set the alert window's background transparent (if applicable)
            alert.view.backgroundColor = [UIColor clearColor];
            alert.view.alpha = 1.0; // Ensure visibility
           [rootViewController presentViewController:alert animated:YES completion:^{
                // Adjust position to top (UIAlertController does not support custom positioning, so consider using a custom UIView if necessary)
                CGRect frame = alert.view.frame;
                frame.origin.y = 50;  // Attempt to shift up
                alert.view.frame = frame;
            }];

            // Auto dismiss after 3 seconds
            dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(3 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
                if (alert.presentingViewController) {
                    [alert dismissViewControllerAnimated:YES completion:nil];
                }
            });
        }
    });
}

// Method to get a TurboModule instance
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeToastModuleSpecJSI>(params); // Return a shared pointer to a TurboModule
}

@end
