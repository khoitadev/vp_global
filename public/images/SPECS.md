# Image Specifications

Danh sách ảnh được dùng trong landing page. Mỗi mục cho biết:
- **Path:** đường dẫn file. Khi thay ảnh thật, đặt cùng đường dẫn (đổi đuôi nếu cần và update key tương ứng trong `content/locales/*.json`).
- **Spec:** kích thước tối thiểu nên cung cấp (đã tính cho retina 2x). Có thể cung cấp lớn hơn — site sẽ tự scale.
- **Aspect:** tỉ lệ khung — bắt buộc giữ đúng để layout không vỡ.
- **Format:** WebP ưu tiên (chất lượng/kích thước tốt nhất). JPG/PNG cũng OK.
- **i18n key:** key trong `content/locales/{vi,ko}.json` cần update nếu đổi đường dẫn.

## Placeholder hiện tại (SVG, có thể thay)

| # | Path | Spec | Aspect | i18n key |
|---|---|---|---|---|
| 1 | `/images/hero-feature.svg` | **1200 × 1200** | 1:1 | `landing.hero.featureImage` |
| 2 | `/images/about-facility.svg` | **1600 × 1067** | 3:2 | `landing.about.facilityImage` |
| 3 | `/images/team.svg` | **1200 × 800** | 3:2 | `landing.about.teamImage` |
| 4 | `/images/why-visual.svg` | **1200 × 900** | 4:3 | `landing.whyChooseUs.image` |

## Ảnh factory từ PDF (đã xử lý xong)

Các file WebP trong `/images/factory/` đã được tách từ `docs/company-profile.pdf` và tối ưu một lần. **Repo này không chứa script extract** (không `mupdf`/`sharp` trong `package.json`). Nếu bạn vẫn giữ thư mục tạm kiểu `tmp/pdf-extract` ngoài project — có thể xóa an toàn sau khi đã copy ảnh vào `public/images/factory/`.

Tất cả nằm ở `/images/factory/`, hiển thị qua `.factory-figure` với modifier tỉ lệ phù hợp (mặc định 16:9, nhiều card dùng `--3-2`):

| Path | Dùng ở section | Trang PDF gốc |
|---|---|---|
| `cnc-line.webp` | Services #1 (Gia công CNC) | 6 |
| `aluminium.webp` | Services #2 (Đùn nhôm) | 15 |
| `injection-line.webp` | Services #3 (Ép nhựa) | 22 |
| `press-line.webp` | Services #4 (Press) | 16 |
| `bolt-line.webp` | Services #5 (Bolt/Screw) | 23 |
| `measuring.webp` | Services #6 (Đo kiểm) | 28 |
| `compound-line.webp` | Process Section feature | 27 |
| `ess-products.webp` | Projects #1 (ESS) | 29 |
| `al-extrusion.webp` | Projects #2 (5G/adapter) | 19 |
| `cnc-products.webp` | Projects #3 (Camera/jig) | 10 |
| `casting-coating.webp` | Projects #4 (Bolt) | 18 |
| `tube-line.webp` | Projects #5 (Tube) | 14 |
| `film-tape.webp` | Projects #6 (Film/Tape) | 25 |
| `inspection.webp` | (chưa dùng — dự phòng) | 7 |
| `vision-1.webp` | (chưa dùng — dự phòng) | 8 |

## Cách thay ảnh

**Cách 1 — Giữ nguyên đường dẫn (đơn giản nhất)**:
1. Cung cấp ảnh đúng spec ở trên.
2. Đặt vào `/public/images/` với cùng tên file (đổi đuôi `.svg` → `.webp` hoặc `.jpg`).
3. Mở `content/locales/vi.json` + `content/locales/ko.json`, đổi đuôi tương ứng trong key (ví dụ `"/images/hero-feature.svg"` → `"/images/hero-feature.webp"`).

**Cách 2 — Đổi đường dẫn**:
1. Đặt ảnh ở đường dẫn mới bất kỳ trong `/public/`.
2. Cập nhật value của i18n key tương ứng ở cả 2 file `vi.json` và `ko.json`.

## Ghi chú render

- Tất cả ảnh được wrap trong class `.factory-figure` (xem `app/globals.css`):
  - Light mode: white background + subtle inset ring 6%.
  - Dark mode: white background + soft outer shadow → cảm giác "premium brand sticker".
  - `object-fit: cover` — ảnh sẽ crop edge nếu tỉ lệ không khớp.
- Logo ở `/public/logo.svg` đã được optimize riêng (`brand-logo` class).
