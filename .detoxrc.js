/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.js',
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/Debug-iphonesimulator/BitriseReactNative.app',
      build:
        'xcodebuild -workspace ios/BitriseReactNative.xcworkspace -scheme BitriseReactNative -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'ios.release': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/Release-iphonesimulator/BitriseReactNative.app',
      build:
        'xcodebuild -workspace ios/BitriseReactNative.xcworkspace -scheme BitriseReactNative -configuration Release -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build:
        'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
      reversePorts: [8081],
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build:
        'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 15',
      },
    },
    attached: {
      type: 'android.attached',
      device: {
        adbName: '.*',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_3a_API_34_extension_level_7_arm64-v8a',
      },
    },
    bitrise: {
      type: 'android.emulator',
      device: {
        avdName: 'emulator',
      },
    },
    genycloud: {
      type: 'android.genycloud',
      device: {
        recipeUUID: '45d99fd5-be16-4e02-a81b-6510f3cb7c2e',
      },
    },
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug',
    },
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.release',
    },
    'android.att.debug': {
      device: 'attached',
      app: 'android.debug',
    },
    'android.att.release': {
      device: 'attached',
      app: 'android.release',
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug',
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release',
    },
    'android.bitrise.debug': {
      device: 'bitrise',
      app: 'android.debug',
    },
    'android.bitrise.release': {
      device: 'bitrise',
      app: 'android.release',
    },
    'android.genycloud.debug': {
      device: 'genycloud',
      app: 'android.debug',
    },
    'android.genycloud.release': {
      device: 'genycloud',
      app: 'android.release',
    },
  },
};
