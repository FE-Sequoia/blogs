# 📖 默耕书房 (Mogeng's Blog)

> **以终为始，默默耕耘。**

这是我的个人博客仓库，基于 **Hexo** 框架搭建，使用经典的 **NexT** 主题，并通过 **GitHub Actions** 实现自动化构建与部署。

🔗 **博客地址**: [https://fe-sequoia.github.io/blogs](https://fe-sequoia.github.io/blogs)

---

## 技术架构

* **框架**: Hexo (Node.js 环境)
* **主题**: Sea
* **部署**: GitHub Actions (自动构建至 `gh-pages` 分支)
* **静态托管**: GitHub Pages

---

## 常用操作命令

本项目本地无需全局安装 `hexo-cli`，请统一使用 `npx` 运行以保证依赖锁定：

### 1. 创作文章
```bash
npx hexo new "文章标题"

# 指定目录
npx hexo new -p "./dir/文章标题"
```

文章将生成在 source/_posts/文章标题.md

### 2. 本地预览
```bash
npx hexo clean && npx hexo server
```

访问 http://localhost:4000 查看实时预览效果。

### 3. 发布博客
只需将修改推送到 main 分支，GitHub Actions 会自动触发构建流水线：
```bash
git add .
git commit -m "feat: 新增文章"
git push origin main
```

## 注意事项 (Tips)
- 路径配置: 由于项目托管在子目录 /blogs/ 下，修改 _config.yml 时请务必保持 root: /blogs/ 配置，否则会导致 CSS/JS 等静态资源 404 错误。
- 页面类型: 创建“标签”或“分类”页后，需手动在对应的 index.md 中添加 type: tags 或 type: categories 属性，否则 NexT 无法渲染出聚合列表。
- 图片引用: 本项目开启了 post_asset_folder: true。建议将文章图片放入与文章同名的文件夹内，并使用 Markdown 相对路径引用。
- 依赖管理: 所有的主题和插件均通过 npm install 安装。若在其他环境运行，请先执行 npm install 同步环境。

## 目录说明
- .github/workflows/: 存放自动构建脚本 deploy.yml。
- source/_posts/: 博客文章源码 (Markdown)。
- source/categories/: 分类页。
- source/tags/: 标签页。
- _config.yml: Hexo 全局配置文件（包含 URL、路径、插件等）。
- _config.next.yml: NexT 主题自定义配置文件。

## 待办事项 (Roadmap)
- [ ] 完善“关于我”页面内容
- [ ] 集成 giscus 评论系统 (基于 GitHub Discussions)
- [ ] 开启文章阅读量统计功能
- [ ] 优化 SEO 关键词设置与站点地图提交

## 交流
如果你对我的文章感兴趣，或者有任何问题，欢迎在博客页面留言或在本项目提交 Issue。
