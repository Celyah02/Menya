# Screens

All **screen UI** for Menya lives in this folder. Each file is one screen component.

## How it works

- **`app/`** = routing (Expo Router). Route files there only import and re-export the screen from here.
- **`screens/`** = the actual screen components (layout, content, styles).

So when you open a route like `/onboarding`, Expo Router loads `app/onboarding/index.tsx`, which simply exports the component from `screens/OnboardingScreen.tsx`.

## Current screens

| File                   | Route                | Description                             |
| ---------------------- | -------------------- | --------------------------------------- |
| `WelcomeScreen.tsx`    | `/(tabs)` (Home tab) | Welcome page with Menya logo and slogan |
| `OnboardingScreen.tsx` | `/onboarding`        | Onboarding carousel (Skip / Next)       |
| `ExploreScreen.tsx`    | `/(tabs)/explore`    | Explore tab                             |
| `ModalScreen.tsx`      | `/modal`             | Example modal                           |

## Adding a new screen

1. **Create** a new file here, e.g. `screens/ChatScreen.tsx`, and export the component.
2. **Wire the route** in `app/`:
   - New tab: add a new file under `app/(tabs)/` and register it in `app/(tabs)/_layout.tsx`.
   - New stack screen: add e.g. `app/chat.tsx` or `app/report/index.tsx` and register in `app/_layout.tsx`.
3. Each route file in `app/` should be one line:  
   `export { default } from "@/screens/YourScreenName";`

## Organizing many screens

- Keep one component per file: `ScreenNameScreen.tsx`.
- For bigger flows (e.g. chat, reporting), you can add subfolders later, e.g.  
  `screens/chat/ChatScreen.tsx`, `screens/report/ReportFormScreen.tsx`, and import as `@/screens/chat/ChatScreen`.
