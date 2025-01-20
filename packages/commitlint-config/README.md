# zhrx-commitlint-config

对git的commit msg（提交信息）进行校验

## 参考

[commitlint官网](https://commitlint.js.org/)

## 使用

### 安装子包(发布后的)和@commitlint/cli

```bash
pnpm install 子包名 -D
pnpm install @commitlint/cli --save-dev
```

echo "export default { extends: ['子包名'] };" > commitlint.config.js//官方文档原文

### 创建commitlint.config.js并编写

Install @commitlint/cli and a @commitlint/config-*/ commitlint-config-* of your choice as devDependency and configure commitlint to use it.//官网文档原文

注意extends的子包名要减去`@commitlint/config-` 或者`commit-config-`

```commitlint.config.js
module.exports = {
  extends: ['此包名/包的入口文件']
}
```

### 在husky，进行commitlint校验

```bash
pnpm add --save-dev husky
npx husky install
npx husky add .husky/commit-msg 'npx commitlint --edit $1'
```
