"use strict";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqrjadb";

function fieldValue(form, name) {
  const field = form.elements.namedItem(name);
  return field && "value" in field ? String(field.value).trim() : "";
}

function sendToFormspree(subject, fields) {
  const data = new FormData();

  data.append("_subject", subject);
  data.append("Origen", "Sitio web Arquiterm");
  data.append("Fecha", new Date().toLocaleString("es-CL"));
  data.append("Página", window.location.href);

  Object.entries(fields).forEach(([label, value]) => {
    data.append(label, value || "No informado");
  });

  fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json"
    },
    keepalive: true
  }).catch((error) => {
    console.error("No se pudo respaldar la consulta por correo:", error);
  });
}

function connectQuickForm() {
  const form = document.querySelector(".quick-form");
  if (!form) return;

  form.addEventListener("submit", () => {
    if (!form.checkValidity()) return;
    if (fieldValue(form, "quickWebsite")) return;

    sendToFormspree("Nueva consulta rápida — Arquiterm", {
      "Tipo de consulta": fieldValue(form, "quickNeed"),
      "Nombre": fieldValue(form, "quickName"),
      "WhatsApp del cliente": fieldValue(form, "quickPhone"),
      "Comuna o sector": fieldValue(form, "quickCity"),
      "Descripción": fieldValue(form, "quickDetails")
    });
  });
}

function connectDetailedForm() {
  const form = document.querySelector(".smart-form");
  if (!form) return;

  form.addEventListener("submit", () => {
    if (!form.checkValidity()) return;
    if (fieldValue(form, "website")) return;

    const documents = [...form.querySelectorAll(
      'input[name="documents"]:checked'
    )].map((field) => field.value).join(", ");

    const area = form.elements.namedItem("serviceArea");
    const service = form.elements.namedItem("serviceType");

    sendToFormspree("Nueva cotización detallada — Arquiterm", {
      "Área": area?.selectedOptions?.[0]?.textContent || "",
      "Servicio": service?.selectedOptions?.[0]?.textContent || "",
      "Año aproximado": fieldValue(form, "constructionDate"),
      "Uso": fieldValue(form, "use"),
      "Superficie aproximada": fieldValue(form, "area"),
      "Superficie involucrada": fieldValue(form, "scopeArea"),
      "Ubicación": fieldValue(form, "locationType"),
      "Antecedentes previos": fieldValue(form, "approved"),
      "Relación con el proyecto": fieldValue(form, "owner"),
      "Descripción": fieldValue(form, "description"),
      "Documentos disponibles": documents,
      "Nombre": fieldValue(form, "name"),
      "WhatsApp o teléfono": fieldValue(form, "phone"),
      "Correo del cliente": fieldValue(form, "email"),
      "Comuna": fieldValue(form, "city"),
      "Sector": fieldValue(form, "sector"),
      "Contacto preferido": fieldValue(form, "contact")
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  connectQuickForm();
  connectDetailedForm();
});
