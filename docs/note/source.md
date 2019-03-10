# 就从本博客开始

## 由来

最近阿里云搞活动，手痒，遂剁手尔买之。于是就有了部署本站的ECS（云服务器）。低配置高性价比，1核2G的U，40G点SSD，140元买了15个月的 ^_^（不是阿里云的广告啊，由于本人目前还未到25周岁，享受了24周岁以下自动获得学生身份的优惠政策~）。神说要有光 于是就有了光，我说要有博客（纯是因为有了台新服务器没处使劲儿），于是就有了这个博客。废话少说，上干货。

本站采用vuepress生成静态站点，Jenkins + GitHub hooks实现自动化部署，支持推送master自动发布、发布成功后自动推送tag到GitHub、手动发布（Branch or Tag）。已最方便的自动部署为前提，又实现了异常情况下的手动回滚或发布。

## 实现

真正的干货来了，没错，就是干的开裂那种~

::: tip 提示：
以下所有操作是基于CentOS 7.3系统的
:::

由于Jenkins是基于Java，所以我们先查看是否安装了Java

```
java -version
```

我的机器装了Java 如果你也一样 应该会出现如下提示：

```
openjdk version "1.8.0_201"
OpenJDK Runtime Environment (build 1.8.0_201-b09)
OpenJDK 64-Bit Server VM (build 25.201-b09, mixed mode)
```

如果没装Java的同学自行Google yum 安装 Java 就行了，非常方便
好的，现在我们可以安装Jenkins。没错，还是用yum。Because i like it

::: tip 提示：
Jenkins官网最新稳定版：[https://pkg.jenkins.io/redhat-stable/](https://pkg.jenkins.io/redhat-stable/?_blank)
:::

下载依赖

```
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
```

导入秘钥

```
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
```

安装Jenkins

```
yum install jenkins
```

接下来我们找到Jenkins的安装路径

```
rpm -ql jenkins
```

输出如下

```
/etc/init.d/jenkins
/etc/logrotate.d/jenkins
/etc/sysconfig/jenkins
/usr/lib/jenkins
/usr/lib/jenkins/jenkins.war // 这个就是Jenkins的安装路径
/usr/sbin/rcjenkins
/var/cache/jenkins
/var/lib/jenkins
/var/log/jenkins
```

Jenkins默认8008端口 查看其他端口占用情况

```
netstat -ntlp
```

输出如下

```
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        0      0 0.0.0.0:8080            0.0.0.0:*               LISTEN      5172/java           
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      4967/nginx: master  
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      2037/sshd           
```

如果未占用8080端口 直接启动jenkins

```
java -jar /usr/lib/jenkins/jenkins.war
```

如果希望后台不间断运行 请使用nohup

```
nohup java -jar /usr/lib/jenkins/jenkins.war &
```

验证jenkins

浏览器输入 http://ip:port （例如 http://192.168.114.128:8080）进入jenkins解密界面

获取密码
```
cat /var/lib/jenkins/secrets/initialAdminPassword
```

其余操作

- 输入密码 => 继续
- 安装插件
- 注册账号 (记好账号密码，因为是root账号)
- 开始使用Jenkins