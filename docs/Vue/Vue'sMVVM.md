---
title: MVVM
publish: false
---

*`Model–view–viewmodel`，是一种软件[架构模式]*

## 1.组成

- 模型

  *模型*是指代表真实状态内容的[领域模型](https://zh.wikipedia.org/wiki/领域模型)（面向对象），或指代表内容的[数据访问层](https://zh.wikipedia.org/wiki/数据访问层)（以数据为中心）。

- 视图

  视图是用户在屏幕上看到的结构、布局和外观（UI)

- **视图模型**

  是一个**值转换器**，这意味着视图模型负责从模型中暴露（转换）数据对象对象，以便轻松管理和呈现对象

- 绑定器

  声明性数据和命令绑定隐含在MVVM模式中



## 2.vue的MVVM

![image-20210421151040441](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210421151040441.png)

![image-20210421153014175](https://gitee.com/bad_morty/cblog-images/raw/master/img/image-20210421153014175.png)