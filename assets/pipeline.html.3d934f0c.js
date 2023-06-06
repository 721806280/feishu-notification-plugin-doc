import{_ as n,o as s,c as a,a as i}from"./app.67c2241d.js";const e={},t=i(`<h1 id="pipeline-项目" tabindex="-1"><a class="header-anchor" href="#pipeline-项目" aria-hidden="true">#</a> Pipeline 项目</h1><p><strong>robot 为机器人ID，在 <code>飞书机器人配置</code> 中查看</strong></p><h2 id="_1-文本消息" tabindex="-1"><a class="header-anchor" href="#_1-文本消息" aria-hidden="true">#</a> 1. 文本消息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages <span class="token punctuation">{</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&#39;发送文本消息...&#39;</span>
            <span class="token punctuation">}</span>
            post <span class="token punctuation">{</span>
                success <span class="token punctuation">{</span>
                    feiShuTalk <span class="token punctuation">(</span>
                        robot: <span class="token string">&#39;f72aa1bb-0f0b-47c7-8387-272d266dc25c&#39;</span>,
                        type: <span class="token string">&#39;TEXT&#39;</span>,
                        text: <span class="token punctuation">[</span>
                            <span class="token string">&quot;新更新提醒&quot;</span>,
                            <span class="token string">&#39;&lt;at user_id=&quot;all&quot;&gt;所有人&lt;/at&gt;&#39;</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-群名片消息" tabindex="-1"><a class="header-anchor" href="#_2-群名片消息" aria-hidden="true">#</a> 2. 群名片消息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages <span class="token punctuation">{</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&#39;发送群名片消息...&#39;</span>
            <span class="token punctuation">}</span>
            post <span class="token punctuation">{</span>
                success <span class="token punctuation">{</span>
                    feiShuTalk <span class="token punctuation">(</span>
                        robot: <span class="token string">&#39;f72aa1bb-0f0b-47c7-8387-272d266dc25c&#39;</span>,
                        type: <span class="token string">&#39;SHARE_CHAT&#39;</span>,
                        shareChatId: <span class="token string">&#39;oc_f5b1a7eb27ae2c7b6adc2a74faf339ff&#39;</span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-图片消息" tabindex="-1"><a class="header-anchor" href="#_3-图片消息" aria-hidden="true">#</a> 3. 图片消息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages <span class="token punctuation">{</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&#39;发送图片消息...&#39;</span>
            <span class="token punctuation">}</span>
            post <span class="token punctuation">{</span>
                success <span class="token punctuation">{</span>
                    feiShuTalk <span class="token punctuation">(</span>
                        robot: <span class="token string">&#39;f72aa1bb-0f0b-47c7-8387-272d266dc25c&#39;</span>,
                        type: <span class="token string">&#39;IMAGE&#39;</span>,
                        imageKey: <span class="token string">&#39;img_ecffc3b9-8f14-400f-a014-05eca1a4310g&#39;</span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-富文本消息" tabindex="-1"><a class="header-anchor" href="#_4-富文本消息" aria-hidden="true">#</a> 4. 富文本消息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages <span class="token punctuation">{</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&#39;发送富文本消息...&#39;</span>
            <span class="token punctuation">}</span>
            post <span class="token punctuation">{</span>
                success <span class="token punctuation">{</span>
                    feiShuTalk <span class="token punctuation">(</span>
                        robot: <span class="token string">&#39;f72aa1bb-0f0b-47c7-8387-272d266dc25c&#39;</span>,
                        type: <span class="token string">&#39;POST&#39;</span>,
                        title: <span class="token string">&#39;项目更新通知&#39;</span>,
                        post: <span class="token punctuation">[</span>
                            <span class="token punctuation">[</span>
                                <span class="token punctuation">[</span>
                                    <span class="token string">&quot;tag&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;text&quot;</span>,
                                    <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;项目有更新: &quot;</span>
                                <span class="token punctuation">]</span>,
                                <span class="token punctuation">[</span>
                                    <span class="token string">&quot;tag&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;a&quot;</span>,
                                    <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;请查看&quot;</span>,
                                    <span class="token string">&quot;href&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;https://www.example.com/&quot;</span>  
                                <span class="token punctuation">]</span>,
                                <span class="token punctuation">[</span>
                                    <span class="token string">&quot;tag&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;at&quot;</span>,
                                    <span class="token string">&quot;user_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ou_xxxxxx&quot;</span>,
                                    <span class="token string">&quot;user_name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;tom&quot;</span>
                                <span class="token punctuation">]</span>
                            <span class="token punctuation">]</span>,
                            <span class="token punctuation">[</span>
                                <span class="token punctuation">[</span>
                                    <span class="token string">&quot;tag&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;text&quot;</span>,
                                    <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;项目有更新:&quot;</span>
                                <span class="token punctuation">]</span>,
                                <span class="token punctuation">[</span>
                                    <span class="token string">&quot;tag&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;at&quot;</span>,
                                    <span class="token string">&quot;user_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;all&quot;</span>,
                                    <span class="token string">&quot;user_name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;所有人&quot;</span>
                                <span class="token punctuation">]</span>
                            <span class="token punctuation">]</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-卡片消息" tabindex="-1"><a class="header-anchor" href="#_5-卡片消息" aria-hidden="true">#</a> 5. 卡片消息</h2><blockquote><ol><li>按钮颜色 <code>type</code> 的取值范围： primary | danger | default</li><li>字体颜色 <code>color</code> 的取值范围： green：绿色文本 | red：红色文本 | grey：灰色文本 | default：白底黑字样式</li></ol></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages <span class="token punctuation">{</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                <span class="token builtin class-name">echo</span> <span class="token string">&quot;发送卡片消息...&quot;</span>
            <span class="token punctuation">}</span>
            post <span class="token punctuation">{</span>
                success <span class="token punctuation">{</span>
                    feiShuTalk <span class="token punctuation">(</span>
                        robot: <span class="token string">&quot;f72aa1bb-0f0b-47c7-8387-272d266dc25c&quot;</span>,
                        type: <span class="token string">&quot;INTERACTIVE&quot;</span>,
                        title: <span class="token string">&quot;📢 Jenkins 构建通知&quot;</span>,
                        text: <span class="token punctuation">[</span>
                            <span class="token string">&quot;📋 **任务名称**：[<span class="token variable">\${JOB_NAME}</span>](<span class="token variable">\${JOB_URL}</span>)&quot;</span>,
                            <span class="token string">&quot;🔢 **任务编号**：[<span class="token variable">\${BUILD_DISPLAY_NAME}</span>](<span class="token variable">\${BUILD_URL}</span>)&quot;</span>,
                            <span class="token string">&quot;🌟 **构建状态**: &lt;font color=&#39;green&#39;&gt;成功&lt;/font&gt;&quot;</span>,
                            <span class="token string">&quot;🕐 **构建用时**: <span class="token variable">\${currentBuild.duration}</span> ms&quot;</span>,
                            <span class="token string">&quot;👤 **执  行 者**: Started by user anonymous&quot;</span>,
                            <span class="token string">&quot;&lt;at id=all&gt;&lt;/at&gt;&quot;</span>
                        <span class="token punctuation">]</span>,
                        buttons: <span class="token punctuation">[</span>
                           <span class="token punctuation">[</span>
                              title: <span class="token string">&quot;更改记录&quot;</span>,
                              url: <span class="token string">&quot;<span class="token variable">\${BUILD_URL}</span>changes&quot;</span>
                           <span class="token punctuation">]</span>,
                           <span class="token punctuation">[</span>
                              title: <span class="token string">&quot;控制台&quot;</span>,
                              type: <span class="token string">&quot;danger&quot;</span>,
                              url: <span class="token string">&quot;<span class="token variable">\${BUILD_URL}</span>console&quot;</span>
                           <span class="token punctuation">]</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[t];function c(p,u){return s(),a("div",null,l)}const d=n(e,[["render",c],["__file","pipeline.html.vue"]]);export{d as default};
