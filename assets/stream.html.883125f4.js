import{_ as n,o as s,c as a,a as t}from"./app.67c2241d.js";const e={},p=t(`<h1 id="stream-使用指南" tabindex="-1"><a class="header-anchor" href="#stream-使用指南" aria-hidden="true">#</a> Stream 使用指南</h1><p>Java 8 中新增了一个 Stream （流）的概念，可以更加方便、高效地处理集合数据。Stream 和传统的集合操作非常不同，它提供了一种基于声明式表达式的编程模型，可以让我们轻松地完成复杂的集合操作。</p><p>简单来说，Stream 就是一组支持特定聚合操作的元素序列。Stream 以某种形式存在于各种集合类库中，它可以用来代替传统的 for 循环遍历集合，并且可以对集合中的元素进行过滤、映射、排序等操作，最后将结果聚合成一个值。</p><h2 id="stream-特点" tabindex="-1"><a class="header-anchor" href="#stream-特点" aria-hidden="true">#</a> Stream 特点</h2><ul><li>转换：在 Stream 中，可以很方便地将一个集合转换为另一个集合，并且转换过程不会修改原有数据。</li><li>过滤：可以根据特定条件过滤集合中的元素。</li><li>映射：可以通过某个函数对集合中的元素进行映射，生成新的集合。</li><li>排序：可以根据集合中元素的某个属性进行排序。</li><li>归约：可以将集合中的所有元素归约成一个值。</li></ul><h2 id="stream-常见操作" tabindex="-1"><a class="header-anchor" href="#stream-常见操作" aria-hidden="true">#</a> Stream 常见操作</h2><ul><li><p>创建流（CreateStream）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//从集合创建流</span>
<span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stream1 <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;from&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token comment">//从数组创建流</span>
<span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stream2 <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//使用Stream.of()创建流</span>
<span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> stream3 <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">3.0</span><span class="token punctuation">,</span> <span class="token number">4.0</span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token comment">//使用Stream.iterate()创建无限流</span>
<span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stream4 <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">iterate</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> n <span class="token operator">-&gt;</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token comment">//使用Stream.generate()创建无限流</span>
<span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> stream5 <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token operator">::</span><span class="token function">currentTimeMillis</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//过滤偶数并加以输出</span>
stream2<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>n <span class="token operator">-&gt;</span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>转换（Transformation）</p><p>使用 <code>map()</code> 方法将一个集合中的元素转换为另一个元素，并生成一个新的集合。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// map() 函数将字符串列表中的每个元素转换成该字符串的长度，生成一个整数列表。</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;orange&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> lengths <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token operator">::</span><span class="token function">length</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>过滤（Filtering）</p><p>使用 <code>filter()</code> 方法可以根据特定的条件过滤集合中的元素，只保留符合条件的元素。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// filter() 函数保留了集合中包含字母 &quot;a&quot; 的字符串，生成一个新的字符串列表</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;orange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;peach&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> filtered <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>str <span class="token operator">-&gt;</span> str<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>映射（Mapping）</p><p>使用 <code>flatMap()</code> 方法对集合中的元素进行映射，生成一个新的集合。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// flatMap() 函数将嵌套的集合拆分成一维数组，并生成一个整数列表</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> numbers <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> flattened <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token operator">::</span><span class="token function">stream</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>排序（Sorting）</p><p>使用 <code>sorted()</code> 方法可以根据集合中元素的某个属性进行排序。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// sorted() 函数根据字符串的自然顺序对字符串列表中的元素进行排序，并生成一个新的字符串列表</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;orange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;apple&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> sorted <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">sorted</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>归约（Reduction）</p><p>使用 reduce() 方法可以将集合中的所有元素归约成一个值。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// reduce() 函数将整数列表中的所有元素求和，生成一个 Optional 类型的结果</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> sum <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token operator">::</span><span class="token function">sum</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="中间操作和收集操作" tabindex="-1"><a class="header-anchor" href="#中间操作和收集操作" aria-hidden="true">#</a> 中间操作和收集操作</h2><table><thead><tr><th>操作</th><th>返回值类型</th><th>操作描述</th></tr></thead><tbody><tr><td><code>filter(Predicate&lt;T&gt; predicate)</code></td><td><code>Stream&lt;T&gt;</code></td><td>过滤流中不符合条件的元素</td></tr><tr><td><code>map(Function&lt;T, R&gt; mapper)</code></td><td><code>Stream&lt;R&gt;</code></td><td>将流中的元素映射为另一个类型</td></tr><tr><td><code>flatMap(Function&lt;T, Stream&lt;R&gt;&gt; mapper)</code></td><td><code>Stream&lt;R&gt;</code></td><td>将每个流元素映射为一个流，再将所有流合并成一个流</td></tr><tr><td><code>distinct()</code></td><td><code>Stream&lt;T&gt;</code></td><td>去除流中重复的元素</td></tr><tr><td><code>sorted()</code></td><td><code>Stream&lt;T&gt;</code></td><td>按升序排序流中的元素</td></tr><tr><td><code>peek(Consumer&lt;T&gt; action)</code></td><td><code>Stream&lt;T&gt;</code></td><td>对流中的元素执行操作而不改变流本身</td></tr><tr><td><code>limit(long maxSize)</code></td><td><code>Stream&lt;T&gt;</code></td><td>限制最大的元素个数</td></tr><tr><td><code>skip(long n)</code></td><td><code>Stream&lt;T&gt;</code></td><td>跳过前 n 个元素</td></tr><tr><td><code>concat(Stream&lt;T&gt; a, Stream&lt;T&gt; b)</code></td><td><code>Stream&lt;T&gt;</code></td><td>合并两个流</td></tr><tr><td><code>collect(Collector&lt;T, A, R&gt; collector)</code></td><td><code>R</code></td><td>将流中的元素收集到一个容器中，然后返回经过容器转换后的结果</td></tr><tr><td><code>count()</code></td><td><code>long</code></td><td>返回流中元素的数量</td></tr><tr><td><code>max(Comparator&lt;T&gt; comparator)</code></td><td><code>Optional&lt;T&gt;</code></td><td>根据指定的比较器返回流中的最大元素</td></tr><tr><td><code>min(Comparator&lt;T&gt; comparator)</code></td><td><code>Optional&lt;T&gt;</code></td><td>根据指定的比较器返回流中的最小元素</td></tr><tr><td><code>findFirst()</code></td><td><code>Optional&lt;T&gt;</code></td><td>返回流中的第一个元素</td></tr><tr><td><code>findAny()</code></td><td><code>Optional&lt;T&gt;</code></td><td>返回流中的任意一个元素</td></tr></tbody></table><h2 id="collectors-类的静态工厂方法" tabindex="-1"><a class="header-anchor" href="#collectors-类的静态工厂方法" aria-hidden="true">#</a> Collectors 类的静态工厂方法</h2><table><thead><tr><th>方法</th><th>返回类型</th><th>描述</th></tr></thead><tbody><tr><td><code>toList()</code></td><td><code>Collector&lt;T, ?, List&lt;T&gt;&gt;</code></td><td>将流中元素收集到一个List集合中</td></tr><tr><td><code>toSet()</code></td><td><code>Collector&lt;T, ?, Set&lt;T&gt;&gt;</code></td><td>将流中元素收集到一个Set集合中</td></tr><tr><td><code>toMap(Function&lt;? super T, ? extends K&gt; keyMapper, Function&lt;? super T, ? extends U&gt; valueMapper)</code></td><td><code>Collector&lt;T, ?, Map&lt;K,U&gt;&gt;</code></td><td>根据指定的键值映射函数将流中元素收集到一个Map集合中，如果有重复的键，则抛出IllegalStateException异常</td></tr><tr><td><code>toConcurrentMap(Function&lt;? super T, ? extends K&gt; keyMapper, Function&lt;? super T, ? extends U&gt; valueMapper)</code></td><td><code>Collector&lt;T, ?, ConcurrentMap&lt;K,U&gt;&gt;</code></td><td>根据指定的键值映射函数将流中元素收集到一个ConcurrentMap集合中，如果有重复的键，则抛出IllegalStateException异常</td></tr><tr><td><code>joining()</code></td><td><code>Collector&lt;CharSequence, ?, String&gt;</code></td><td>将流中元素拼接成一个字符串</td></tr><tr><td><code>joining(CharSequence delimiter)</code></td><td><code>Collector&lt;CharSequence, ?, String&gt;</code></td><td>将流中元素以指定的分隔符拼接成一个字符串</td></tr><tr><td><code>joining(CharSequence delimiter, CharSequence prefix, CharSequence suffix)</code></td><td><code>Collector&lt;CharSequence, ?, String&gt;</code></td><td>将流中元素以指定的分隔符、前缀和后缀拼接成一个字符串</td></tr><tr><td><code>counting()</code></td><td><code>Collector&lt;T, ?, Long&gt;</code></td><td>返回流中元素的数量</td></tr><tr><td><code>summingInt(ToIntFunction&lt;? super T&gt; mapper)</code></td><td><code>Collector&lt;T, ?, Integer&gt;</code></td><td>将流中元素经过指定函数转换后的结果求和</td></tr><tr><td><code>averagingInt(ToIntFunction&lt;? super T&gt; mapper)</code></td><td><code>Collector&lt;T, ?, Double&gt;</code></td><td>将流中元素经过指定函数转换后的结果求平均数</td></tr><tr><td><code>maxBy(Comparator&lt;? super T&gt; comparator)</code></td><td><code>Collector&lt;T, ?, Optional&lt;T&gt;&gt;</code></td><td>根据指定的比较器返回流中的最大元素</td></tr><tr><td><code>minBy(Comparator&lt;? super T&gt; comparator)</code></td><td><code>Collector&lt;T, ?, Optional&lt;T&gt;&gt;</code></td><td>根据指定的比较器返回流中的最小元素</td></tr></tbody></table>`,11),o=[p];function c(l,u){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","stream.html.vue"]]);export{r as default};