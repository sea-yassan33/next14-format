[create-next-appで訊かれていること](https://zenn.dev/ikkik/articles/51d97ff70bd0da)

## 用意するディレクトリ
```txt
app/_components
```
## 書換えるファイル
#### app\globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## vscodeセッティング

settings.jsonの設定
```json
{
  "tailwindCSS.experimental.classRegex": [
    ["tv\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

## 追加ライブラリ
```sh
## Tailwind Variants
npm install tailwind-variants

## ui.shadcn
## https://ui.shadcn.com/
npx shadcn@latest init -d
npx shadcn@latest add

## Headless UI
## https://headlessui.com/v1
npm install @headlessui/react

## Heroicons
## https://zenn.dev/nino_cast/books/43c539eb47caab/viewer/807f3b
## https://heroicons.com/solid
npm install @heroicons/react

## reacticons
## https://react-icons.github.io/react-icons/
npm install react-icons

## ブラウザ依存のライブラリ
## https://qiita.com/KokiSakano/items/e3a42a12f5de3c9f88ea
npm install framer-motion
```

## page開発テンプレート
```js
import Image from "next/image";
import Link from 'next/link';
import { tv } from 'tailwind-variants';

export default function Home() {
  const twStayles = tv({
    variants: {
      style:{
        text01:'text-cyan-400',
      },
    },
  });

  return (
    <div className={twStayles({style:'text01'})}>
      first_commit
    </div>
  );
}
```