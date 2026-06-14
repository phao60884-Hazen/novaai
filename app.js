let tools = [];

async function loadTools() {
    const response = await fetch("tools.json");
    tools = await response.json();
    renderTools(tools);
}

function renderTools(list) {

    const container =
        document.getElementById("toolList");

    container.innerHTML = "";

    list.forEach(tool => {

        container.innerHTML += `
            <a
                class="tool-card"
                href="${tool.url}"
                target="_blank"
            >

                <div class="tool-logo">
                    ${tool.logo}
                </div>

                <h3>${tool.name}</h3>

                <span class="category">
                    ${tool.category}
                </span>

                <p>${tool.desc}</p>

            </a>
        `;
    });
}

function filterTools(category) {

    if (category === "全部") {
        renderTools(tools);
        return;
    }

    const result =
        tools.filter(tool =>
            tool.category === category
        );

    renderTools(result);
}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadTools();

        document
            .getElementById("searchInput")
            .addEventListener(
                "input",
                function () {

                    const keyword =
                        this.value.toLowerCase();

                    const result =
                        tools.filter(tool =>

                            tool.name
                                .toLowerCase()
                                .includes(keyword)

                            ||

                            tool.desc
                                .toLowerCase()
                                .includes(keyword)

                        );

                    renderTools(result);

                }
            );
    }
);