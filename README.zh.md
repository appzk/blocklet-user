# User Profile Project

## 概述

该项目是一个使用 React 和 Express 构建的基本用户资料管理系统。前端允许用户查看和编辑他们的个人资料信息，包括用户名、电子邮件和电话号码。后端由 Express 提供支持，并使用 SQLite 进行数据持久化。

## 特性

- 资料查看：显示用户资料信息。
- 资料编辑：允许用户编辑和更新他们的资料详情。
- 输入验证：确保输入符合特定标准（例如，有效的电子邮件、电话号码格式）。
- 单元测试：使用 Jest 对前端和后端进行全面的单元测试。

## 技术栈

- 前端: React, TypeScript, Formik, Yup
- 后端: Express, TypeScript, SQLite3
- 测试: Jest, React Testing Library

## 先决条件

- Node.js （18.x 或更高版本）
- pnpm 或 npm 或 Yarn
- SQLite3

## Getting Started

1. 克隆仓库

```shell
git clone https://github.com/appzk/blocklet-user.git
```

2. 转到项目目录

```shell
cd blocklet-user
```

3. 安装依赖

```shell
pnpm install
# or npm install
# or yarn install
```

4. 启动开发服务器

```shell
pnpm dev
# or npm run dev
# or yarn dev
```

5. Open your browser and navigate to `http://localhost:8091` to view the application.

or 

```
ℹ 您可以使用以下 URL 访问

- https://bbqaq5po4e767tmc3chm5iq3qlapmmaq6lgowvbtsru.did.abtnet.io

ℹ 注意，您的 blocklet 正在 Blocklet 服务器上以开发模式运行，该 URL 是一个临时 URL。
```


## Project Structure

