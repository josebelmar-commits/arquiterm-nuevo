"use strict";

const WHATSAPP_NUMBER = "56998772218";
const SERVICES = {
  "arquitectura": {
    "label": "Diseño y construcción",
    "items": [
      {
        "id": "proyecto_arquitectura",
        "name": "Proyecto de arquitectura",
        "preparation": "4 a 10 semanas",
        "fee": "$1.200.000 a $4.500.000",
        "documents": [
          "Dirección o rol de avalúo",
          "Certificado de Informaciones Previas (si lo tiene)",
          "Título o antecedente de dominio",
          "Levantamiento topográfico cuando corresponda",
          "Programa de recintos y superficie esperada"
        ]
      },
      {
        "id": "ampliacion",
        "name": "Ampliación o remodelación",
        "preparation": "3 a 8 semanas",
        "fee": "$300.000 a $1.500.000",
        "documents": [
          "Permiso y recepción final existentes, si los hay",
          "Planos anteriores",
          "Certificado de Informaciones Previas",
          "Rol de avalúo",
          "Fotografías interiores y exteriores"
        ]
      }
    ]
  },
  "tramites": {
    "label": "Regularización y gestión predial",
    "items": [
      {
        "id": "regularizacion",
        "name": "Regularización",
        "preparation": "3 a 8 semanas",
        "fee": "$200.000 a $1.200.000",
        "documents": [
          "Escritura o título de dominio",
          "Certificado de avalúo fiscal detallado",
          "Rol y dirección de la propiedad",
          "CIP y antecedentes municipales existentes",
          "Permisos o recepciones anteriores"
        ]
      },
      {
        "id": "predial_urbano",
        "name": "Subdivisión o fusión urbana",
        "preparation": "2 a 6 semanas",
        "fee": "$250.000 a $900.000",
        "documents": [
          "Escritura e inscripción de dominio vigente",
          "Certificado de Informaciones Previas",
          "Certificado de avalúo fiscal",
          "Plano de loteo o subdivisión anterior",
          "Levantamiento topográfico georreferenciado"
        ]
      },
      {
        "id": "predial_rural",
        "name": "Subdivisión o fusión rural",
        "preparation": "3 a 8 semanas",
        "fee": "$350.000 a $1.500.000",
        "documents": [
          "Inscripción de dominio vigente y escritura",
          "Certificado de avalúo fiscal",
          "Certificado de ruralidad o CIP",
          "Plano predial inscrito o anterior",
          "Levantamiento topográfico georreferenciado"
        ]
      },
      {
        "id": "loteo",
        "name": "Loteo urbano o desarrollo predial rural",
        "preparation": "6 a 16 semanas",
        "fee": "$1.200.000 a $6.000.000",
        "documents": [
          "Título e inscripción de dominio",
          "CIP o certificado de ruralidad",
          "Levantamiento topográfico georreferenciado",
          "Plano y cabida del predio",
          "Factibilidades sanitaria y eléctrica"
        ]
      },
      {
        "id": "ifc",
        "name": "Cambio de uso de suelo / IFC rural",
        "preparation": "4 a 10 semanas",
        "fee": "$600.000 a $2.500.000",
        "documents": [
          "Título e inscripción de dominio vigente",
          "CIP rural o certificado de zonificación",
          "Certificado de avalúo y rol",
          "Plano georreferenciado del predio",
          "Anteproyecto de arquitectura y emplazamiento"
        ]
      }
    ]
  },
  "energia": {
    "label": "Energía y cumplimiento térmico",
    "items": [
      {
        "id": "cev",
        "name": "Calificación energética de vivienda (CEV)",
        "preparation": "5 a 12 días hábiles",
        "fee": "$250.000 a $650.000",
        "documents": [
          "Solicitud y declaración del mandante",
          "Permiso de edificación o CIP, según etapa",
          "Recepción final para calificación, cuando corresponda",
          "Planos de emplazamiento, plantas, cortes y elevaciones",
          "Especificaciones técnicas y materialidades"
        ]
      },
      {
        "id": "informe_termico",
        "name": "Informe térmico OGUC",
        "preparation": "5 a 12 días hábiles",
        "fee": "$280.000 a $850.000",
        "documents": [
          "Ubicación exacta y emplazamiento",
          "Plantas, cortes y elevaciones",
          "Especificaciones técnicas",
          "Escantillones y detalles de envolvente",
          "Cuadro de ventanas y puertas"
        ]
      }
    ]
  },
  "control": {
    "label": "Control y diagnóstico",
    "items": [
      {
        "id": "ito",
        "name": "Inspección técnica de obra",
        "preparation": "Inicio en 3 a 7 días; seguimiento durante la obra",
        "fee": "$90.000 a $180.000 por visita",
        "documents": [
          "Permiso y planos aprobados",
          "Especificaciones técnicas",
          "Contrato y presupuesto de obra",
          "Carta Gantt o programación",
          "Proyectos de especialidades"
        ]
      },
      {
        "id": "tasacion",
        "name": "Tasación inmobiliaria",
        "preparation": "4 a 8 días hábiles",
        "fee": "$140.000 a $350.000",
        "documents": [
          "Dirección y rol de avalúo",
          "Título o escritura disponible",
          "Certificado de avalúo fiscal",
          "Plano o croquis con superficies",
          "Permiso y recepción final"
        ]
      },
      {
        "id": "asesoria",
        "name": "Asesoría técnica",
        "preparation": "2 a 7 días hábiles",
        "fee": "$80.000 a $280.000",
        "documents": [
          "Descripción clara del problema",
          "Dirección o sector",
          "Fotografías y videos",
          "Planos o croquis disponibles",
          "Documentos municipales relacionados"
        ]
      }
    ]
  },
  "especiales": {
    "label": "Proyectos especiales",
    "items": [
      {
        "id": "sala_basura",
        "name": "Proyecto de sala de basura para edificios",
        "preparation": "1 a 4 semanas",
        "fee": "$300.000 a $1.200.000",
        "documents": [
          "Planos de arquitectura del edificio",
          "Cantidad de pisos y departamentos o locales",
          "Emplazamiento y acceso del camión recolector",
          "Sistema existente, si se trata de adecuación",
          "Frecuencia municipal de retiro"
        ]
      }
    ]
  }
};

