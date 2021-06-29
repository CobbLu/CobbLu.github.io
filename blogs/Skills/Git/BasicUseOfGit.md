---
title: Git的基本使用
date: '2021-06-28 18:26'
categories: 
 - Git
---
## 1.工作机制

![image-20210628105252291](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628105252291.png)

## 2.使用

### 2.1.打开方式

在项目路径下鼠标右键选择`Git Bash Here`打开Git客户端，此时Git面板路径会自动进入到项目中

**注意**：Git客户端可以使用**linux命令**

![image-20210628111343149](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628111343149.png)

![image-20210628111602334](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628111602334.png)



## 3.常用命令

| Command                                  | effect         |
| ---------------------------------------- | -------------- |
| git config --global user.name bad_morty  | 设置用户签名   |
| git config --global user.email xx@xx.com | 设置用户签名   |
| git init                                 | 初始化本地库   |
| git status                               | 查看本地库状态 |
| git commit -m '提交信息备注' 文件名      | 提交到本地库   |
| git reflog                               | 查看历史记录   |
| git reset --hard 版本号                  | 版本穿梭       |
|                                          |                |



### 3.1.用户签名

*区分不同操作者身份*

**注意**

这里设置用户签名和将来登录GitHub (或其他代码托管中心)的账号没有任何关系

>git config --global user.name bad_morty
>
>git config --global user.email xxx@xxx.com

设置完签名后git会在c盘当前用户文件夹下生成`.gitconfig`配置文件

![image-20210628110727034](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628110727034.png)



### 3.2.初始化本地库

*获取git目录的管理权*

>git init

当前路径生成`.git`文件夹（隐藏的文件）

![image-20210628111915813](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628111915813.png)



### 3.3.查看本地库状态

>git status

当前目录有文件未提交暂存区的状态

![image-20210628112917555](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628112917555.png)

当前目录文件已提交(add)暂存区状态

![image-20210628122913820](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628122913820.png)

提交到本地库(add+commit)的状态

![image-20210628123612325](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628123612325.png)

修改本地文件status也会改变

![image-20210628124255327](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628124255327.png)

### 3.4.添加暂存区

>git add 文件名
>
>.全部

>git rm --cached 文件名	//删除暂存区文件(不是本地文件)



### 3.5.提交本地库

>git commit -m '提交信息备注' 文件名

![image-20210628123540548](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628123540548.png)



### 3.6.查看日志信息

查看精简版本信息

>git reflog

![image-20210628123725415](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628123725415.png)

查看详细的版本信息

>git log

![image-20210628123831927](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628123831927.png)



### 3.7.版本穿梭

*git切换版本，实际上是移动HEAD指针*

![image-20210628130858961](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628130858961.png)

>git reset --hard 目标版本号

当前版本号指向c2d2d14

![image-20210628125212968](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628125212968.png)

通过`reset`将版本号指向7c31fad

![image-20210628125917741](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628125917741.png)



## 4.分支操作

| Command                | effect                             |
| ---------------------- | ---------------------------------- |
| git branch 分支名      | 创建分支                           |
| git checkout -b 分支名 | 创建分支并切换到新分支             |
| git branch -v          | 查看分支                           |
| git checkout 分支名    | 切换分支                           |
| git merge 指定分支     | 把**指定分支**合并到**当前分支**上 |

### 4.1.查看分支

显示所有分支的版本号和提交备注

>git branch -v

![image-20210628132203165](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628132203165.png)

### 4.2.合并分支

>git merge 指定分支

>git reset --hard HEAD	//回到合并前的状态

将test1分支合并到master分支上

![image-20210628143640419](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628143640419.png)

**注意**：合并时可能让你确定合并信息，只需输入`:wq`即可

![image-20210628143854784](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628143854784.png)

合并之前两分支的helloGit.txt文件

![image-20210628143554989](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628143554989.png)

合并之后两分支的helloGit.txt文件

![image-20210628144124731](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628144124731.png)



### 4.3.冲突合并

合并分支时，两个分支在**同一个文件的同一个位置**有两套完全**不同的修改**，就会产生冲突。Git 无法替决定使用哪一个，必须**人为决定**新代码内容

master分支和test1分支的helloGit.txt文件

![image-20210628150306796](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628150306796.png)

将test1分支合并到master分支上

![image-20210628150510826](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628150510826.png)

此时master分支的helloGit.txt会有所改变

![image-20210628150659802](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628150659802.png)

手动选择保存两个文件（都有6行数据）的修改

![image-20210628151139882](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628151139882.png)

再一次提交修改过后的文件到暂存区

>git add helloGit.txt
>
>git commit -m 'merge test1' 
>
>**注意**:此时commit命令**不能带文件名**

![image-20210628151703996](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628151703996.png)

此时master分支的helloGit.txt合并成功

![image-20210628151925998](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628151925998.png)



## 5.远程仓库操作

| Command                        | effect                                                   |
| ------------------------------ | -------------------------------------------------------- |
| git remote -v                  | 查看当前所有远程地址别名                                 |
| git remote add 别名 远程地址   | 为远程地址起别名                                         |
| git remote rm 别名             | 删除别名                                                 |
| git push (-u) 别名/地址 分支名 | 推送本地分支上的内容到远程                               |
| git clone 远程地址             | 克隆远程仓库到本地                                       |
| git pull 别名/地址 分支名      | 将远程仓库对于分支最新内容拉下来后与当前本地分支直接合井 |

-u：选项会指定一个默认主机且.gitconfig会记录分支remote和merge的信息，后面就可以不加任何参数使用git push（下次提交不同分支使用-u会覆盖掉前一个使用-u提交的分支）

### 5.1.远程地址别名

>git remote add 别名 远程地址 
>
>git remote -v

![image-20210628154823107](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628154823107.png)



### 5.2.推送本地库到远程

>git push 别名 分支

![image-20210628155242215](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628155242215.png)



### 5.3.拉取远程库更新本地

>git pull 别名/地址 分支名

远程库中helloGit.txt被修改

![image-20210628155753084](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628155753084.png)

本地库拉取远程库更新helloGit.txt，

![image-20210628160027587](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628160027587.png)

更新后的本地库无需再度提交

![image-20210628160219260](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210628160219260.png)



