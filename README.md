cutepack
========

# 简单的JS打包工具 #

- 简介
> 把多个JS文件，压缩并依次打包进一个JS文件，压缩采用uglify-js引擎，适用于mobile开发，多个模块文件打包到一个文件里，减少http请求消耗。PS：没有处理常见的模块依赖，仅用于简单的压缩打包 :）

- **安装**
> npm install cutepack -g （未发布，暂不可用 -^-）

- 使用
> PS: 这里的test目录并非单元测试文件。

 > 直接把源码down下来，依据/test目录下的build.js，修改‘paths’数组为自己相应的需要打包的文件路径（暂时只支持同一磁盘文件，相对路径形式，非http等线上文件），命令行运行node build.js，打包完成，生成build文件。    text