const sidebar = document.querySelector('.sidebar');

function addItemToCart() {
    if (sidebar.textContent.trim() === "Carrinho vazio") {
        sidebar.innerHTML = "";
    }

    const <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Layout com Sidebar Dinâmica</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="container">
        <div class="top-section">
            <nav class="nav">
                <button onclick="scrollToSection('doce')">Doce</button>
                <button onclick="scrollToSection('salgado')">Salgado</button>
                <button onclick="scrollToSection('torrado')">Torrado</button>
                <button onclick="scrollToSection('cru')">Cru</button>
                <button onclick="scrollToSection('pasta')">Pasta</button>
            </nav>
            <main class="content">
                <section id="doce" class="section">
                    <h2>Seção Doce</h2>
                    <p>Conteúdo sobre doces.</p>
                </section>
                <section id="salgado" class="section">
                    <h2>Seção Salgado</h2>
                    <p>Conteúdo sobre salgados.</p>
                </section>
                <section id="torrado" class="section">
                    <h2>Seção Torrado</h2>
                    <p>Conteúdo sobre alimentos torrados.</p>
                </section>
                <section id="cru" class="section">
                    <h2>Seção Cru</h2>
                    <p>Conteúdo sobre alimentos crus.</p>
                </section>
                <section id="pasta" class="section">
                    <h2>Seção Pasta</h2>
                    <p>Conteúdo sobre pastas.</p>
                </section>
            </main>
        </div>
        <aside class="sidebar">Carrinho vazio<br></aside>
    </div>

    <script src="script.js"></script>
</body>
</html> = document.createElement('div');
    newItem.classList.add('cart-item');
    newItem.textContent = "Item " + (sidebar.children.length + 1);
    sidebar.appendChild(newItem);

    sidebar.style.flexGrow = "1"; // Faz a sidebar crescer conforme os itens são adicionados
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
      }
