export function initHudBackground() {
  const sections = document.querySelectorAll(
    ".manifesto-section, .journey-section, .bento-section",
  );

  const codeSnippet = `
<span class="kw-pink">package</span> com.dr4co.sys.kernel;                                                     <span class="comment">// 0x7F_SYS_CORE // システム・アクティブ</span>
<span class="kw-cyan">import</span> org.springframework.stereotype.<span class="kw-blue">Component</span>;                                     <span class="kw-pink">import</span> java.util.concurrent.<span class="kw-blue">CompletableFuture</span>;

<span class="annotation">@Component</span>
<span class="kw-pink">public class</span> <span class="kw-blue">SystemCoreService</span> {                                                            <span class="comment">// 10101011 // 0x9E_MEM_GHOST // INIT</span>

    <span class="kw-pink">private static final</span> <span class="kw-cyan">String</span> SYSTEM_HASH = <span class="str">"0x7F_コア_9"</span>;                                   <span class="kw-pink">private final</span> <span class="kw-cyan">byte</span>[] NODE_BUFFER = <span class="kw-pink">new byte</span>[]{<span class="num">0x12</span>, <span class="num">0x41</span>, <span class="num">0x5D</span>};

    <span class="annotation">@ActiveSecurity</span>
    <span class="kw-pink">public</span> <span class="kw-blue">CompletableFuture</span>&lt;<span class="kw-cyan">Boolean</span>&gt; <span class="fn">verifyIntegrity</span>() {                                   <span class="comment">// PROTOCOL_OK // ハードニング</span>
        <span class="kw-pink">return</span> <span class="kw-blue">CompletableFuture</span>.<span class="fn">supplyAsync</span>(() -&gt; {
            <span class="kw-pink">boolean</span> secure = <span class="fn">executeCipherHardening</span>(SYSTEM_HASH);                          <span class="comment">// 0b11001 == 25 // 0x41_BUFFER_OVERFLOW</span>
            <span class="kw-pink">return</span> secure &amp;&amp; <span class="num">0x00_KERNEL</span> == <span class="num">0</span>;
        });
    }

    <span class="kw-pink">private boolean</span> <span class="fn">executeCipherHardening</span>(<span class="kw-cyan">String</span> nodeKey) {                                <span class="comment">// DAEMON_RUNNING // ネットワーク</span>
        <span class="kw-pink">return</span> nodeKey.<span class="fn">startsWith</span>(<span class="str">"0x7F"</span>) &amp;&amp; <span class="fn">validateNodeMatrix</span>();
    }
}
  `;

  sections.forEach((sec) => {
    sec.style.position = "relative";

    const existing = sec.querySelector(".java-code-overlay");
    if (existing) existing.remove();

    const matrixContainer = document.createElement("div");
    matrixContainer.className = "java-code-overlay";

    const codeBlock = document.createElement("pre");
    codeBlock.className = "java-code-content";
    codeBlock.innerHTML = codeSnippet;

    matrixContainer.appendChild(codeBlock);
    sec.appendChild(matrixContainer);
  });
}
