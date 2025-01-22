  #!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git pull origin main
git add .
# 思考：不改动commit信息，不能提交代码
git commit -m "feat: 新增markdownlint和stylelint,修复pnpm和lerna一起使用的bug"
git push origin main
