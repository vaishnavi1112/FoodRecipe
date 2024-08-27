This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npx react-native run-android

# OR using Yarn
yarn react-native run-android
```

### For iOS

```bash
# using npm
npx react-native run-ios

# OR using Yarn
yarn react-native run-android
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Configure React Native Voice
```sh
yarn add @react-native-voice/voice

# or

npm i @react-native-voice/voice --save
```

Link the iOS package

```sh
npx pod-install
```

## Step 4: Configure React Native Vector Icons
## Installation

1. Install the package via npm:
   ```sh
   npm install --save react-native-vector-icons
    ```
2.  Depending on the platform you're targeting (iOS/Android/Windows), follow the appropriate setup instructions.
3.  If you're planning to use FontAwesome 5 or 6 icons, refer to these guides: [FontAwesome 5](FONTAWESOME5.md) | [FontAwesome 6](FONTAWESOME6.md)

### iOS Setup
To use the bundled icons on iOS, perform the following step:

- Edit `Info.plist` and add a property called **Fonts provided by application** (or **UIAppFonts** if Xcode autocomplete is not working):
  - <details><summary>List of all available fonts to copy & paste in Info.plist</summary>
  
    ```xml
    <key>UIAppFonts</key>
    <array>
      <string>AntDesign.ttf</string>
      <string>Entypo.ttf</string>
      <string>EvilIcons.ttf</string>
      <string>Feather.ttf</string>
      <string>FontAwesome.ttf</string>
      <string>FontAwesome5_Brands.ttf</string>
      <string>FontAwesome5_Regular.ttf</string>
      <string>FontAwesome5_Solid.ttf</string>
      <string>FontAwesome6_Brands.ttf</string>
      <string>FontAwesome6_Regular.ttf</string>
      <string>FontAwesome6_Solid.ttf</string>
      <string>Foundation.ttf</string>
      <string>Ionicons.ttf</string>
      <string>MaterialIcons.ttf</string>
      <string>MaterialCommunityIcons.ttf</string>
      <string>SimpleLineIcons.ttf</string>
      <string>Octicons.ttf</string>
      <string>Zocial.ttf</string>
      <string>Fontisto.ttf</string>
    </array>
    ```
    
  </details>

   Above step might look something like this:

  ![XCode screenshot](https://cloud.githubusercontent.com/assets/378279/12421498/2db1f93a-be88-11e5-89c8-2e563ba6251a.png)

_Note: Recompile your project after adding new fonts._
For **Android**:
#### Option: With Gradle (recommended)

To make font management smoother on Android, use this method:

- Edit `android/app/build.gradle` (NOT `android/build.gradle`) and add:

  ```gradle
  apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
  ```

  To customize the fonts being copied, use:

  ```gradle
  project.ext.vectoricons = [
      iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Specify font files
  ]

  apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")

  ```

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
