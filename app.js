const tools = [
    {
        name: "ChatGPT",
        desc: "OpenAI智能对话助手",
        category: "对话",
        url: "https://chat.openai.com"
    },
    {
        name: "Claude",
        desc: "Anthropic AI助手",
        category: "对话",
        url: "https://claude.ai"
    },
    {
        name: "Gemini",
        desc: "Google AI模型",
        category: "对话",
        url: "https://gemini.google.com"
    },
    {
        name: "Midjourney",
        desc: "AI绘画生成工具",
        category: "绘画",
        url: "https://www.midjourney.com"
    }
];

// 渲染工具
function renderTools(list){
    const container = document.getElementById("toolList");
    container.innerHTML = "";

    list.forEach(tool => {
        container.innerHTML += `
            <a class="tool-card" href="${tool.url}" target="_blank">
                <h3>${tool.name}</h3>
                <p>${tool.desc}</p>
            </a>
        `;
    });
}

// 搜索功能（核心升级）
function searchTool(){
    let keyword = document.getElementById("searchInput").value.toLowerCase();

    if(keyword === ""){
        renderTools(tools);
        return;
    }

    let result = tools.filter(tool =>
        tool.name.toLowerCase().includes(keyword) ||
        tool.desc.toLowerCase().includes(keyword) ||
        tool.category.toLowerCase().includes(keyword)
    );

    renderTools(result);
}

// 初始加载
renderTools(tools);