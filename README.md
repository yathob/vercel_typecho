# vercel_typecho_plantscale
+ Typecho run on vercel used MySQL SSL Connection,database used plantscale

## 安装：
1. fork 本仓库

2. 登录vercel，添加本项目,部署

3. vercel为本应用添加plantscale集成，Settings=>Integrations

4. vercel为本应用配置环境变量，Settings=>Environment Variables，通过添加集成plantscale的方式，已经自动添加了数据库变量，再增加几个变量：ENGINE=MyISAM，PORT = 3306，CHARSET = utf8mb4，ADAPTER_NAME=Pdo_Mysql,PREFIX=typecho_

5. 返回项目，重新部署
6. 通过```https://域名/install.php```进行安装
7. 配置自己的域名，访问即可 
