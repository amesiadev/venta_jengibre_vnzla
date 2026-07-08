document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('jengibreForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Capturar los valores reales del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const destino = document.getElementById('destino').value;
        const volumen = document.getElementById('volumen').value;
        const telefono = document.getElementById('telefono').value.trim();

        // REEMPLAZA ESTE NÚMERO: Coloca tu WhatsApp real (Formato internacional, sin el signo +)
        const numeroVendedor = "584120000000"; 

        // 2. Armar el mensaje estructurado para tu negociación B2B
        const mensaje = `¡Hola! Vengo de la Landing Page de *Raíces de Fe* y deseo iniciar una negociación:

🌾 *Datos de la Solicitud:*
• *Nombre / Razón Social:* ${nombre}
• *Destino / Mercado:* ${destino}
• *Cantidad Estimada:* ${volumen}
• *Teléfono de Contacto:* ${telefono}

Quiero validar disponibilidad actual, condiciones de la ruta y coordinar precio según el mercado local. ¡Muchas gracias!`;

        // 3. Codificar el mensaje para compatibilidad de URL
        const mensajeCodificado = encodeURIComponent(mensaje);

        // 4. Crear enlace de redirección directa
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroVendedor}&text=${mensajeCodificado}`;

        // 5. Abrir la conversación directamente en una nueva pestaña
        window.open(urlWhatsApp, '_blank');
    });
});