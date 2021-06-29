---
title: 提交代码到Gitee
date: '2021-06-16 15:30'
categories: 
 - Git
tags: 
 - Gitee码云
---



## gitee公钥

[配置和使用](https://gitee.com/help/articles/4181#article-header0)



## git提交

*在项目中打开控制面板*

>  git config --global user.email "you@example.com"
>  git config --global user.name "Your Name"

*如果项目中无git文件，初始化git*

> ​	git init

*检查git工作环境是否干净*

干净 ? 提交云端 : 提交本地暂存区

> ​	git status

*提交本地暂存区，再提交云端*

> 添加到本地缓存
>
> git add .
>
> 文件提交到本地
>
> git commit -m "add files"

![image-20210413103347962](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210413103347962.png)

*提交云端，以gitee为例*

>  添加到远程仓库
>
>  git remote add origin https://gitee.com/bad_morty/vue_shop.git	
>
>  如果上一步输错的话，可用此句删除远程仓库缓存
>
>  git remote rm origin
>
>  提交到码云
>
>  git push -u origin master
>
>  

完成新功能时，需要**创建一个新分支**并提交到**该分支**上，

如果需要**更新主分**支可以使新分支**与主分支合并**，再提交到主分支

*创建本地分支* 

> git branch 新分支名

*查看当前分支*

> ​	git branch

*切换分支*

>git checkout 分支名

 *新建分支并切换到新分支*

> git checkout -b 新分支名

*合并分支（新分支与主分支合并）*

>//当前分支为主分支master
>
>git merge '新分支'

*上传分支到云端*

>git push -u origin 分支名

