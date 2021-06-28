//头部导航配置
module.exports = [
  {
    "text": "首页",
    "link": "/",
    "icon": "reco-home"
  },
  //博客
  {
    "text": "博客",
    // iconfont的完整Classname
    "icon": "iconfont icon-microblog",
    "items": [
      {
        "text": "分类",
        // categories固定配置
        "link": "/categories/Git/",
        "icon": "reco-category"
      },
      {
        "text": "标签",
        // tag主题固定配置
        "link": "/tag/",
        "icon": "reco-tag"
      }
    ]
  },
  {
    "text": "笔记",
    "icon": "iconfont icon-bijiben-copy",
    "items": [
      {
        "text": "Html笔记",
        "link": "/docs/Html/",
        "icon": "iconfont icon-html",
      },
      {
        "text": "Css笔记",
        "link": "/docs/Css/",
        "icon": "iconfont icon-csswizardry",
      },
      {
        "text": "Js笔记",
        "link": "/docs/Js/",
        "icon": "iconfont icon-js",
      },
      {
        "text": "Vue笔记",
        "link": "/docs/Vue/",
        "icon": "iconfont icon-vuejs-fill",
      },
    ]
  },
  {
    "text": "爱好",
    "icon": "iconfont icon-aixin1",
    "items": [
      {
        "text": "音乐",
        "link": "",
        "icon": "iconfont icon-yinleyule",
      },
      {
        "text": "电影",
        "link": "",
        "icon": "iconfont icon-ai239",
      },
      {
        "text": "游戏",
        "link": "",
        "icon": "iconfont icon-iconfontyouxihudong",
      },
    ]
  },
  {
    "text": "时间轴",
    "link": "/timeline/",
    "icon": "reco-date"
  },
  {
    "text": "联系",
    "icon": "reco-message",
    "items": [
      {
        "text": "GitHub",
        "link": "https://github.com/recoluan",
        "icon": "reco-github"
      }
    ]
  }
]