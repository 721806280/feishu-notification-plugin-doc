import{_ as n,a as s}from"./faq-signature.57a46fe8.js";import{_ as a,o as e,c as t,a as i}from"./app.67c2241d.js";const o={},c=i('<h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1><h3 id="_1-无法发送消息通知" tabindex="-1"><a class="header-anchor" href="#_1-无法发送消息通知" aria-hidden="true">#</a> 1. 无法发送消息通知</h3><p><strong>情况一：安装完插件后，没有重启jenkins</strong><br> 重新启动Jenkins即可。</p><p><strong>情况二：没有勾选通知时机</strong><br> 按图勾选对应的 <code>通知时机</code> 并重新 启动Jenkins。 <img src="'+n+'" alt=""></p><p><strong>情况三：没有正确配置加密密钥</strong><br> 检查在飞书控制台是否开启对应的 <code>签名校验</code> 配置，如已经配置请在机器人配置中配置 <code>加密密钥</code> 信息。 <img src="'+s+`" alt=""></p><h3 id="_2-点击消息按钮无法正常跳转" tabindex="-1"><a class="header-anchor" href="#_2-点击消息按钮无法正常跳转" aria-hidden="true">#</a> 2. 点击消息按钮无法正常跳转</h3><p><strong>情况一：未配置 Jenkins Location URL</strong></p><p>点击 <code>Manage Jenkins</code> 后打开 <code>Configure System</code>， 找到 <code>Jenkins Location</code> 配置项目， 配置 <code>Jenkins URL</code> 后重启即可;</p><h3 id="_3-jenkins-停止-重启-重载" tabindex="-1"><a class="header-anchor" href="#_3-jenkins-停止-重启-重载" aria-hidden="true">#</a> 3. Jenkins 停止&amp;重启&amp;重载</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 格式 https://[jenkins-server-address][:port]/[command]</span>
 
<span class="token comment"># 退出</span>
https://<span class="token punctuation">[</span>jenkins-server-address<span class="token punctuation">]</span><span class="token punctuation">[</span>:port<span class="token punctuation">]</span>/exit
 
<span class="token comment"># 重启</span>
https://<span class="token punctuation">[</span>jenkins-server-address<span class="token punctuation">]</span><span class="token punctuation">[</span>:port<span class="token punctuation">]</span>/restart
 
<span class="token comment"># 重载</span>
https://<span class="token punctuation">[</span>jenkins-server-address<span class="token punctuation">]</span><span class="token punctuation">[</span>:port<span class="token punctuation">]</span>/reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),r=[c];function d(p,l){return e(),t("div",null,r)}const h=a(o,[["render",d],["__file","FAQ.html.vue"]]);export{h as default};
