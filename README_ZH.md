<p align="center">
  <img src="assets/mermark-banner.jpeg" alt="MerMark Editor - Mermaid Markdown 編輯器" width="600">
</p>

<p align="center">
  <strong>現代化、開源的 Markdown 編輯器，內建 Mermaid 圖表支援</strong>
</p>

<p align="center">
  <a href="https://github.com/Vesperino/MerMarkEditor/releases"><img src="https://img.shields.io/github/v/release/Vesperino/MerMarkEditor?style=flat" alt="發布"></a>
  <a href="https://github.com/Vesperino/MerMarkEditor/blob/master/LICENSE"><img src="https://img.shields.io/github/license/Vesperino/MerMarkEditor?style=flat" alt="授權條款"></a>
  <a href="https://github.com/Vesperino/MerMarkEditor/stargazers"><img src="https://img.shields.io/github/stars/Vesperino/MerMarkEditor?style=flat" alt="星標"></a>
  <a href="https://github.com/Vesperino/MerMarkEditor/releases"><img src="https://img.shields.io/github/downloads/Vesperino/MerMarkEditor/total?style=flat&color=brightgreen&cacheSeconds=300" alt="下載量"></a>
  <a href="https://buymeacoffee.com/vesperinio"><img src="https://img.shields.io/badge/%E8%AB%8B%E6%88%91%E5%96%9D%E5%92%96%E5%95%A1-FFDD00?style=flat&logo=buy-me-a-coffee&logoColor=black" alt="請我喝咖啡"></a>
</p>

<p align="center">
  <a href="#本機-ai-助手">AI 助手</a> •
  <a href="#功能">功能</a> •
  <a href="#截圖">截圖</a> •
  <a href="#安裝">安裝</a> •
  <a href="#使用">使用</a> •
  <a href="#開發">開發</a>
</p>

<p align="center">
  <a href="README.md">English</a> •
  <a href="README_PL.md">Polski</a> •
  <strong>中文</strong>
</p>

---

## ⚠️ 本分支與原版的差異

