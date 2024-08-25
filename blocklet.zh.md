# todo-list-example

## 如何启动

### 安装依赖

```shell
pnpm install
# or npm install
# or yarn install
```

### 启动

```shell
yarn dev
```

## 如何与 DID Spaces 对接的

- 步骤 1：将blocklet.yml 中的 `capabilities.didSpace` 字段设置为 `requiredOnConnect`，请参阅 `blocklet.yml#capabilities`
- 步骤 2：实现读写 DID Space 的功能，请参阅 `api/src/routes/profile/index.ts#9`
- 步骤 3：从 API 获取数据，请参阅 `src/pages/profile.tsx#35`
- 步骤 4：将数据通过API写入 ，请参阅 `src/pages/profile.tsx#62`

## 获得帮助

  如果你想了解更多有关 DID Spaces 的开发细节，你还可以参考[DID Spaces 的开发文档](https://www.arcblock.io/docs/did-spaces/en/did-spaces-how-to-guides)。不论你遇到什么问题，我们随时欢迎你在我们的[官方论坛](https://community.arcblock.io/)发起讨论。