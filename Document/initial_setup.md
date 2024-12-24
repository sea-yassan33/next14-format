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
npx shadcn@latest init -d
npx shadcn@latest add

## ブラウザ依存のライブラリ
npm install framer-motion

## Headless UI
npm install @headlessui/react

## Heroicons
npm install @heroicons/react

## reacticons
## https://react-icons.github.io/react-icons/
npm install react-icons
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