function byId(id) { return document.getElementById(id); }

function setStatus(element, message, isError = false) {
  if (!element) return;
  element.textContent = message;
  element.classList.toggle("error", isError);
}

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const link = document.createElement("a");

  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  link.remove();
}

function formValue(form, name) {
  const el = form.elements.namedItem(name);
  return el && "value" in el ? String(el.value).trim() : "";
}

function initTheme() {
  const button = document.querySelector(".theme-toggle");
  if (!button) return;
  const applyLabel = () => {
    const dark = document.documentElement.dataset.theme === "dark";
    button.setAttribute("aria-pressed", String(dark));
    const label = button.querySelector("span:last-child");
    if (label) label.textContent = dark ? "Modo claro" : "Ahorro energético";
  };
  applyLabel();
  button.addEventListener("click", () => {
    const dark = document.documentElement.dataset.theme === "dark";
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("arquiterm-theme", next); } catch (_) {}
    applyLabel();
  });
}

function initMobileMenu() {
  const button = document.querySelector(".menu");
  const nav = document.querySelector(".header nav");
  if (!button || !nav) return;
  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Abrir menú");
    }
  });
}

function initDetailsIndicators() {
  document.querySelectorAll("details").forEach((details) => {
    const summary = details.querySelector(":scope > summary");
    if (!summary) return;
    const indicator = summary.querySelector(":scope > b, :scope > span:last-child");
    const update = () => {
      if (!indicator) return;
      if (indicator.tagName === "B") {
        const base = details.id === "diagnostico" ? (details.open ? "Cerrar" : "Comenzar") : "";
        indicator.textContent = base ? `${base} ${details.open ? "−" : "+"}` : (details.open ? "−" : "+");
      } else if (["+", "−"].includes(indicator.textContent.trim())) {
        indicator.textContent = details.open ? "−" : "+";
      }
    };
    details.addEventListener("toggle", update);
    update();
  });
}

function populateAreas() {
  const areaSelect = byId("serviceArea");
  if (!areaSelect) return;
  const current = areaSelect.value || "tramites";
  areaSelect.innerHTML = "";
  Object.entries(SERVICES).forEach(([id, area]) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = area.label;
    areaSelect.appendChild(option);
  });
  areaSelect.value = SERVICES[current] ? current : Object.keys(SERVICES)[0];
}

function populateServices(preferredService = "") {
  const areaSelect = byId("serviceArea");
  const serviceSelect = byId("serviceType");
  if (!areaSelect || !serviceSelect) return;
  const area = SERVICES[areaSelect.value];
  serviceSelect.innerHTML = "";
  (area?.items || []).forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    serviceSelect.appendChild(option);
  });
  if (preferredService && (area?.items || []).some((item) => item.id === preferredService)) {
    serviceSelect.value = preferredService;
  }
  updateGuide();
}

function selectedService() {
  const areaId = byId("serviceArea")?.value;
  const serviceId = byId("serviceType")?.value;
  const area = SERVICES[areaId];
  const item = area?.items.find((candidate) => candidate.id === serviceId);
  return { areaId, area, item };
}