本儲存庫是 [Vesperino/MerMarkEditor](https://github.com/Vesperino/MerMarkEditor) 的個人客製化分支（fork）。原始專案的所有功勞歸 [Vesperino](https://github.com/Vesperino) 所有，本分支依 MIT 授權發布，詳見 [LICENSE](LICENSE)。

相對於原版，本分支做了以下修改：

- **植入數學方程式支援** — 透過 KaTeX 渲染行內與區塊數學公式（`$...$`、`$$...$$`），原版不支援。
- **修改 PDF 的輸出方式** — 因為原版的列印式 PDF 輸出無法正確呈現數學方程式，本分支改用 `wkhtmltopdf` 直接產生 PDF，讓方程式能正確輸出。⚠️ 因此需在系統中安裝 [`wkhtmltopdf`](https://wkhtmltopdf.org/) 才能匯出 PDF。
- **修正 PDF 表格格線** — 加粗表格邊框，避免格線過細在 PDF 中幾乎看不見。

---

## 為什麼選擇 MerMark Editor？

**MerMark Editor** 將 Markdown 的簡潔性與 Mermaid 圖表的強大功能融合在一個精美的原生桌面應用程式中。非常適合開發者、技術文件撰寫者，以及任何需要使用流程圖、循序圖和其他視覺化內容來撰寫文件的人。

### 主要優勢

- **無雲端依賴** - 文件完全保留在你的電腦上
- **原生效能** - 基於 Tauri 建置，快速且輕量
- **所見即所得編輯** - 邊輸入邊檢視格式化後的內容
- **Mermaid 整合** - 直接在文件中建立圖表
- **多根工作區** - 開啟一個或多個資料夾；AI 會自動將其作為唯讀的上下文範圍
- **本機 AI 助手** - 與 Claude 或 Codex 對話來處理你的筆記，AI 會直接編輯檔案
- **跨平台** - 支援 Windows、macOS 和 Linux

<p align="center">
  <img src="https://raw.githubusercontent.com/Vesperino/MerMarkEditor/master/docs/release-notes/v0.2.6/ui-light-mode.png" alt="MerMark — Minimal 主題與工作區側欄" width="48%" />
  <img src="https://raw.githubusercontent.com/Vesperino/MerMarkEditor/master/docs/release-notes/v0.2.6/ui-with-ai-panel.png" alt="MerMark — 同樣的版面，AI 助手停靠在右側" width="48%" />
</p>

---

## 本機 AI 助手

如果你已經在為 **Claude Code** 或 **OpenAI Codex** 付費 — 或兩者都有 — MerMark 直接把這份訂閱接進編輯器。AI 面板使用你已經登入的 `claude` 和 `codex` CLI，每次請求都走你已經付費的帳戶。無需產生 API 金鑰。無需第二份帳單。你和服務商之間沒有任何代理。

<p align="center">
  <img src="https://raw.githubusercontent.com/Vesperino/MerMarkEditor/master/docs/release-notes/v0.2.0/ai-panel-overview.png" alt="AI 面板概覽" />
  <br>
  <em>AI 面板停靠在編輯器旁，包含模型選擇器、工作階段下拉選單、釘選的片段以及即時的上下文用量列</em>
</p>

### 使用你已有的訂閱

- **Claude Code 或 Codex 的 Pro/Plus 方案** — MerMark 使用該登入，無需額外帳戶。
- **無需管理 API 權杖** — CLI 處理驗證，MerMark 永遠看不到你的金鑰。
- **直連服務商** — 請求從你的機器直接送到 Anthropic 或 OpenAI；中間沒有任何中間人。
- **零遙測** — 除了你自己也能在終端機執行的 CLI 呼叫之外，編輯器不會再外洩任何資料。
- **逐輪切換供應商** — 一則聊天選 Claude，下一則選 Codex；兩者都在同一個面板裡設定好。

### 它能做什麼

- **直接編輯你的 markdown** — 「用更友善的語氣重寫這一段」、「擷取行動項」、「翻譯成英文」。會原子化地寫入磁碟；編輯器自動重新載入。
- **跨你授權的資料夾讀取** — 在存取圖中指向專案資料夾，AI 就能看到昨天的筆記、術語表、風格指南。
- **修改同層檔案** — 把長文件拆成多份筆記、在原始檔旁產生摘要、為某個資料夾建立 TOC 檔。
- **搜尋網路** — 開啟 `network` 工具開關，需要新資訊時啟用。
- **執行 shell 指令** — 可選的 `bash` 開關，用於 grep 筆記、執行建置或任何終端機任務。預設關閉。
- **每次 AI 寫入自動產生快照** — 結果不滿意時一鍵 **復原**。

### 多片段選擇與圖片附件

- 在 Visual *和* Code 檢視中釘選一個或多個標示的片段。
- AI 只會收到這些片段，而不是整篇文件。
- 關閉 **Send** 可以保留釘選的片段但本次不送出。
- 貼上截圖（`Ctrl+V`）、拖放圖片，或從磁碟選擇檔案。
- 每張圖最大 8 MB，支援 png / jpg / gif / webp / bmp。
- Claude 和 Codex 都能看到圖片。
- 已送出的圖片以縮圖形式保留在聊天記錄裡 — 你能清楚記得傳過什麼。

<p align="center">
  <img src="https://raw.githubusercontent.com/Vesperino/MerMarkEditor/master/docs/release-notes/v0.2.0/pin-multi-fragments.png" alt="釘選多個片段" />
  <br>
  <em>送出前釘選多個標示的片段 — 每個片段都以編號 chip 的形式出現在 composer 裡</em>
</p>

### 工具呼叫在聊天中可見

- 模型呼叫的每個工具都以虛線 chip 的形式行內顯示在記錄裡。
- chip 上帶有工具名以及參數的一行預覽。
- 點擊展開格式化的 JSON 完整呼叫檢視。
- 涵蓋 Read、Edit、Write、Bash、WebFetch、codex shell — 全部涵蓋。

<p align="center">
  <img src="https://raw.githubusercontent.com/Vesperino/MerMarkEditor/master/docs/release-notes/v0.2.0/tool-chips.png" alt="工具呼叫 chip" />
  <br>
  <em>AI 使用的每個工具（Read、Edit、Write、Bash、WebFetch ……）都會作為可展開的 chip 行內顯示</em>
</p>

### 每份文件獨立工作階段，並完整恢復上下文

- 每份文件都有自己的可捲動工作階段歷史。
- **+** 封存目前的對話並新開一個。
- 每份文件最多 50 個工作階段，儲存在 `localStorage` 中。
- 重新開啟舊工作階段會還原你之前使用的 CLI、模型和推理強度。

### 安全性、可稽核性、依文件的存取控制

- 每份文件獨立的存取圖：明確的讀取路徑、寫入路徑、工具開關。
- 透過 **+ File** 加入檔案，**+ Folder** 加入整個資料夾。
- 編輯前快照自動輪替（預設 3 個 + 已釘選），一鍵 **復原**。
- 狀態列指示器：綠色 / 紅色 / 閃爍紅色（bypass 啟用）。
- 僅附加的稽核日誌記錄每一次 AI 操作，可在 Settings 中查看。

<p align="center">
  <img src="https://raw.githubusercontent.com/Vesperino/MerMarkEditor/master/docs/release-notes/v0.2.0/access-map.png" alt="存取圖編輯器" />
  <br>
  <em>每份文件存取圖 — 明確的讀取 / 寫入路徑加上工具開關</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Vesperino/MerMarkEditor/master/docs/release-notes/v0.2.0/snapshots.png" alt="快照歷史" />
  <br>
  <em>快照歷史 — 還原、釘選、匯出或刪除編輯前的版本</em>
</p>

### 兩個供應商，一個面板

- 在聊天 header 中切換 `claude` / `codex`。
- 每個 CLI 的預設設定會持久化（最近的模型、最近的 effort）。
- Token 串流輸出，第一段回傳前顯示思考指示器。
- 分段的上下文用量列 — input、cache、free — 直接來自 CLI 回報的用量。
- 可點擊的連結會透過編輯器的外部連結確認對話框開啟。
- 送出快捷鍵：`Ctrl+Enter`（Win/Linux）、`Cmd+Enter`（macOS）。
- 最小化到側邊 tab、全螢幕、關閉 — 都在面板 header 裡。

### 在 Mermaid 圖表中使用 AI

- 在任意圖表（或全螢幕編輯）中點擊 **AI** — 主面板會自動將圖表原始碼作為唯讀上下文釘選，並把 preamble 切換到 mermaid-edit 模式。
- 同一個面板、同一個模型選擇器、同一種你處理散文時使用的多輪對話。
- 每則助手回覆都會被解析出 `mermaid` 程式碼區塊，並即時渲染來取代已儲存的圖表。
- 面板 chip 中顯示 **Apply ✓ / Discard × / Stop** 按鈕；Apply 套用到節點，Discard 繼續迭代，Stop 結束工作階段。

完整功能列表 — 包含快照輪替、當機工作階段的 tmp 復原、多視窗安全的串流輸出以及依 CLI 隔離工作階段 — 詳見 [RELEASE_NOTES.md](RELEASE_NOTES.md)。

---

## 功能

### Markdown 編輯
- 完整支援 **GitHub Flavored Markdown** (GFM)
- **WYSIWYG 編輯器** 帶即時預覽
- 程式碼區塊**語法高亮**（50+ 種語言）
- 表格、任務清單、引用區塊等
- **鍵盤快捷鍵** 提高編輯效率
- **可設定內距** — Settings 中的頂部、兩側、底部滑桿

### Mermaid 圖表
- **流程圖**、**循序圖**、**類別圖**、**狀態圖**、**ER 圖**、**甘特圖**、**圓餅圖** 以及許多其他圖表類型
- **可調整大小** - 拖曳右側邊緣設定自訂寬度（持久化到 markdown）
- **可調整分割** - 全螢幕編輯中拖曳程式碼與預覽面板之間的分隔條
- **AI 輔助** - 在任意圖表上點擊 AI，主 AI 面板會以圖表為上下文接手
- **快速範本** — flowchart / sequence / class / state / ER / Gantt / pie / mindmap 一鍵插入

### 工作區
- **多根側欄** — 開啟一個或多個資料夾；每個都有自己的可摺疊區段，包含獨立的檔案樹
- **檔案樹** — 展開 / 摺疊資料夾、在分頁中開啟檔案、OS 層級 reveal、重新命名、刪除、新增檔案 / 資料夾
- **AI 看得到工作區** — 工作區根目錄會自動作為唯讀範圍加入 AI preamble
- **快速切換器**（`Ctrl+Shift+E`）— 工作區、檔案、作用中工作區中的全文 grep
- **拖曳重新排序** 工作區；展開的資料夾會在工作階段之間保留

### 匯出與整合
- **匯出 PDF** — 接近所見即所得：與編輯器相同的襯線字體和縮放、帶語法高亮的程式碼區塊、coral 行內程式碼、依內容自適應的表格
- **儲存為 Markdown** (.md 檔案)，簡潔可攜帶
- 編輯器內距設定會轉換成 PDF 邊距

### 使用者體驗
- **分頁 + 釘選 / 右鍵選單** — Pin / Unpin / Close / Close others / Close all but pinned / Close saved
- **深色 / 淺色主題** 加上 **Minimal 主題變體**（Mermaid 標誌色：teal + coral 配 slate）
- **Word 風格的縮放滑桿** 在狀態列 — `±` 按鈕 + 百分比讀數
- **字元 / 字數 / 行數 / token 計數器** 作為單一可移動單元
- **樣式化的 prompt / confirm 對話框** 全程使用（不再有原生瀏覽器彈出視窗）
- **自動儲存** - 不會遺失工作成果
- **多語言介面** - 英文、波蘭文、中文
- **快捷鍵速查視窗** - 所有快捷鍵的快速參考 (`Ctrl+/`)

### 進階功能
- **分割畫面檢視** - 並排編輯兩份文件，分割比例可調
- **分頁對比** - 左右兩個面板文件的 diff 比較 (`Ctrl+Shift+C`)
- **變更追蹤** - 查看自上次儲存以來的所有改動 (`Ctrl+Shift+D`)
- **程式碼檢視** - 在視覺化 WYSIWYG 與原始 Markdown 之間切換，並追蹤游標位置
- **AI Token 計數器** - 估算 GPT (OpenAI)、Claude (Anthropic) 和 Gemini (Google) 的 token 數
- **多視窗支援** - 開啟多個獨立的編輯器視窗
- **跨視窗分頁管理** - 在面板與視窗之間拖放分頁
- **檔案監聽** - 自動偵測外部檔案變更並重新載入內容
- **衝突偵測** - 當本機與外部都有改動時顯示行內 diff
- **手動重新載入** - 透過 `Ctrl+R` 從磁碟重新載入檔案

---

## 截圖

<p align="center">
<img width="3835" height="2071" alt="深色模式" src="https://github.com/user-attachments/assets/6dae5f4b-28b0-4803-9f07-9ac8b71581bb" />
  <br>
  <em>深色模式</em>
</p>

<p align="center">
<img width="3837" height="2071" alt="簡潔介面" src="https://github.com/user-attachments/assets/ce4bbd47-5df3-445a-af3a-b13cadf5db3f" />
  <br>
  <em>簡潔、極簡的介面，配以直觀的工具列</em>
</p>

<p align="center">
<img width="3840" height="2078" alt="多分頁編輯" src="https://github.com/user-attachments/assets/f8e5ef5b-bc36-45b6-8019-29c22f9aee48" />
  <br>
  <em>多分頁編輯、格式化文件與可點擊的目錄</em>
</p>

<p align="center">
  <img width="3828" height="2075" alt="C4 架構圖" src="https://github.com/user-attachments/assets/8d911a3a-e5e6-40dc-8d17-7e624a8c17c9" />
  <br>
  <em>帶縮放控制項和全螢幕模式的 C4 架構圖</em>
</p>

<p align="center">
 <img width="3820" height="2038" alt="全螢幕圖表檢視" src="https://github.com/user-attachments/assets/21d560c1-25bd-41a0-b1ed-83e356ff26d3" />
  <br>
  <em>帶 400% 縮放的全螢幕圖表檢視，便於細節查看</em>
</p>

<p align="center">
  <img width="1578" height="742" alt="程式碼與文件" src="https://github.com/user-attachments/assets/5969be85-95a1-4199-a378-cfeb6075c48d" />
  <br>
  <em>帶程式碼區塊和嵌入圖表的技術文件</em>
</p>

<p align="center">
<img width="3831" height="2081" alt="分割畫面檢視" src="https://github.com/user-attachments/assets/6fb41a24-958e-42c6-a56a-81ecf0d72a9d" />
  <br>
  <em>用於同時編輯兩份文件的分割畫面檢視</em>
</p>

<p align="center">
<img width="3830" height="2072" alt="分頁對比" src="https://github.com/user-attachments/assets/804dfb96-9d84-4bd6-ad3d-b6d0a8dbca06" />
  <br>
  <em>並排比較文件，逐行高亮 diff</em>
</p>

<p align="center">
<img width="3822" height="2073" alt="變更追蹤" src="https://github.com/user-attachments/assets/e4d2fcc5-d1a4-41f0-b7c7-16a389801206" />
  <br>
  <em>查看自上次儲存以來的所有改動，包括新增和刪除</em>
</p>

<p align="center">
<img width="3836" height="2076" alt="程式碼檢視" src="https://github.com/user-attachments/assets/c4823de1-4b66-4065-8c66-15b184d8619e" />
  <br>
  <em>在視覺化與 Markdown 程式碼檢視間切換，並追蹤游標</em>
</p>

<p align="center">
<img width="3834" height="1633" alt="鍵盤快捷鍵" src="https://github.com/user-attachments/assets/4594b71c-cb50-479d-ba8c-dd053efd34db" />
  <br>
  <em>所有鍵盤快捷鍵的快速參考 (Ctrl+/)</em>
</p>

<p align="center">
<img width="829" height="306" alt="AI Token 計數器" src="https://github.com/user-attachments/assets/8ffcf467-f02a-41e2-bda6-dda4fa44322d" />
  <br>
  <em>支援模型選擇的 AI Token 計數器（GPT、Claude、Gemini）</em>
</p>

<p align="center">
<img width="3019" height="1565" alt="多視窗" src="https://github.com/user-attachments/assets/a28effaa-3e5b-4a9b-8b58-7fb4f4053d15" />
  <br>
  <em>支援跨視窗拖放分頁的多視窗編輯</em>
</p>

---

## 安裝

### 下載

從 [發布頁面](https://github.com/Vesperino/MerMarkEditor/releases) 下載最新版本。

| 平台    | 下載                                                                                          |
|---------|-----------------------------------------------------------------------------------------------|
| Windows | [.exe / .msi 安裝程式](https://github.com/Vesperino/MerMarkEditor/releases/latest)             |
| macOS   | [.dmg（通用：Apple Silicon + Intel）](https://github.com/Vesperino/MerMarkEditor/releases/latest) |
| Linux   | [.deb / .AppImage](https://github.com/Vesperino/MerMarkEditor/releases/latest)                |

### 重要說明

本應用程式是開源軟體且未進行程式碼簽署。作業系統在首次啟動時可能會顯示安全警告：

- **Windows**（SmartScreen）：點擊「更多資訊」→「仍要執行」
- **macOS**：右鍵點擊應用程式 →「打開」→「打開」以略過 Gatekeeper

這是開源軟體在沒有付費程式碼簽署憑證的情況下散布時的標準行為。本儲存庫中的原始碼完全可供審閱。

### 系統需求

- **Windows**：Windows 10 或更新版本（64 位元）
- **macOS**：macOS 10.15 (Catalina) 或更新版本
- **Linux**：Ubuntu 22.04+ 或同等版本（需要 WebKitGTK 4.1）

---

## 使用

### 基本編輯

1. **開啟檔案**：`Ctrl+O`（macOS 上為 `Cmd+O`）
2. **儲存**：`Ctrl+S`（儲存為 Markdown）
3. **另存新檔**：`Ctrl+Shift+S`
4. **匯出 PDF**：點擊工具列中的 PDF 按鈕

### 鍵盤快捷鍵

| 操作 | 快捷鍵 |
|------|--------|
| 新增檔案 | `Ctrl+N` |
| 開啟檔案 | `Ctrl+O` |
| 儲存 | `Ctrl+S` |
| 另存新檔 | `Ctrl+Shift+S` |
| 匯出 PDF | `Ctrl+P` |
| 復原 | `Ctrl+Z` |
| 重做 | `Ctrl+Y` |
| 粗體 | `Ctrl+B` |
| 斜體 | `Ctrl+I` |
| 顯示變更 | `Ctrl+Shift+D` |
| 分頁對比 | `Ctrl+Shift+C` |
| 重新載入檔案 | `Ctrl+R` |
| 關閉分頁 | `Ctrl+W` |
| 下一個分頁 | `Ctrl+Tab` |
| 上一個分頁 | `Ctrl+Shift+Tab` |
| 跳到分頁 1–9 | `Ctrl+1` … `Ctrl+9` |
| 切換 程式碼 / 視覺化 檢視 | `Ctrl+Shift+V` |
| 放大 / 縮小 | `Ctrl++` / `Ctrl+-` |
| 重置縮放 | `Ctrl+0` |
| 設定 | `Ctrl+,` |
| 鍵盤快捷鍵 | `Ctrl+/` |
| 關閉對話框 | `Escape` |

> 在 macOS 上，使用 `⌘`（Cmd）取代 `Ctrl`。

### 建立 Mermaid 圖表

點擊工具列中的 **Mermaid** 按鈕或輸入：

~~~markdown
```mermaid
graph LR
    A[開始] --> B[處理]
    B --> C[結束]
```
~~~

這會建立一個流程圖：

```
[開始] --> [處理] --> [結束]
```

### 支援的圖表類型

- `graph` / `flowchart` - 流程圖
- `sequenceDiagram` - 循序圖
- `classDiagram` - 類別圖
- `stateDiagram-v2` - 狀態圖
- `erDiagram` - 實體關係圖
- `gantt` - 甘特圖
- `pie` - 圓餅圖
- `journey` - 使用者旅程圖
- `gitgraph` - Git 圖
- `mindmap` - 心智圖
- `timeline` - 時間軸

---

## 開發

### 前置需求

- [Node.js](https://nodejs.org/) 18+
- [Rust](https://rustup.rs/)（用於 Tauri）
- [pnpm](https://pnpm.io/)（建議）

### 設定

```bash
# 複製儲存庫
git clone https://github.com/Vesperino/MerMarkEditor.git
cd MerMarkEditor

# 安裝相依套件
pnpm install

# 開發模式執行
pnpm tauri dev

# 生產建置
pnpm tauri build
```

### 執行測試

```bash
# 執行測試
pnpm test

# 執行一次測試
pnpm test:run
```

### 技術堆疊

- **前端**：Vue 3 + TypeScript
- **編輯器**：TipTap（基於 ProseMirror）
- **圖表**：Mermaid.js
- **桌面**：Tauri 2.0
- **建置**：Vite

---

## 貢獻

歡迎貢獻！請隨時提交 Pull Request。

1. Fork 儲存庫
2. 建立你的功能分支（`git checkout -b feature/AmazingFeature`）
3. 提交你的修改（`git commit -m 'Add some AmazingFeature'`）
4. 推送到分支（`git push origin feature/AmazingFeature`）
5. 開啟一個 Pull Request

---

## 授權條款

本專案基於 **MIT 授權條款** - 詳情請參閱 [LICENSE](LICENSE) 檔案。

---

## 致謝

- [Codycody31](https://github.com/Codycody31) - 非常感謝對 macOS 與 Linux 的支援！
- [TipTap](https://tiptap.dev/) - Headless 編輯器框架
- [Mermaid](https://mermaid.js.org/) - 圖表與流程圖工具
- [Tauri](https://tauri.app/) - 桌面應用程式框架
- [Vue.js](https://vuejs.org/) - 漸進式 JavaScript 框架

---

## 支援

MerMark 現在以及未來都將基於 MIT 授權條款保持免費與開源。如果你覺得這個專案有用，歡迎：

- 在 GitHub 上點亮星標
- 回報 bug 與提出新功能建議
- 為程式碼庫做出貢獻
- [請我喝杯咖啡](https://buymeacoffee.com/vesperinio) — 完全自願，如果 MerMark 幫你節省了時間，可以這樣表示感謝

<p align="center">
  <a href="https://buymeacoffee.com/vesperinio">
    <img src="https://img.shields.io/badge/%E8%AB%8B%E6%88%91%E5%96%9D%E5%92%96%E5%95%A1-FFDD00?style=flat&logo=buy-me-a-coffee&logoColor=black" alt="請我喝咖啡" />
  </a>
</p>

---

<p align="center">
  由 <a href="https://github.com/Vesperino">Vesperino</a> 用 ❤️ 製作
</p>