```
.
├── LICENSE                    # 项目许可证，通常是 MIT、GPL 等开源许可证类型。
├── README.md                  # 英文版的项目入门指南，提供项目概述、安装步骤、使用说明等。
├── README.zh.md               # 中文版的项目入门指南，与 README.md 内容相同但使用中文。
├── api                        # 后端代码目录，使用 Express 和 TypeScript 开发。
│   ├── dev.ts                 # 用于开发模式下启动服务器的脚本。
│   ├── dist                   # 编译后的后端代码。
│   ├── src                    # 源代码文件夹，包含未编译的 TypeScript 源文件。
│   │   ├── db.ts              # 数据库相关的 TypeScript 文件。
│   │   ├── index.ts           # 后端服务器的入口 TypeScript 文件。
│   │   ├── libs               # 工具库和辅助函数。
│   │   │   ├── auth.ts        # 认证相关的工具函数（TypeScript）。
│   │   │   ├── env.ts         # 环境变量相关的工具函数（TypeScript）。
│   │   │   └── logger.ts      # 日志记录相关的工具函数（TypeScript）。
│   │   ├── profile.db         # 数据库文件，用于存储用户个人资料。
│   │   └── routes             # 后端路由。
│   │       ├── index.ts       # 主路由文件，负责引入其他路由（TypeScript）。
│   │       └── profile        # 用户个人资料相关路由。
│   └── third.d.ts             # TypeScript 声明文件，定义第三方库的类型。
├── blocklet.md                # 关于 Blocklet（区块链应用框架）的文档。
├── blocklet.yml               # Blocklet 的配置文件，定义了应用的元数据和配置。
├── blocklet.zh.md             # Blocklet 中文文档，提供与 blocklet.md 相同的内容，但使用中文。
├── dist                       # 编译后的前端代码和静态资源。
│   ├── assets                 # 编译后的静态资源，如 JavaScript、CSS 文件和字体文件。
│   │   ├── index-1luBAdF8.js  # 编译后的主 JavaScript 文件。
│   │   ├── inter-latin-*.woff # Inter 字体系列的 Web 字体文件。
│   │   ├── style-BuWmWwVT.css # 编译后的主 CSS 文件。
│   │   ├── ubuntu-mono-*.woff # Ubuntu Mono 字体系列的 Web 字体文件。
│   └── index.html             # 编译后的 HTML 文件，应用入口。
├── index.html                 # 前端应用的 HTML 入口文件。
├── jest.config.js             # Jest 测试框架的配置文件。
├── logo.png                   # 项目的 logo 文件。
├── package.json               # 项目的 npm 配置文件，包含依赖项和脚本。
├── pnpm-lock.yaml             # PNPM 包管理器的锁定文件，确保一致的依赖版本。
├── public                     # 前端的公共资源文件夹，存放无需编译的静态文件。
├── screenshots                # 屏幕截图文件夹，存放项目相关的图片。
│   ├── 1-login.png            # 登录界面的截图。
│   └── 2-ui.png               # 用户界面的截图。
├── scripts                    # 自定义脚本文件夹，包含构建和版本控制相关的脚本。
│   ├── build-clean.mjs        # 用于清理构建目录的脚本。
│   └── bump-version.mjs       # 用于版本号更新的脚本。
├── src                        # 前端源代码文件夹，使用 React 和 TypeScript 开发。
│   ├── app.css                # 全局样式文件。
│   ├── app.tsx                # 前端应用的主组件。
│   ├── components             # 可复用的 React 组件。
│   │   └── layout.tsx         # 布局组件，管理页面布局结构。
│   ├── contexts               # React 上下文文件夹，用于管理全局状态。
│   │   └── session.tsx        # 用户会话上下文，管理用户登录状态。
│   ├── env.d.ts               # 环境变量的 TypeScript 声明文件。
│   ├── index.tsx              # 前端应用的入口文件，渲染 React 应用。
│   ├── libs                   # 前端工具库和辅助函数。
│   │   └── api.ts             # API 请求相关的工具函数。
│   ├── logo.svg               # SVG 格式的 logo 文件。
│   ├── pages                  # 页面组件文件夹，包含不同的应用页面。
│   │   ├── components         # 页面级组件文件夹，包含页面特定的组件。
│   │   │   ├── profile-edit.css  # 用户资料编辑页面的样式文件。
│   │   │   ├── profile-edit.tsx   # 用户资料编辑页面的组件文件。
│   │   │   └── profile-view.tsx   # 用户资料查看页面的组件文件。
│   │   ├── profile.css           # 用户资料页面的样式文件。
│   │   ├── profile.tsx           # 用户资料页面的组件文件。
│   │   └── required-login.tsx    # 登录验证页面的组件文件。
│   └── setup-tests.ts           # 测试环境的配置文件。
├── test                       # 单元测试文件夹。
│   ├── profile-edit.test.tsx   # 针对用户资料编辑组件的测试文件。
│   └── profile-view.test.tsx   # 针对用户资料查看组件的测试文件。
├── tsconfig.api.json          # 后端 TypeScript 编译配置文件。
├── tsconfig.eslint.json       # ESLint 与 TypeScript 的配置文件。
├── tsconfig.json              # 项目的 TypeScript 编译配置文件。
├── version                    # 项目的版本号文件。
└── vite.config.mts            # Vite 前端构建工具的配置文件。


```


## 获得帮助

  如果你想了解更多有关 DID Spaces 的开发细节，你还可以参考[DID Spaces 的开发文档](https://www.arcblock.io/docs/did-spaces/en/did-spaces-how-to-guides)。不论你遇到什么问题，我们随时欢迎你在我们的[官方论坛](https://community.arcblock.io/)发起讨论。

## API

GET /api/profile - 获取用户资料
POST /api/profile - 更新用户资料


## 贡献

请随时提交问题或拉取请求，以帮助改进项目。确保遵循代码风格指南，并为新功能添加测试。

## 许可

在Apache许可证，版本2.0（"许可证"）下授权；除非遵守许可证，否则您不得使用此文件。您可以在以下网址获取许可证副本：

http://www.apache.org/licenses/LICENSE-2.0

除非适用法律要求或书面同意，否则在"现状"基础上分发的软件不附带任何形式的明示或暗示保证，包括但不限于对适销性、特定用途适用性或非侵权性的任何保证或条件。请参阅许可证，了解有关许可证下权限和限制的具体语言。