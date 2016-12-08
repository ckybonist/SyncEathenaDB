# 仙境傳說資料庫匯入器 (powered by eathena)


## 預設匯入的資料庫
- mob_db: 怪物資料
- item_db: 物品資料

## 安裝
- [Node.JS](https://nodejs.org/en/)
- 套件管理： NPM 或  [Yarn](https://yarnpkg.com/)

## 使用方式
1. `yarn install`
2. `yarn start`

使用 NPM 的話，只要將以上指令中的 yarn 換成 npm。

## 模組架構
- src/parse.js: 將原始的 txt 資料庫檔 **格式化** 成 CSV 檔。
- src/indexdb.js: 將 CSV 檔案匯入 MySQl。
- src/config.js: 資料庫設定檔
- src/*.schema.js: 資料表模型

## 資料庫來源
  [eathena - 開源的仙境傳說伺服端專案](https://github.com/eathena/eathena)
