# GitHub Pages 部署

这个项目已经配置好 GitHub Pages 自动发布。每次推送到 `main` 分支后，GitHub Actions 会自动构建静态网站并发布。

## 第一次开启

1. 打开 GitHub 仓库：`dengl7871-wq/dandle-personal-brand`
2. 进入 `Settings` -> `Pages`
3. 在 `Build and deployment` 里把 `Source` 选择为 `GitHub Actions`
4. 回到 `Actions` 页面，等待 `Deploy GitHub Pages` 变成绿色

发布地址通常是：

`https://dengl7871-wq.github.io/dandle-personal-brand/`

## 注意

- 如果仓库是 private，GitHub Pages 可能需要对应账号计划支持；最省事的方式是保持 public。
- GitHub Pages 在国内访问不一定稳定，适合当作公开展示链接和备用链接。国内稳定访问仍建议用腾讯云 EdgeOne Pages、CloudBase 或对象存储加 CDN。
