#!/usr/bin/env sh

nvm use 16.19.0

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
rm -rf ./dist
yarn build

# 进入生成的文件夹
cd ./dist

echo 'google.com, pub-8586652723015758, DIRECT, f08c47fec0942fa0' > ads.txt

git init
git add -A
git commit -m '🚀 local build for deploy'

git push -f git@github.com:nicejade/read.lovejade.cn.git main:gh-pages
cd -
