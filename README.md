# GaMo Tools — trang giới thiệu

Trang tĩnh giới thiệu hai package Unity: **True Input System** và **Blender-Style Workflow**.
Không cần build, không dùng thư viện ngoài. Font và icon nằm sẵn trong `assets/`.

## Xem trên máy

Mở `index.html` bằng trình duyệt, hoặc chạy:

```bash
python -m http.server 8000
```

## GitHub Pages

Branch `gh-pages` chỉ chứa trang web, tách hẳn khỏi `main` và code Unity.
Trang chạy tại <https://ga-mo221.github.io/My-Tool/>, cấu hình ở **Settings › Pages**: nhánh `gh-pages`, thư mục `/ (root)`.

Link repo cho nút GitHub nằm ở `REPO_URL`, đầu file `assets/js/main.js`.

## Cấu trúc

```
index.html         Nội dung trang
assets/css/        Giao diện
assets/js/main.js  Các demo tương tác
assets/icons/      Icon lấy từ hai package
assets/fonts/      Be Vietnam Pro, JetBrains Mono (SIL OFL)
```
