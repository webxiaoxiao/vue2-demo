# `deploy.sh`

# 当发生错误时中止脚本
set -e

# 构建
yarn build

# cd 到构建输出的目录下
cd docs

git init
git add -A
git commit -m 'deploy'

git remote add origin https://github.com/webxiaoxiao/vue2-demo.git
# 部署到 https://<USERNAME>.github.io/<REPO>
# 部署到 https://webxiaoxiao.github.io/vue2-demo
git push -f origin main

cd -
