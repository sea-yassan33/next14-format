## 開発環境
```sh
npx create-next-app@14.2.13
Ok to proceed? (y) y
✔ What is your project named? … [プロジェクト名]
✔ Would you like to use TypeScript? …  / Yes
✔ Would you like to use ESLint? …  / Yes
✔ Would you like to use Tailwind CSS? …  / YES
✔ Would you like to use `src/` directory? … No / 
✔ Would you like to use App Router? (recommended) …  / Yes
✔ Would you like to customize the default import alias (@/*)? … No / 
```

- [初期設定について](./document/initial_setup.md)

## GitHub必要なモジュールをインストール
```sh
## プロジェクト作成
cd ./[任意の格納場所]

## GitHubからclone
git clone https://github.com/sea-yassan33/next14-format.git [プロジェクト名]

## プロジェクトに移動
cd ./[プロジェクト名]

## .gitを削除
rm -rf .git

## 必要なモジュールをインストール
npm i
```