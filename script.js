// DATOS DEL CATALOGO Y CONFIGURACIONES
const tiposAgenda = [
    { id: 'emprendedora', nombre: 'Agenda Emprendedora', desc: 'Ideal para organizar tus metas, finanzas y proyectos de negocio.', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80' },
    { id: 'maestras', nombre: 'Agenda Maestras', desc: 'Diseñada especialmente para planificar clases, evaluaciones y asistencia.', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=80' },
    { id: 'universitaria', nombre: 'Agenda Universitarias', desc: 'Control total de ramos, notas, pruebas y horarios semestrales.', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop&q=80' },
    { id: 'diaria', nombre: 'Agenda Uso Diario', desc: 'Práctica, ligera y perfecta para tu día a día personal.', img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&auto=format&fit=crop&q=80' }
];

const versionesAgenda = [
    { id: 'economica', nombre: 'Versión Económica (Esencial)', precio: 14990, desc: '• 100 hojas de 90g\n• Diseño fijo (sin personalizar)\n• Sin elástico ni esquineros', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&auto=format&fit=crop&q=80' },
    { id: 'intermedia', nombre: 'Versión Intermedia (Personalizable)', precio: 19990, desc: '• 100 hojas de 105g (Mayor grosor)\n• Con esquineros metálicos protectores\n• Elige Portadas y Guardas personalizadas', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=80' },
    { id: 'full', nombre: 'Versión Full (Premium)', precio: 24990, desc: '• 120 hojas de 105g extra premium\n• Con esquineros metálicos y elástico de cierre\n• Elige Portadas, Guardas y Marcalibros de regalo', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&auto=format&fit=crop&q=80' }
];

const tematicasAgenda = [
    { id: 'snoopy', nombre: 'Snoopy & Friends', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80' },
    { id: 'floral', nombre: 'Jardín Botánico', img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&auto=format&fit=crop&q=80' },
    { id: 'minimalista', nombre: 'Minimal Chic', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80' },
    { id: 'pastel', nombre: 'Sueños Pastel', img: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&auto=format&fit=crop&q=80' },
    { id: 'gatitos', nombre: 'Cat Lover', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80' },
    { id: 'estelar', nombre: 'Galaxia & Estrellas', img: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=400&auto=format&fit=crop&q=80' }
];

// Opciones para el Paso 4 (Secciones)
const opcionesSecciones = {
    portada: [
        { id: 'portada1', nombre: 'Portada Estilo 1', img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=300&auto=format&fit=crop&q=80' },
        { id: 'portada2', nombre: 'Portada Estilo 2', img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&auto=format&fit=crop&q=80' },
        { id: 'portada3', nombre: 'Portada Estilo 3', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&auto=format&fit=crop&q=80' }
    ],
    guarda: [
        { id: 'guarda1', nombre: 'Guarda Diseño A', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=300&auto=format&fit=crop&q=80' },
        { id: 'guarda2', nombre: 'Guarda Diseño B', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=80' },
        { id: 'guarda3', nombre: 'Guarda Diseño C', img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&auto=format&fit=crop&q=80' }
    ],
    planner: [
        { id: 'mensual', nombre: 'Planner Mensual', img: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=300&auto=format&fit=crop&q=80' },
        { id: 'semanal', nombre: 'Planner Semanal', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&auto=format&fit=crop&q=80' }
    ],
    rayado: [
        { id: 'linea', nombre: 'Todas de una línea', img: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&auto=format&fit=crop&q=80' },
        { id: 'cuadros', nombre: 'Todas cuadriculadas', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&auto=format&fit=crop&q=80' },
        { id: 'mix', nombre: 'Mix (Mitad y Mitad)', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&auto=format&fit=crop&q=80' }
    ],
    fondo: [
        { id: 'sinfondo', nombre: 'Sin fondo (Solo rayado)', img: 'https://images.unsplash.com/photo-1606819717115-915995007dc7?w=300&auto=format&fit=crop&q=80' },
        { id: 'marca1', nombre: 'Marca de agua Tipo 1', img: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300&auto=format&fit=crop&q=80' },
        { id: 'marca2', nombre: 'Marca de agua Tipo 2', img: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=300&auto=format&fit=crop&q=80' }
    ],
    marcalibros: [
        { id: 'marca_regalo1', nombre: 'Marcalibros 1', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&auto=format&fit=crop&q=80' },
        { id: 'marca_regalo2', nombre: 'Marcalibros 2', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&auto=format&fit=crop&q=80' },
        { id: 'marca_regalo3', nombre: 'Marcalibros 3', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&auto=format&fit=crop&q=80' }
    ]
};

// ESTADO DE LA SELECCIÓN
let currentStep = 1;
let selectedConfig = {
    tipo: null,
    version: null,
    tematica: null,
    secciones: {
        portada: null,
        guarda: null,
        planner: null,
        rayado: null,
        fondo: null,
        marcalibros: null
    },
    envio: null
};

// ELEMENTOS DOM
const modal = document.getElementById('configModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const nextStepBtn = document.getElementById('nextStepBtn');
const prevStepBtn = document.getElementById('prevStepBtn');
const stepIndicatorText = document.getElementById('stepIndicatorText');
const helpWhatsappBtn = document.getElementById('helpWhatsappBtn');

// INICIALIZAR VISTAS
document.addEventListener('DOMContentLoaded', () => {
    renderStep1();
    renderStep2();
    renderStep3();
    renderStep4();
    checkURLParameters();

    openModalBtn.addEventListener('click', () => modal.classList.add('active'));
    closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));

    nextStepBtn.addEventListener('click', () => {
        if (currentStep < 4) {
            currentStep++;
            updateStepView();
        }
    });

    prevStepBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateStepView();
        }
    });

    // Envío de radio buttons
    document.querySelectorAll('input[name="shipping"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            selectedConfig.envio = e.target.value;
            checkStep4Completion();
        });
    });

    // Zoom imagen
    const zoomModal = document.getElementById('imageZoomModal');
    const closeZoomBtn = document.getElementById('closeZoomBtn');
    closeZoomBtn.addEventListener('click', () => zoomModal.classList.remove('active'));

    // Botón Resumen
    document.getElementById('toggleSummaryBtn').addEventListener('click', () => {
        const box = document.getElementById('summaryBox');
        box.style.display = box.style.display === 'none' ? 'block' : 'none';
        updateSummaryContent();
    });

    // Modal Amiga
    const friendModal = document.getElementById('friendModal');
    document.getElementById('openFriendModalBtn').addEventListener('click', () => friendModal.classList.add('active'));
    document.getElementById('cancelFriendBtn').addEventListener('click', () => friendModal.classList.remove('active'));
    document.getElementById('submitFriendBtn').addEventListener('click', sendToFriend);
});

// RENDERIZAR PASO 1
function renderStep1() {
    const grid = document.getElementById('tipoAgendaGrid');
    grid.innerHTML = tiposAgenda.map(item => `
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

function selectTipo(id) {
    selectedConfig.tipo = id;
    renderStep1();
    validateStep();
}

// RENDERIZAR PASO 2
function renderStep2() {
    const grid = document.getElementById('versionGrid');
    grid.innerHTML = versionesAgenda.map(item => `
        <div class="option-card ${selectedConfig.version === item.id ? 'selected' : ''}" onclick="selectVersion('${item.id}')">
            <div style="display: flex; gap: 1rem; align-items: center; width: 100%; text-align: left;">
                <div class="option-img-container" style="width: 120px; height: 100px; margin-bottom: 0;" onclick="event.stopPropagation(); openZoom('${item.img}')">
                    <img src="${item.img}" alt="${item.nombre}">
                </div>
                <div style="flex: 1;">
                    <h3>${item.nombre}</h3>
                    <p style="white-space: pre-line; margin-bottom: 0.5rem;">${item.desc}</p>
                    <div class="option-price">$${item.precio.toLocaleString('es-CL')}</div>
                </div>
            </div>
            <button class="btn-select-card" style="margin-top: 1rem;">${selectedConfig.version === item.id ? 'Seleccionado' : 'Elegir'}</button>
        </div>
    `).join('');
}

function selectVersion(id) {
    selectedConfig.version = id;
    renderStep2();
    renderStep4(); // Actualizar secciones según versión (ej: full incluye marcalibros)
    validateStep();
}

// RENDERIZAR PASO 3
function renderStep3() {
    const grid = document.getElementById('tematicaGrid');
    grid.innerHTML = tematicasAgenda.map(item => `
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

function selectTematica(id) {
    selectedConfig.tematica = id;
    renderStep3();
    validateStep();
}

// RENDERIZAR PASO 4 (SECCIONES)
function renderStep4() {
    const container = document.getElementById('seccionesContainer');
    let seccionesActivas = ['portada', 'guarda', 'planner', 'rayado', 'fondo'];
    
    // Si es versión full, agregamos marcalibros
    if (selectedConfig.version === 'full') {
        seccionesActivas.push('marcalibros');
    }

    const titles = {
        portada: 'Portada / Contraportada (Elige 1 de 3)',
        guarda: 'Diseño de Guarda (Elige 1 de 3)',
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
                            <button class="btn-select-card" style="padding: 0.2rem 0.8rem; font-size: 0.8rem;">${selectedConfig.secciones[secKey] === opt.id ? 'Elegido' : 'Elegir'}</button>
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

// VALIDACIONES DE PASOS
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
    } else {
        finalActions.style.display = 'none';
    }
}

// ACTUALIZAR VISTA DE PASOS EN MODAL
function updateStepView() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`step${i}`).classList.remove('active');
    }
    document.getElementById(`step${currentStep}`).classList.add('active');

    // Botón WhatsApp de dudas solo en pasos 1, 2 y 3
    if (currentStep === 4) {
        helpWhatsappBtn.style.display = 'none';
        stepIndicatorText.textContent = 'Paso 4: Personalización y Envío';
        prevStepBtn.style.display = 'flex';
        nextStepBtn.style.display = 'none';
        checkStep4Completion();
    } else {
        helpWhatsappBtn.style.display = 'flex';
        stepIndicatorText.textContent = `Paso ${currentStep} de 4: ${currentStep === 1 ? 'Tipo de Agenda' : currentStep === 2 ? 'Versión y Precio' : 'Temática'}`;
        prevStepBtn.style.display = currentStep === 1 ? 'none' : 'flex';
        nextStepBtn.style.display = 'flex';
        validateStep();
    }
}

// ZOOM DE IMÁGENES
function openZoom(imgSrc) {
    const zoomModal = document.getElementById('imageZoomModal');
    const zoomedImg = document.getElementById('zoomedImg');
    zoomedImg.src = imgSrc;
    zoomModal.classList.add('active');
}

// RESUMEN Y WHATSAPP
function getResumenTexto() {
    const tipoObj = tiposAgenda.find(x => x.id === selectedConfig.tipo);
    const verObj = versionesAgenda.find(x => x.id === selectedConfig.version);
    const temObj = tematicasAgenda.find(x => x.id === selectedConfig.tematica);

    let costoEnvio = selectedConfig.envio === 'santiago' ? 2990 : 0;
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
    texto += `• Envío: ${selectedConfig.envio === 'santiago' ? 'Santiago ($2.990)' : 'Regiones (Blue Express - A coordinar)'}\n`;
    texto += `\n*TOTAL A PAGAR:* $${total.toLocaleString('es-CL')}${selectedConfig.envio === 'regiones' ? ' + envío' : ''}`;

    return texto;
}

function updateSummaryContent() {
    const verObj = versionesAgenda.find(x => x.id === selectedConfig.version);
    let costoEnvio = selectedConfig.envio === 'santiago' ? 2990 : 0;
    let total = verObj.precio + costoEnvio;

    const box = document.getElementById('summaryBox');
    box.innerHTML = `
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
            <li><strong>Envío:</strong> ${selectedConfig.envio === 'santiago' ? 'Santiago ($2.990)' : 'Regiones (A coordinar)'}</li>
        </ul>
        <div class="summary-total">Total: $${total.toLocaleString('es-CL')}${selectedConfig.envio === 'regiones' ? ' (+ envío)' : ''}</div>
    `;
}

function updateWhatsappLinks() {
    const texto = getResumenTexto();
    const encoded = encodeURIComponent(texto);
    const btnWa = document.getElementById('sendOrderWhatsappBtn');
    // Cambia el 56900000000 por tu número real de WhatsApp de emprendedora
    btnWa.href = `https://wa.me/56900000000?text=${encoded}`;
}

// COMPARTIR CON AMIGA
function sendToFriend() {
    const phoneInput = document.getElementById('friendPhoneInput').value.trim();
    if (phoneInput.length !== 8 || isNaN(phoneInput)) {
        alert('Por favor ingresa un número válido de 8 dígitos.');
        return;
    }

    const fullPhone = `569${phoneInput}`;
    
    // Generar URL con parámetros actuales para que la amiga abra la web con todo seleccionado
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

    const mensajeAmiga = `¡Hola! Mira la agenda Kokomarú que estoy armando:\n\n${resumen}\n\n¿Qué te parece? Puedes verla y cambiar opciones aquí:\n${shareUrl}`;
    const encoded = encodeURIComponent(mensajeAmiga);

    // Abrir WhatsApp para enviar a la amiga
    window.open(`https://wa.me/${fullPhone}?text=${encoded}`, '_blank');
    document.getElementById('friendModal').classList.remove('active');
}

// LEER PARÁMETROS URL SI ALGUIEN ABRE UN LINK COMPARTIDO (Ej: La amiga B o A)
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

        // Abrir el modal automáticamente con las opciones cargadas
        setTimeout(() => {
            modal.classList.add('active');
            currentStep = 4;
            updateStepView();
            renderStep1();
            renderStep2();
            renderStep3();
            renderStep4();
            if (selectedConfig.envio) {
                document.getElementById(selectedConfig.envio === 'santiago' ? 'shipSantiago' : 'shipRegiones').checked = true;
            }
        }, 500);
    }
}