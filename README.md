# Win Streak Counter - A Widget for Streaming

## Requirements

- `npm install`
- Setup firebase
  - Create firebase project
  - Enable the services:
    - FireStore
    - Hosting
  - Create `Web App` in the project
  - [Get the Web App's config](https://support.google.com/firebase/answer/7015592?ref_topic=6400762) and put it into `.env`
  - `npx firebase use --add PROJECT_ID`
    - Config is saved at `.firebaserc` or `~/.config/configstore/firebase-tools.json`

## Run dev server

- `npm run start`
  - patch [this](https://github.com/facebook/create-react-app/pull/10706) to enable HMR using emacs

## Deploy

- `npm run build`
- `npx firebase deploy`
  - or `npx firebase deploy --only firestore:rules`
