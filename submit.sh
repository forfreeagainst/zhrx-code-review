  #!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git pull origin main
git add .
# 思考：不改动commit信息，不能提交代码
git commit -m "fix: 锁版本文件"
git push origin main
