# KORD Field Gear

户外机能装备品牌落地页。Vite + React，无后端。预订为前端演示流程：校验、提交中、成功单号，不扣款、不落库。

## 运行

```bash
cd kord-field-gear
npm install
npm run dev
```

浏览器打开终端提示的本地地址（默认 `http://localhost:5173`）。

## 构建

```bash
npm run build
npm run preview
```

## 结构

```
src/
  App.jsx
  index.css
  data/products.js
  components/
    Header.jsx
    Hero.jsx
    ProductSection.jsx
    ProductVisual.jsx
    BrandStory.jsx
    BookingForm.jsx
    Footer.jsx
```

## 已验证

- `npm run lint`：通过
- `npm run build`：通过（Vite 8，约 70ms）
- `npm run preview`：`http://127.0.0.1:4173/` 可打开，无构建错误
- 页面区块：导航、Hero、4 款产品、品牌手册、预订表单、页脚均已渲染
- 空表单提交会显示字段级错误
