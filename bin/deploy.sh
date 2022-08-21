#!/usr/bin/env sh
# from https://ja.vitejs.dev/guide/static-deploy.html and modified

# エラー時は停止
set -e

# スクリプトの場所から開始
cd `dirname $0`

# プロジェクトルートに移動
cd ../

# ビルド
npm run build

# ビルド出力ディレクトリに移動
cd dist

# カスタムドメインにデプロイする場合
# echo 'www.example.com' > CNAME

rm -rf .git
git init
git checkout -b main
git add -A
git commit -m 'deploy'

# https://<USERNAME>.github.io にデプロイする場合
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# https://<USERNAME>.github.io/<REPO> にデプロイする場合
git push -f git@github.com:accup/vite-ground.git main:gh-pages

cd -
