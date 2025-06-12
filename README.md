mono-entry hybrid library


/dist               ← 📤 Output sau khi build (bởi tsup)
/src
  /native           ← 📱 Các component/platform liên quan đến React Native
  /styles           ← 🎨 Nơi để Tailwind entry hoặc CSS chung
  /web              ← 💻 Component dành riêng cho Web
  index.tsx         ← 🧩 Entry point chính cho thư viện
bun.lockb           ← 🧰 Bạn đang dùng Bun (thay vì npm/yarn)
package.json        ← 📦 Thông tin & script của thư viện
README.md           ← 📖 Hướng dẫn sử dụng
tsconfig.json       ← ⚙️ Config TypeScript
tsup.config.ts      ← ⚙️ Config cho bundler TSUP