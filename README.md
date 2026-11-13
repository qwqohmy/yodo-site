# 友多聞 YODO：作品介紹網站

純 HTML、CSS、JavaScript 的手機優先靜態網站，部署於 GitHub Pages。原版的登入、資料庫、私訊與即時多人遊戲另行部署，此 repo 不包含伺服器與帳號密碼。

## 網站內容

- 品牌介紹、痛點、五大收藏類別。
- 原版同好推薦、私訊、臥底實際介面，以及原版生成的 Recap。
- 八張由原版模板產生的靜態示範名片，可切換收藏分類與查看風格統計。
- 明暗主題、鍵盤導覽、手機與桌面版面。
- 展示影片與完整試玩入口，尚未提供網址時清楚標為準備中。
- 國立中興大學智創三：傅垣幀、趙尹汎、林冠甫。

人物、對話、收藏與使用數字皆為虛構資料。`assets/provenance.json` 記錄截圖來源及公開封面 URL。名片沿用 [TheMoodyOldman/YODO](https://github.com/TheMoodyOldman/YODO) 的模板與樣式（版本 `57a9e8d481b42b1486e77832f33b9bd58f3e0b81`）；僅為靜態路徑、提示及無後端操作做調整。作品封面權利屬原權利人。

## 本機預覽

在此資料夾執行 `python -m http.server 8794 --bind 127.0.0.1`，開啟 <http://127.0.0.1:8794/>。請用 HTTP 預覽，讓 profiles.json 與設定檔正常載入。

## GitHub Pages 設定

1. 將這個資料夾推送到自己的 `yodo-site` repo。
2. 開啟 Settings → Pages。
3. Source 選 Deploy from a branch，Branch 選 main，資料夾選 / (root)，儲存。
4. 等待 Pages 建置成功，網址為 <https://qwqohmy.github.io/yodo-site/>。

網站所有本機資源均使用相對路徑，支援 `/yodo-site/` 子路徑，不需要建置工具、外部 CDN 或資料庫。

## 更新影片與試玩網址

編輯 `site-config.json` 的 `video_url` 或 `demo_url`，填入公開 HTTPS 網址後提交並推送。網站會自動改為對應的連結，既有海報 QR Code 不必更換。

## QR Code

發布完成後產生在 `assets/qr/yodo-site-qr.png`、`assets/qr/yodo-site-qr.svg`，內容僅為公開介紹網站的網址，不包含帳號、密碼或登入憑證。印刷時保留四周白邊，以實體手機掃描確認。

本機獨立的 YODO 示範帳號、資料庫與操作說明位於相鄰的 `../yodo-demo/`，這些內容不屬於此公開網站。
