// Seleciona o elemento que exibirá o conteúdo dinâmico
const conteudoDiv = document.getElementById('conteudo');

// Função para limpar o conteúdo atual
function limparConteudo() {
    conteudoDiv.innerHTML = '';
}

// Função para exibir o mapa OpenStreetMap com a trilha GPX
function mostrarOSM() {
    limparConteudo();
    const osmDiv = document.createElement('div');
    osmDiv.id = 'osmMap';
    osmDiv.style.height = '100%';
    conteudoDiv.appendChild(osmDiv);

    const osmMap = L.map('osmMap').setView([-22.9681, -43.2254], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(osmMap);

    // Adiciona a trilha GPX
    const gpx = 'https://raw.githubusercontent.com/joaopdahmer/jbrj_projeto2/main/trilha_frei_leandro.gpx';
    new L.GPX(gpx, { async: true }).on('loaded', function(e) {
        osmMap.fitBounds(e.target.getBounds());
    }).addTo(osmMap);
}

// Função para exibir a imagem de Frei Leandro usando OpenSeadragon
function mostrarImagemFreiLeandro() {
    limparConteudo();
    const imagemDiv = document.createElement('div');
    imagemDiv.id = 'imagemFreiLeandro';
    imagemDiv.style.height = '100%';
    conteudoDiv.appendChild(imagemDiv);

    OpenSeadragon({
        id: "imagemFreiLeandro",
        prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.2/images/",
        tileSources: {
            type: 'image',
            url: 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/NobP4aPAH9dTL3M?file=/&fileId=17987500&x=1920&y=925&a=true&etag=c0966b1085c6a7402cd4e2c2a6e1c322'
        }
    });
}

// Função para exibir imagens específicas de plantas usando OpenSeadragon
function mostrarPlantaImagem(planta) {
    limparConteudo();
    const imagemDiv = document.createElement('div');
    imagemDiv.id = 'imagem';
    imagemDiv.style.height = '100%';
    conteudoDiv.appendChild(imagemDiv);

    // Lista de URLs de imagens para cada planta
    const imageUrl = {
        'camellia': 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Camellia_sinensis_drawing.jpg',
        'tectona': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Starr_010304-0485_Tectona_grandis.jpg/1024px-Starr_010304-0485_Tectona_grandis.jpg',
        'artocarpus': 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/6FSkFpeJcrN8npF?file=/&fileId=17944112&x=1927&y=920&a=true&etag=b086dc8c875719c27b005e285a81f023',
        'stifftia': 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/SJEBgty3Zspf2WK?file=/&fileId=17955227&x=1927&y=920&a=true&etag=0b6a4b856343f59f459f79b898da422e',
        'annona': 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/pBdB65BDrQPeBHX?file=/&fileId=17944122&x=1927&y=920&a=true&etag=096e795f612361b3ff19f0bc417a85bd',
        'cenostigma': 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/JkRCiBY5BGmXbar?file=/&fileId=17946713&x=1927&y=920&a=true&etag=23eab4b83e6242cb0615d35154f39796',
        'persea': 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/3Wf4Q3Kj4RWDgEs?file=/&fileId=17946734&x=1927&y=920&a=true&etag=0813af235bcf5f414f6154895af48f7a',
        'albizia': 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/s8MjLATgZYYNwEL?file=/&fileId=17946774&x=1927&y=920&a=true&etag=7a36eef3361525dc41d6fa10d826ce9e',
        'dimocarpus': 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/QNskkTaRdamRAFT?file=/&fileId=17946810&x=1927&y=920&a=true&etag=6b21e8018fa5dda759e9d88e223c800d',
        'artocarpus2': 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/TDMYgQJGW7QirAo?file=/&fileId=17946839&x=1927&y=920&a=true&etag=109dd2b574c1d36a21c667334b562643'
    };

    // Verifica se a imagem existe e a exibe usando OpenSeadragon
    if (imageUrl[planta]) {
        OpenSeadragon({
            id: "imagem",
            prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.2/images/",
            tileSources: {
                type: 'image',
                url: imageUrl[planta]
            }
        });
    } else {
        console.error("Imagem não encontrada para a planta: " + planta);
    }
}
