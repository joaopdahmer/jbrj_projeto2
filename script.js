const conteudoDiv = document.getElementById('conteudo');

function limparConteudo() {
    conteudoDiv.innerHTML = '';
}

function mostrarOSM() {
    limparConteudo();
    const osmDiv = document.createElement('div');
    osmDiv.id = 'osmMap';
    conteudoDiv.appendChild(osmDiv);

    const osmMap = L.map('osmMap').setView([-22.9681, -43.2254], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(osmMap);

    const gpx = 'https://raw.githubusercontent.com/joaopdahmer/jbrj_projeto2/main/trilha_frei_leandro.gpx';
    new L.GPX(gpx, { async: true }).on('loaded', function(e) {
        osmMap.fitBounds(e.target.getBounds());
    }).addTo(osmMap);
}

function mostrarImagemFreiLeandro() {
    limparConteudo();
    const imagemDiv = document.createElement('div');
    imagemDiv.id = 'imagemFreiLeandro';
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

function mostrarPlantaImagem(planta) {
    limparConteudo();
    const imagemDiv = document.createElement('div');
    imagemDiv.id = 'imagem';
    conteudoDiv.appendChild(imagemDiv);

    const imageUrl = {
        'camellia': 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Camellia_sinensis_drawing.jpg',
        'tectona': 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/TdLyQ7ZzkCBCmDK?file=/&fileId=18006061&x=1441&y=761&a=true&etag=88830e5191336174b8701e85c340ffa7',
        'artocarpus': 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/6FSkFpeJcrN8npF?file=/&fileId=17944112&x=1927&y=920&a=true&etag=b086dc8c875719c27b005e285a81f023',
        'stifftia': 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/oHqr4SyxeebiBQM?file=/&fileId=18006063&x=1441&y=761&a=true&etag=bec5f260a05420222e02cc202bbc0355',
        'annona': 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/pBdB65BDrQPeBHX?file=/&fileId=17944122&x=1927&y=920&a=true&etag=096e795f612361b3ff19f0bc417a85bd',
        'cenostigma': 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/cz6Z7zDSSKD47AN?file=/&fileId=18006062&x=1441&y=761&a=true&etag=b90cb9b6b856db4b82583932fc602d20',
        'persea': 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/tSyq2oD8LPj62kZ?file=/&fileId=18006060&x=1441&y=761&a=true&etag=f166e7f4020077de3b04e42cb7875e86',
        'albizia': 'https://cloud.jbrj.gov.br/s/8TJ4LsqDWRCZ4WT/download?path=%2F&files=imagem.dzi', // Link direto para o DZI
        'dimocarpus': 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/QNskkTaRdamRAFT?file=/&fileId=17946810&x=1927&y=920&a=true&etag=6b21e8018fa5dda759e9d88e223c800d',
        'artocarpus2': 'https://cloud.jbrj.gov.br/apps/files_sharing/publicpreview/TDMYgQJGW7QirAo?file=/&fileId=17946839&x=1927&y=920&a=true&etag=109dd2b574c1d36a21c667334b562643'
    };

    OpenSeadragon({
        id: "imagem",
        prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.2/images/",
        tileSources: imageUrl[planta] // Link direto para o DZI
    });
}
