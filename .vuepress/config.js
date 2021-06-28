module.exports = {
  //运行：rua dev
  "title": "Cobb's blog",
  "description": "No such thing as life that's better than yourz",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "img/semi-logo.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  'plugins': [
    // 音乐插件
    ['meting', {
      meting: {
        // 腾讯
        server: "tencent",
        // 读取歌单
        type: "playlist",
        mid: "8030792032",
      },
      // 不配置该项的话不会出现全局播放器
      aplayer: {
        // 吸底模式
        fixed: false,
        mini: true,
        // 自动播放
        autoplay: false,
        // 歌曲栏折叠
        listFolded: true,
        // 进度条颜色
        theme: '#4b91ed',
        //是否循环播放
        loop: 'true',
        // 播放顺序为随机
        order: 'random',
        // 初始音量
        volume: 0.2,
        // 关闭歌词显示
        lrcType: 0,
        //折叠播放列表
        listFolded: true,
      },
    }],
    //代码块复制插件
    ['vuepress-plugin-code-copy', true]
  ],

  //博客主题配置
  "theme": "reco",
  "themeConfig": {
    //导航栏
    "nav": require('./nav.js'),
    
    //侧边栏
    "sidebar": require('./sidebar.js'),
    //右侧子侧边栏是否打开
    "subSidebar": 'auto',

    "type": "blog",
    
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-reco-doc.vercel.app/"
      }
    ],
    "logo": "/img/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Cobb_Lu",
    "authorAvatar": "/img/avatar1.jpg",
    "record": "xxxx",
    "startYear": "2021",
    "sidebarDepth": 2,
    "displayAllHeaders": true, 
    //子标题动态改变
    "activeHeaderLinks": true,
  },
  // 是否显示代码块行数
  "markdown": {
    "lineNumbers": true
  },
}