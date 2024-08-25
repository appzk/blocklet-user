# blocklet-user

## Introduction

This is a simple blocklet for user management. It provides a user registration and login function.

## How to start

### Install dependencies

```shell
pnpm install
# or npm install
# or yarn install
```

### Start

```shell
pnpm dev
```

## How to connect with DID Spaces

- Step 1: Set the `capabilities.didSpace` field in blocklet.yml to `requiredOnConnect`, see `blocklet.yml#capabilities`
- Step 2: To read and write the DID Space, see `api/src/routes/profile/index.ts#9`
- Step 3: Get data from API, see `src/pages/profile.tsx#35`
- Step 4: Write data to API, see `src/pages/profile.tsx#62`

## Get help

If you want to learn more about the development of DID Spaces, You can also refer to [DID Spaces development documentation] (https://www.arcblock.io/docs/did-spaces/en/did-spaces-how-to-guides). No matter what you encounter a problem, we welcome you in our official BBS (https://community.arcblock.io/) initiated discussions.