function updateGuide() {
  const { item } = selectedService();
  if (!item) return;
  const values = document.querySelectorAll("#diagnostico .guide-summary strong");
  if (values[0]) values[0].textContent = item.preparation || "Por definir tras revisión";
  if (values[1]) values[1].textContent = "Depende de la institución competente y de la calidad de los antecedentes.";
  if (values[2]) values[2].textContent = item.fee || "Cotización según alcance";
  const feeNote = document.querySelector("#diagnostico .fee-note");
  if (feeNote) feeNote.textContent = "Valor referencial. La propuesta definitiva depende de superficie, ubicación, antecedentes, complejidad y alcance contratado.";
  const alert = document.querySelector("#diagnostico .smart-alert");
  if (alert) alert.innerHTML = "<b>Importante:</b> La viabilidad y los plazos se confirman después de revisar los antecedentes. Los tiempos de organismos públicos son externos al servicio profesional.";
}

function chooseService(areaId, serviceId) {
  const areaSelect = byId("serviceArea");
  if (!areaSelect || !SERVICES[areaId]) return;
  areaSelect.value = areaId;
  populateServices(serviceId);
  const details = byId("diagnostico");
  if (details) {
    details.open = true;
    setTimeout(() => details.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
  }
}

function initServiceSelection() {
  populateAreas();
  populateServices("regularizacion");
  byId("serviceArea")?.addEventListener("change", () => populateServices());
  byId("serviceType")?.addEventListener("change", updateGuide);
  document.querySelectorAll("button[data-area][data-service]").forEach((button) => {
    button.addEventListener("click", () => chooseService(button.dataset.area, button.dataset.service));
  });
}

function initQuickForm() {
  const form = document.querySelector(".quick-form");
  const status = byId("quickFormStatus");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    setStatus(status, "");
    if (!form.reportValidity()) return;
    if (formValue(form, "quickWebsite")) return;
    const lines = [
      "Hola José Luis, quisiera solicitar una evaluación inicial en Arquiterm.",
      "",
      `Necesidad: ${formValue(form, "quickNeed")}`,
      `Nombre: ${formValue(form, "quickName")}`,
      `WhatsApp: ${formValue(form, "quickPhone")}`,
      `Comuna o sector: ${formValue(form, "quickCity")}`,
    ];
    const details = formValue(form, "quickDetails");
    if (details) lines.push(`Descripción: ${details}`);
    setStatus(status, "Consulta respaldada. Se abrió WhatsApp para continuar.");
    openWhatsApp(lines.join("\n"));
  });
}

function initSmartForm() {
  const form = document.querySelector(".smart-form");
  const status = byId("smartFormStatus");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    setStatus(status, "");
    if (!form.reportValidity()) return;
    if (formValue(form, "website")) return;
    const { area, item } = selectedService();
    const checkedDocs = [...form.querySelectorAll('input[name="documents"]:checked')].map((el) => el.value);
    const lines = [
      "Hola José Luis, quisiera solicitar una cotización detallada en Arquiterm.",
      "",
      `Área: ${area?.label || "No indicada"}`,
      `Servicio: ${item?.name || "No indicado"}`,
      `Año aproximado: ${formValue(form, "constructionDate") || "No informado"}`,
      `Uso: ${formValue(form, "use")}`,
      `Superficie aproximada: ${formValue(form, "area")} m²`,
      `Superficie involucrada: ${formValue(form, "scopeArea") || "No informada"}`,
      `Ubicación: ${formValue(form, "locationType")}`,
      `Antecedentes previos: ${formValue(form, "approved")}`,
      `Relación con el proyecto: ${formValue(form, "owner")}`,
      `Descripción: ${formValue(form, "description")}`,
      `Documentos disponibles: ${checkedDocs.length ? checkedDocs.join(", ") : "No indicados"}`,
      "",
      `Nombre: ${formValue(form, "name")}`,
      `WhatsApp o teléfono: ${formValue(form, "phone")}`,
      `Correo: ${formValue(form, "email") || "No informado"}`,
      `Comuna: ${formValue(form, "city")}`,
      `Sector: ${formValue(form, "sector") || "No informado"}`,
      `Contacto preferido: ${formValue(form, "contact") || "WhatsApp"}`,
    ];
    setStatus(status, "Consulta respaldada. Se abrió WhatsApp para continuar.");
    openWhatsApp(lines.join("\n"));
  });
}

function initAnchorBehavior() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      const dropdown = link.closest("details.nav-dropdown");
      if (dropdown) dropdown.open = false;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  initDetailsIndicators();
  initServiceSelection();
  initQuickForm();
  initSmartForm();
  initAnchorBehavior();
});
