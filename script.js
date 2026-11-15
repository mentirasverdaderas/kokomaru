// =========================================================================
// CONFIGURACIÓN GENERAL (EDITA AQUÍ TU NÚMERO Y HORARIO DE LIVE)
// =========================================================================
const WHATSAPP_PYME = '56900000000'; // Reemplaza con tu número real (569 + 8 dígitos)
const COSTO_ENVIO_SANTIAGO = 2990;

// Cambia FORZAR_MODO_LIVE a true si quieres probar cómo se ve el Hero durante un Live
const FORZAR_MODO_LIVE = false; 

// =========================================================================
// CATÁLOGO DE PRODUCTOS Y OPCIONES
// =========================================================================
const tiposAgenda = [
    { id: 'emprendedora', nombre: 'Agenda Emprendedora', desc: 'Control total de ventas, pedidos, proveedores, metas mensuales y flujo de caja.', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80' },
    { id: 'maestras', nombre: 'Agenda Maestras', desc: 'Planificación de clases, registro de asistencia, evaluaciones y reuniones de apoderados.', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=80' },
    { id: 'universitaria', nombre: 'Agenda Universitarias', desc: 'Organizador de ramos, fechas de certámenes, trabajos grupales y promedio de notas.', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop&q=80' },
    { id: 'diaria', nombre: 'Agenda Uso Diario', desc: 'Hábitos, citas médicas, listas de tareas, finanzas personales y bienestar diario.', img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&auto=format&fit=crop&q=80' }
];

const versionesAgenda = [
    { id: 'economica', nombre: 'Versión Económica (Esencial)', precio: 14990, desc: '• 100 hojas de 90g\n• Diseño fijo (sin personalizar)\n• Sin elástico ni esquineros', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&auto=format&fit=crop&q=80' },
    { id: 'intermedia', nombre: 'Versión Intermedia (Personalizable)', precio: 19990, desc: '• 100 hojas de 105g (Mayor grosor)\n• Con esquineros metálicos protectores\n• Elige Portadas, Guardas y hojas', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=80', destacada: true },
    { id: 'full', nombre: 'Versión Full (Premium)', precio: 24990, desc: '• 120 hojas de 105g extra premium\n• Con esquineros metálicos y elástico de cierre\n• Personalización total + Marcalibros de regalo', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&auto=format&fit=crop&q=80' }
];

const tematicasAgenda = [
    { id: 'snoopy', nombre: 'Snoopy & Friends', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80' },
    { id: 'floral', nombre: 'Jardín Botánico', img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&auto=format&fit=crop&q=80' },
    { id: 'minimalista', nombre: 'Minimal Chic', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80' },
    { id: 'pastel', nombre: 'Sueños Pastel', img: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&auto=format&fit=crop&q=80' },
    { id: 'gatitos', nombre: 'Cat Lover', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80' },
    { id: 'estelar', nombre: 'Galaxia & Estrellas', img: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=400&auto=format&fit=crop&q=80' }
];

const agendasListas = [
    {
        nombre: 'Agenda Emprendedora - Edición Snoopy',
        desc: 'Versión Full con 120 hojas, esquineros, elástico y temática exclusiva de Snoopy.',
        precio: 24990,
        img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&auto=format&fit=crop&q=80',
        mensajeWa: 'Hola Kokomarú, quiero comprar la agenda lista: Agenda Emprendedora - Edición Snoopy (Versión Full) por $24.990.'
    },
    {
        nombre: 'Agenda Maestras - Jardín Botánico',
        desc: 'Versión Intermedia con esquineros, 100 hojas de 105g y diseño floral botánico.',
        precio: 19990,
        img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&auto=format&fit=crop&q=80',
        mensajeWa: 'Hola Kokomarú, quiero comprar la agenda lista: Agenda Maestras - Jardín Botánico (Versión Intermedia) por $19.990.'
    },
    {
        nombre: 'Agenda Universitarias - Minimal Chic',
        desc: 'Versión Económica esencial con 100 hojas de 90g y diseño minimalista limpio.',
        precio: 14990,
        img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80',
        mensajeWa: 'Hola Kokomarú, quiero comprar la agenda lista: Agenda Universitarias - Minimal Chic (Versión Económica) por $14.990.'
    }
];

const opcionesSecciones = {
    portada: [
        { id: 'Portada Diseño 1', nombre: 'Portada Diseño 1', img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=300&auto=format&fit=crop&q=80' },
        { id: 'Portada Diseño 2', nombre: 'Portada Diseño 2', img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&auto=format&fit=crop&q=80' },
        { id: 'Portada Diseño 3', nombre: 'Portada Diseño 3', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&auto=format&fit=crop&q=80' }
    ],
    guarda: [
        { id: 'Guarda Diseño A', nombre: 'Guarda Diseño A', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=300&auto=format&fit=crop&q=80' },
        { id: 'Guarda Diseño B', nombre: 'Guarda Diseño B', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=80' },
        { id: 'Guarda Diseño C', nombre: 'Guarda Diseño C', img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&auto=format&fit=crop&q=80' }
    ],
    planner: [
        { id: 'Planner Mensual', nombre: 'Planner Mensual', img: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=300&auto=format&fit=crop&q=80' },
        { id: 'Planner Semanal', nombre: 'Planner Semanal', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&auto=format&fit=crop&q=80' }
    ],
    rayado: [
        { id: 'Todas de una línea', nombre: 'Todas de una línea', img: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&auto=format&fit=crop&q=80' },
        { id: 'Todas cuadriculadas', nombre: 'Todas cuadriculadas', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&auto=format&fit=crop&q=80' },
        { id: 'Mix (Mitad y Mitad)', nombre: 'Mix (Mitad y Mitad)', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&auto=format&fit=crop&q=80' }
    ],
    fondo: [
        { id: 'Sin fondo (Solo rayado)', nombre: 'Sin fondo (Solo rayado)', img: 'https://images.unsplash.com/photo-1606819717115-915995007dc7?w=300&auto=format&fit=crop&q=80' },
        { id: 'Marca de agua Dibujo 1', nombre: 'Marca de agua Dibujo 1', img: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300&auto=format&fit=crop&q=80' },
        { id: 'Marca de agua Dibujo 2', nombre: 'Marca de agua Dibujo 2', img: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=300&auto=format&fit=crop&q=80' }
    ],
    marcalibros: [
        { id: 'Marcalibros Diseño 1', nombre: 'Marcalibros Diseño 1', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&auto=format&fit=crop&q=80' },
        { id: 'Marcalibros Diseño 2', nombre: 'Marcalibros Diseño 2', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&auto=format&fit=crop&q=80' },
        { id: 'Marcalibros Diseño 3', nombre: 'Marcalibros Diseño 3', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&auto=format&fit=crop&q=80' }
    ]
};

// =========================================================================
// DATOS PARA LOS CARRUSELES CRUZADOS (ALTERNANDO FOTO Y VIDEO)
// Reemplaza las URLs por tus propias fotos (.jpg/.png) y videos cortos (.mp4)
// =========================================================================
const itemsCarrusel1 = [
    { tipo: 'foto', src: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&auto=format&fit=crop&q=80', etiqueta: 'Agenda Full Snoopy' },
    { tipo: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-woman-writing-in-a-notebook-4240-large.mp4', etiqueta: 'Hoja 105g en vivo' },
    { tipo: 'foto', src: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&auto=format&fit=crop&q=80', etiqueta: 'Detalles interiores' },
    { tipo: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-writing-in-a-diary-4238-large.mp4', etiqueta: 'Planner Semanal' },
    { tipo: 'foto', src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&auto=format&fit=crop&q=80', etiqueta: 'Edición Botánica' }
];

const itemsCarrusel2 = [
    { tipo: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-girl-writing-in-her-journal-4239-large.mp4', etiqueta: 'Acabado artesanal' },
    { tipo: 'foto', src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=80', etiqueta: 'Agenda Maestras' },
    { tipo: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-woman-writing-in-a-notebook-4240-large.mp4', etiqueta: 'Esquineros y elástico' },
    { tipo: 'foto', src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=80', etiqueta: 'Pedido listo Santiago' },
    { tipo: 'foto', src: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80', etiqueta: 'Emprendedoras' }
];

// =========================================================================
// ESTADO Y ELEMENTOS DEL DOM
// =========================================================================
let currentStep = 1;
let selectedConfig = {
    tipo: null,
    version: null,
    tematica: null,
    secciones: { portada: null, guarda: null, planner: null, rayado: null, fondo: null, marcalibros: null },
    envio: null
};

const modal = document.getElementById('configModal');
const nextStepBtn = document.getElementById('nextStepBtn');
const prevStepBtn = document.getElementById('prevStepBtn');
const stepIndicatorMain = document.getElementById('stepIndicatorMain');
const stepIndicatorSub = document.getElementById('stepIndicatorSub');
const helpWhatsappBtn = document.getElementById('helpWhatsappBtn');

document.addEventListener('DOMContentLoaded', () => {
    checkLiveSchedule();
    renderHomeSections();
    renderCarousels();
    renderStep1();
    renderStep2();
    renderStep3();
    renderStep4();
    checkURLParameters();

    // Abrir / Cerrar modal
    const openModal = () => modal.classList.add('active');
    document.getElementById('openModalBtn').addEventListener('click', openModal);
    document.getElementById('openModalNavBtn').addEventListener('click', openModal);
    document.getElementById('openModalCatalogBtn').addEventListener('click', openModal);
    document.getElementById('openModalLiveBtn').addEventListener('click', openModal);
    document.getElementById('closeModalBtn').addEventListener('click', () => modal.classList.remove('active'));

    // Navegación pasos
    nextStepBtn.addEventListener('click', () => { if (currentStep < 4) { currentStep++; updateStepView(); } });
    prevStepBtn.addEventListener('click', () => { if (currentStep > 1) { currentStep--; updateStepView(); } });

    // Selección de envío
    document.querySelectorAll('input[name="shipping"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            selectedConfig.envio = e.target.value;
            checkStep4Completion();
        });
    });

    // Zoom de imagen
    document.getElementById('closeZoomBtn').addEventListener('click', () => {
        document.getElementById('imageZoomModal').classList.remove('active');
    });

    // Resumen desplegable
    document.getElementById('toggleSummaryBtn').addEventListener('click', () => {
        const box = document.getElementById('summaryBox');
        box.style.display = box.style.display === 'none' ? 'block' : 'none';
        updateSummaryContent();
    });

    // Modal Amiga: validación estricta solo números (máx 8)
    const friendModal = document.getElementById('friendModal');
    const friendInput = document.getElementById('friendPhoneInput');
    friendInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 8);
    });

    document.getElementById('openFriendModalBtn').addEventListener('click', () => friendModal.classList.add('active'));
    document.getElementById('cancelFriendBtn').addEventListener('click', () => friendModal.classList.remove('active'));
    document.getElementById('submitFriendBtn').addEventListener('click', sendToFriend);
});

// =========================================================================
// HERO DINÁMICO PARA LIVES (VIERNES 21:00 A 23:00 HRS)
// =========================================================================
function checkLiveSchedule() {
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo
    const hour = now.getHours();

    const isLiveNow = FORZAR_MODO_LIVE || (day === 0 && hour >= 3 && hour < 4);

    const hero = document.getElementById('mainHero');
    const normalContent = document.getElementById('heroNormalContent');
    const liveContent = document.getElementById('heroLiveContent');

    if (isLiveNow) {
        hero.classList.add('is-live');
        normalContent.style.display = 'none';
        liveContent.style.display = 'block';
    } else {
        hero.classList.remove('is-live');
        normalContent.style.display = 'block';
        liveContent.style.display = 'none';
    }
}

// =========================================================================
// RENDERIZADO DE LA PÁGINA PRINCIPAL (HOME)
// =========================================================================
function renderHomeSections() {
    // Bloque 4A: 4 Categorías
    document.getElementById('homeCategoriesGrid').innerHTML = tiposAgenda.map(item => `
        <div class="home-cat-card">
            <img src="${item.img}" alt="${item.nombre}">
            <h3>${item.nombre}</h3>
            <p>${item.desc}</p>
        </div>
    `).join('');

    // Bloque 4B: 3 Versiones de Precio
    document.getElementById('homePricingGrid').innerHTML = versionesAgenda.map(item => `
        <div class="home-price-card ${item.destacada ? 'featured' : ''}">
            ${item.destacada ? '<span class="popular-badge">Más elegida</span>' : ''}
            <h3>${item.nombre}</h3>
            <div class="home-price-amount">$${item.precio.toLocaleString('es-CL')}</div>
            <p>${item.desc}</p>
            <button onclick="openModalWithVersion('${item.id}')" class="btn-secondary-hero" style="width:100%; padding: 0.7rem;">Elegir esta versión</button>
        </div>
    `).join('');

    // Vitrina Agendas Listas
    document.getElementById('readyAgendasGrid').innerHTML = agendasListas.map(item => `
        <div class="ready-card">
            <img src="${item.img}" alt="${item.nombre}">
            <div class="ready-card-body">
                <h3>${item.nombre}</h3>
                <p>${item.desc}</p>
                <div class="ready-price">$${item.precio.toLocaleString('es-CL')}</div>
                <a href="https://wa.me/${WHATSAPP_PYME}?text=${encodeURIComponent(item.mensajeWa)}" target="_blank" class="btn-buy-ready">
                    <i class="fa-brands fa-whatsapp"></i> Pedir directo
                </a>
            </div>
        </div>
    `).join('');
}

function openModalWithVersion(versionId) {
    selectedConfig.version = versionId;
    renderStep2();
    renderStep4();
    modal.classList.add('active');
    currentStep = 1;
    updateStepView();
}

// =========================================================================
// CARRUSELES CRUZADOS INFINITOS (BLOQUE 5)
// =========================================================================
function renderCarousels() {
    const buildTrackHTML = (items) => {
        // Duplicamos el arreglo para crear el bucle infinito fluido sin saltos
        const doubled = [...items, ...items];
        return doubled.map(media => `
            <div class="media-card">
                <span class="media-badge">${media.etiqueta}</span>
                ${media.tipo === 'video' 
                    ? `<video src="${media.src}" autoplay loop muted playsinline></video>` 
                    : `<img src="${media.src}" alt="${media.etiqueta}">`
                }
            </div>
        `).join('');
    };

    document.getElementById('carouselRow1').innerHTML = buildTrackHTML(itemsCarrusel1);
    document.getElementById('carouselRow2').innerHTML = buildTrackHTML(itemsCarrusel2);
}

// =========================================================================
// PASOS DEL CONFIGURADOR MODAL
// =========================================================================
function renderStep1() {
    document.getElementById('tipoAgendaGrid').innerHTML = tiposAgenda.map(item => `
        <div class="option-card ${selectedConfig.tipo === item.id ? 'selected' : ''}" onclick="selectTipo('${item.id}')">
            <div class="option-img-container" onclick="event.stopPropagation(); openZoom('${item.img}')">
                <img src="${item.img}" alt="${item.nombre}">
                <span class="zoom-icon-hint"><i class="fa-solid fa-magnifying-glass-plus"></i></span>
            </div>
            <h3>${item.nombre}</h3>
            <p>${item.desc}</p>
            <button class="btn-select-card">${selectedConfig.tipo === item.id ? 'Seleccionado' : 'Elegir'}</button>
        </div>
    `).join('');
}

function selectTipo(id) { selectedConfig.tipo = id; renderStep1(); validateStep(); }

function renderStep2() {
    document.getElementById('versionGrid').innerHTML = versionesAgenda.map(item => `
        <div class="option-card ${selectedConfig.version === item.id ? 'selected' : ''}" onclick="selectVersion('${item.id}')">
            <div style="display: flex; gap: 1rem; align-items: center; width: 100%; text-align: left;">
                <div class="option-img-container" style="width: 115px; height: 95px; margin-bottom: 0; flex-shrink: 0;" onclick="event.stopPropagation(); openZoom('${item.img}')">
                    <img src="${item.img}" alt="${item.nombre}">
                </div>
                <div style="flex: 1;">
                    <h3>${item.nombre}</h3>
                    <p style="white-space: pre-line; margin-bottom: 0.4rem;">${item.desc}</p>
                    <div class="option-price">$${item.precio.toLocaleString('es-CL')}</div>
                </div>
            </div>
            <button class="btn-select-card" style="margin-top: 0.8rem;">${selectedConfig.version === item.id ? 'Seleccionado' : 'Elegir'}</button>
        </div>
    `).join('');
}

function selectVersion(id) { selectedConfig.version = id; renderStep2(); renderStep4(); validateStep(); }

function renderStep3() {
    document.getElementById('tematicaGrid').innerHTML = tematicasAgenda.map(item => `
        <div class="option-card tematica-card ${selectedConfig.tematica === item.id ? 'selected' : ''}" onclick="selectTematica('${item.id}')">
            <div class="option-img-container" onclick="event.stopPropagation(); openZoom('${item.img}')">
                <img src="${item.img}" alt="${item.nombre}">
                <span class="zoom-icon-hint"><i class="fa-solid fa-magnifying-glass-plus"></i></span>
            </div>
            <h3>${item.nombre}</h3>
            <button class="btn-select-card">${selectedConfig.tematica === item.id ? 'Seleccionado' : 'Elegir'}</button>
        </div>
    `).join('');
}

function selectTematica(id) { selectedConfig.tematica = id; renderStep3(); validateStep(); }

function renderStep4() {
    const container = document.getElementById('seccionesContainer');
    let seccionesActivas = ['portada', 'guarda', 'planner', 'rayado', 'fondo'];
    if (selectedConfig.version === 'full') seccionesActivas.push('marcalibros');

    const titles = {
        portada: 'Portada / Contraportada',
        guarda: 'Diseño de Guarda',
        planner: 'Tipo de Planner',
        rayado: 'Tipo de Rayado en Hoja',
        fondo: 'Fondo de la Hoja',
        marcalibros: 'Marcalibros de Regalo'
    };

    container.innerHTML = seccionesActivas.map(secKey => {
        const opciones = opcionesSecciones[secKey];
        return `
            <div class="section-block">
                <h3><i class="fa-solid fa-check-circle" style="color:var(--pink-dark);"></i> ${titles[secKey]}</h3>
                <div class="section-options-grid">
                    ${opciones.map(opt => `
                        <div class="sub-option-card ${selectedConfig.secciones[secKey] === opt.id ? 'selected' : ''}" onclick="selectSeccionOption('${secKey}', '${opt.id}')">
                            <div onclick="event.stopPropagation(); openZoom('${opt.img}')" style="position:relative;">
                                <img src="${opt.img}" alt="${opt.nombre}">
                            </div>
                            <span>${opt.nombre}</span>
                            <button class="btn-select-card" style="padding: 0.25rem 0.8rem; font-size: 0.8rem;">${selectedConfig.secciones[secKey] === opt.id ? 'Elegido' : 'Elegir'}</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');

    checkStep4Completion();
}

function selectSeccionOption(seccion, optId) {
    selectedConfig.secciones[seccion] = optId;
    renderStep4();
}

function validateStep() {
    let isValid = false;
    if (currentStep === 1) isValid = selectedConfig.tipo !== null;
    if (currentStep === 2) isValid = selectedConfig.version !== null;
    if (currentStep === 3) isValid = selectedConfig.tematica !== null;
    nextStepBtn.disabled = !isValid;
}

function checkStep4Completion() {
    if (currentStep !== 4) return;
    let seccionesActivas = ['portada', 'guarda', 'planner', 'rayado', 'fondo'];
    if (selectedConfig.version === 'full') seccionesActivas.push('marcalibros');

    const todasSeccionesElegidas = seccionesActivas.every(sec => selectedConfig.secciones[sec] !== null);
    const envioElegido = selectedConfig.envio !== null;

    const finalActions = document.getElementById('finalActionsSection');
    if (todasSeccionesElegidas && envioElegido) {
        finalActions.style.display = 'block';
        updateWhatsappLinks();
        if (document.getElementById('summaryBox').style.display === 'block') {
            updateSummaryContent();
        }
    } else {
        finalActions.style.display = 'none';
    }
}

function updateStepView() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`step${i}`).classList.remove('active');
    }
    document.getElementById(`step${currentStep}`).classList.add('active');

    if (currentStep === 4) {
        helpWhatsappBtn.style.display = 'none';
        stepIndicatorMain.textContent = 'Paso 4 de 4';
        stepIndicatorSub.textContent = 'Personalización y Envío';
        prevStepBtn.style.display = 'flex';
        nextStepBtn.style.display = 'none';
        checkStep4Completion();
    } else {
        helpWhatsappBtn.style.display = 'flex';
        stepIndicatorMain.textContent = `Paso ${currentStep} de 4`;
        stepIndicatorSub.textContent = currentStep === 1 ? 'Tipo de Agenda' : currentStep === 2 ? 'Versión y Precio' : 'Temática';
        prevStepBtn.style.display = currentStep === 1 ? 'none' : 'flex';
        nextStepBtn.style.display = 'flex';
        validateStep();
    }
}

function openZoom(imgSrc) {
    document.getElementById('zoomedImg').src = imgSrc;
    document.getElementById('imageZoomModal').classList.add('active');
}

// =========================================================================
// RESUMEN Y ENVÍO A WHATSAPP / AMIGA
// =========================================================================
function getResumenTexto() {
    const tipoObj = tiposAgenda.find(x => x.id === selectedConfig.tipo);
    const verObj = versionesAgenda.find(x => x.id === selectedConfig.version);
    const temObj = tematicasAgenda.find(x => x.id === selectedConfig.tematica);

    let costoEnvio = selectedConfig.envio === 'santiago' ? COSTO_ENVIO_SANTIAGO : 0;
    let total = verObj.precio + costoEnvio;

    let texto = `Hola Kokomarú, quiero encargar esta agenda:\n\n`;
    texto += `• Tipo: ${tipoObj ? tipoObj.nombre : '-'}\n`;
    texto += `• Versión: ${verObj ? verObj.nombre : '-'}\n`;
    texto += `• Temática: ${temObj ? temObj.nombre : '-'}\n`;
    texto += `• Portada: ${selectedConfig.secciones.portada || '-'}\n`;
    texto += `• Guarda: ${selectedConfig.secciones.guarda || '-'}\n`;
    texto += `• Planner: ${selectedConfig.secciones.planner || '-'}\n`;
    texto += `• Rayado: ${selectedConfig.secciones.rayado || '-'}\n`;
    texto += `• Fondo hoja: ${selectedConfig.secciones.fondo || '-'}\n`;
    if (selectedConfig.version === 'full') {
        texto += `• Marcalibros: ${selectedConfig.secciones.marcalibros || '-'}\n`;
    }
    texto += `• Envío: ${selectedConfig.envio === 'santiago' ? `Santiago ($${COSTO_ENVIO_SANTIAGO.toLocaleString('es-CL')})` : 'Regiones (Blue Express - Monto a coordinar por WhatsApp)'}\n`;
    texto += `\n*TOTAL:* $${total.toLocaleString('es-CL')}${selectedConfig.envio === 'regiones' ? ' + envío a coordinar' : ''}`;

    return texto;
}

function updateSummaryContent() {
    const verObj = versionesAgenda.find(x => x.id === selectedConfig.version);
    let costoEnvio = selectedConfig.envio === 'santiago' ? COSTO_ENVIO_SANTIAGO : 0;
    let total = verObj.precio + costoEnvio;

    document.getElementById('summaryBox').innerHTML = `
        <ul>
            <li><strong>Tipo:</strong> ${tiposAgenda.find(x => x.id === selectedConfig.tipo)?.nombre}</li>
            <li><strong>Versión:</strong> ${verObj.nombre}</li>
            <li><strong>Temática:</strong> ${tematicasAgenda.find(x => x.id === selectedConfig.tematica)?.nombre}</li>
            <li><strong>Portada:</strong> ${selectedConfig.secciones.portada}</li>
            <li><strong>Guarda:</strong> ${selectedConfig.secciones.guarda}</li>
            <li><strong>Planner:</strong> ${selectedConfig.secciones.planner}</li>
            <li><strong>Rayado:</strong> ${selectedConfig.secciones.rayado}</li>
            <li><strong>Fondo:</strong> ${selectedConfig.secciones.fondo}</li>
            ${selectedConfig.version === 'full' ? `<li><strong>Marcalibros:</strong> ${selectedConfig.secciones.marcalibros}</li>` : ''}
            <li><strong>Envío:</strong> ${selectedConfig.envio === 'santiago' ? `Santiago ($${COSTO_ENVIO_SANTIAGO.toLocaleString('es-CL')})` : 'Regiones (Monto a coordinar por WhatsApp)'}</li>
        </ul>
        <div class="summary-total">Total: $${total.toLocaleString('es-CL')}${selectedConfig.envio === 'regiones' ? ' (Envío: monto a coordinar por WhatsApp)' : ''}</div>
    `;
}

function updateWhatsappLinks() {
    const encoded = encodeURIComponent(getResumenTexto());
    document.getElementById('sendOrderWhatsappBtn').href = `https://wa.me/${WHATSAPP_PYME}?text=${encoded}`;
}

function sendToFriend() {
    const phoneInput = document.getElementById('friendPhoneInput').value.trim();
    if (phoneInput.length !== 8 || !/^\d{8}$/.test(phoneInput)) {
        alert('Por favor ingresa los 8 dígitos del número celular.');
        return;
    }

    const fullPhone = `569${phoneInput}`;
    const temObj = tematicasAgenda.find(x => x.id === selectedConfig.tematica);

    const params = new URLSearchParams({
        t: selectedConfig.tipo || '',
        v: selectedConfig.version || '',
        tem: selectedConfig.tematica || '',
        p: selectedConfig.secciones.portada || '',
        g: selectedConfig.secciones.guarda || '',
        pl: selectedConfig.secciones.planner || '',
        r: selectedConfig.secciones.rayado || '',
        f: selectedConfig.secciones.fondo || '',
        m: selectedConfig.secciones.marcalibros || '',
        e: selectedConfig.envio || ''
    });

    const shareUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    const resumen = getResumenTexto();

    // Incluye el enlace directo a la imagen de la temática elegida para vista previa en WhatsApp + el link interactivo
    const mensajeAmiga = `¡Hola! Mira la agenda Kokomarú que estoy armando:\n\n${resumen}\n\nVista de la temática (${temObj ? temObj.nombre : ''}):\n${temObj ? temObj.img : ''}\n\nSi quieres verla o cambiar alguna opción, entra aquí (se abrirá en una ventana nueva):\n${shareUrl}`;
    
    window.open(`https://wa.me/${fullPhone}?text=${encodeURIComponent(mensajeAmiga)}`, '_blank');
    document.getElementById('friendModal').classList.remove('active');
}

function checkURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const t = urlParams.get('t');
    if (t) {
        selectedConfig.tipo = t;
        selectedConfig.version = urlParams.get('v') || null;
        selectedConfig.tematica = urlParams.get('tem') || null;
        selectedConfig.secciones.portada = urlParams.get('p') || null;
        selectedConfig.secciones.guarda = urlParams.get('g') || null;
        selectedConfig.secciones.planner = urlParams.get('pl') || null;
        selectedConfig.secciones.rayado = urlParams.get('r') || null;
        selectedConfig.secciones.fondo = urlParams.get('f') || null;
        selectedConfig.secciones.marcalibros = urlParams.get('m') || null;
        selectedConfig.envio = urlParams.get('e') || null;

        setTimeout(() => {
            modal.classList.add('active');
            currentStep = 4;
            updateStepView();
            renderStep1();
            renderStep2();
            renderStep3();
            renderStep4();
            if (selectedConfig.envio) {
                const radio = document.getElementById(selectedConfig.envio === 'santiago' ? 'shipSantiago' : 'shipRegiones');
                if (radio) radio.checked = true;
                checkStep4Completion();
            }
        }, 300);
    }
}