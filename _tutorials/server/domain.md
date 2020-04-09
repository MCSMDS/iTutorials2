---
layout: default
---
# 域名

<div id="mb-3">
<img src="domain.svg?v={{ "now" | date: "%s" }}" class="img-fluid" alt="Responsive image">
</div>

顶级域名: com

二级域名: example.com

三级域名: www.example.com

子域名: www.example.com 是 example.com 的子域名

父域名: example.com 是 www.example.com 的父域名

> 域名建议...

## 域名注册商

- [阿里云(推荐)](//wanwang.aliyun.com)
- [Godaddy(推荐)](//www.godaddy.com)
- [Freenom(免费)](//www.freenom.com)
- [腾讯云](//dnspod.cloud.tencent.com)
- [name](//www.name.com)
- [G Suite](//gsuite.google.com)

## 域名解析器

- [cloudflare(推荐)](//www.cloudflare.com)
- [笨牛网](//cdn.bnxb.com)
- [dnspod](//www.dnspod.cn)

<table class="table table-bordered">
<thead>

<tr>
<th scope="col">记录类型</th>
<th scope="col">名称</th>
<th scope="col">值</th>
</tr>

</thead>
<tbody>

<tr>
<th scope="row">A</th>
<td>@</td>
<td>IP 地址</td>
</tr>

<tr>
<th scope="row">A</th>
<td>WWW</td>
<td>IP 地址</td>
</tr>

</tbody>
</table>

## 节点选择

## 域名备案

## 删除域名解析缓存

1. 在地址栏中输入```cmd```
2. 敲回车
3. 在cmd中输入```ipconfig /flushdns```
4. 敲回车
5. 啟動谷歌瀏覽器
6. 进入 chrome://net-internals/#dns
7. 按 Clear host cache