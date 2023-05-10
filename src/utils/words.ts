export interface iWord {
  word: string;
  replacement: string;
  advice: string;
}

export const badWords: iWord[] = [
  {
    word: "odio",
    replacement: "No me gusta",
    advice: "Agradecemos su confianza en nosotros",
  },
  {
    word: "estúpido",
    replacement: "incorrecto",
    advice: "Gracias por su paciencia mientras resolvemos este problema",
  },
  {
    word: "idiota",
    replacement: "equivocado",
    advice:
      "Estamos trabajando para solucionar esto lo antes posible. Agradecemos su paciencia",
  },
  {
    word: "imbécil",
    replacement: "incorrecto",
    advice:
      "Lamentamos cualquier inconveniente. Haremos todo lo posible para resolver esto rápidamente",
  },
  {
    word: "ignorante",
    replacement: "desinformado",
    advice:
      "Gracias por traer esto a nuestra atención. Estamos investigando y le informaremos tan pronto como tengamos más información",
  },
  {
    word: "incompetente",
    replacement: "inexperiencia",
    advice:
      "Sentimos mucho por los inconvenientes. Estamos trabajando arduamente para solucionar esto",
  },
  {
    word: "tonto",
    replacement: "no adecuado",
    advice:
      "Agradecemos su paciencia mientras trabajamos para resolver este problema",
  },
  {
    word: "patético",
    replacement: "lamentable",
    advice:
      "Estamos trabajando para solucionar esto lo antes posible. Agradecemos su paciencia",
  },
  {
    word: "basura",
    replacement: "no satisfactorio",
    advice:
      "Estamos comprometidos a brindarle el mejor servicio posible. Gracias por su paciencia mientras trabajamos para resolver esto",
  },
  {
    word: "asqueroso",
    replacement: "no satisfactorio",
    advice:
      "Nos disculpamos sinceramente por los inconvenientes causados. Estamos haciendo todo lo posible para solucionar esto",
  },
  {
    word: "desagradable",
    replacement: "no satisfactorio",
    advice:
      "Estamos trabajando para solucionar esto lo antes posible. Gracias por su paciencia",
  },
  {
    word: "repugnante",
    replacement: "no satisfactorio",
    advice:
      "Nos disculpamos por cualquier inconveniente causado. Estamos trabajando arduamente para resolver esto",
  },
  {
    word: "grosero",
    replacement: "no adecuado",
    advice:
      "Gracias por su paciencia mientras trabajamos para solucionar esto. Agradecemos su comprensión",
  },
  {
    word: "desconsiderado",
    replacement: "no atento",
    advice:
      "Nos disculpamos sinceramente por los inconvenientes causados. Estamos trabajando para solucionar esto lo antes posible",
  },
  {
    word: "irrespetuoso",
    replacement: "no adecuado",
    advice:
      "Agradecemos su paciencia mientras trabajamos pararesolver esto. Nos disculpamos sinceramente por cualquier ofensa causada",
  },
  {
    word: "desagradecido",
    replacement: "no agradecido",
    advice:
      "Estamos comprometidos a brindarle el mejor servicio posible. Gracias por su paciencia mientras trabajamos para solucionar esto",
  },
  {
    word: "mentiroso",
    replacement: "equivocado",
    advice:
      "Lamentamos cualquier confusión causada. Estamos trabajando para solucionar esto lo antes posible",
  },
  {
    word: "engañoso",
    replacement: "equivocado",
    advice:
      "Agradecemos su paciencia mientras investigamos y resolvemos este problema. Lamentamos cualquier inconveniente causado",
  },
  {
    word: "farsante",
    replacement: "no sincero",
    advice:
      "Estamos comprometidos a ser lo más transparentes y honestos posible. Agradecemos su comprensión mientras trabajamos para resolver esto",
  },
  {
    word: "estafador",
    replacement: "no confiable",
    advice:
      "Nos tomamos muy en serio la integridad de nuestra empresa y lamentamos cualquier problema que haya experimentado. Estamos trabajando para solucionar esto",
  },
  {
    word: "ladron",
    replacement: "no confiable",
    advice:
      "Nos tomamos muy en serio la integridad de nuestra empresa y lamentamos cualquier problema que haya experimentado. Estamos trabajando para solucionar esto",
  },
  {
    word: "abusivo",
    replacement: "no adecuado",
    advice:
      "Nos disculpamos sinceramente por cualquier ofensa causada. Estamos comprometidos a brindarle el mejor servicio posible",
  },
  {
    word: "violento",
    replacement: "no aceptable",
    advice:
      "Nos tomamos muy en serio la seguridad y el bienestar de nuestros clientes y empleados. Por favor, háganos saber si hay algo que podamos hacer para ayudar",
  },
  {
    word: "insultante",
    replacement: "no aceptable",
    advice:
      "Lamentamos cualquier ofensa causada. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "racista",
    replacement: "discriminatorio",
    advice:
      "Nos tomamos muy en serio la igualdad y la diversidad y lamentamos cualquier comentario o acción ofensiva. Estamos trabajando para mejorar nuestra sensibilidad y comprensión",
  },
  {
    word: "sexista",
    replacement: "discriminatorio",
    advice:
      "Nos tomamos muy en serio la igualdad y la diversidad y lamentamos cualquier comentario o acción ofensiva. Estamos trabajando para mejorar nuestra sensibilidad y comprensión",
  },
  {
    word: "homofóbico",
    replacement: "discriminatorio",
    advice:
      "Nos tomamos muy en serio la igualdad y la diversidad y lamentamos cualquier comentario o acción ofensiva. Estamos trabajando para mejorar nuestra sensibilidad y comprensión",
  },
  {
    word: "xenófobo",
    replacement: "discriminatorio",
    advice:
      "Nostomamos muy en serio la igualdad y la diversidad y lamentamos cualquier comentario o acción ofensiva. Estamos trabajando para mejorar nuestra sensibilidad y comprensión",
  },
  {
    word: "idiota",
    replacement: "no inteligente",
    advice:
      "Lamentamos cualquier ofensa causada. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "estúpido",
    replacement: "no inteligente",
    advice:
      "Lamentamos cualquier ofensa causada. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "incompetente",
    replacement: "no capacitado",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos trabajando para mejorar nuestra eficiencia y calidad de servicio",
  },
  {
    word: "inútil",
    replacement: "no efectivo",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "patético",
    replacement: "lamentable",
    advice:
      "Lamentamos cualquier ofensa causada. Estamos trabajando para mejorar nuestra calidad de servicio y satisfacer las necesidades de nuestros clientes",
  },
  {
    word: "horrible",
    replacement: "no satisfactorio",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "terrible",
    replacement: "no satisfactorio",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "pésimo",
    replacement: "no satisfactorio",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "malo",
    replacement: "no satisfactorio",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "desastroso",
    replacement: "no satisfactorio",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "fracaso",
    replacement: "no éxito",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "odioso",
    replacement: "no agradable",
    advice:
      "Lamentamos cualquier ofensa causada. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "desagradable",
    replacement: "no agradable",
    advice:
      "Lamentamos cualquier ofensa causada. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "despreciable",
    replacement: "no aceptable",
    advice:
      "Lamentamos cualquier ofensa causada. Estamos trabajando para mejorar nuestra calidad de servicio y satisfacer las necesidades de nuestros clientes",
  },
  {
    word: "detestable",
    replacement: "no aceptable",
    advice:
      "Lamentamos cualquier ofensa causada. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "vergonzoso",
    replacement: "lamentable",
    advice:
      "Lamentamos cualquier ofensa causada. Estamos trabajando para mejorar nuestra calidad de servicio y satisfacer las necesidades de nuestros clientes",
  },
  {
    word: "grosero",
    replacement: "no cortés",
    advice:
      "Lamentamos cualquier ofensa causada. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "irrespetuoso",
    replacement: "no respetuoso",
    advice:
      "Lamentamos cualquier ofensa causada. Respetamos a nuestros clientes y estamos trabajando para mejorar nuestra comunicación y servicio",
  },
  {
    word: "insultante",
    replacement: "no respetuoso",
    advice:
      "Lamentamos cualquier ofensa causada. Respetamos a nuestros clientes y estamos trabajando para mejorar nuestra comunicación y servicio",
  },
  {
    word: "irritante",
    replacement: "molesto",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "fastidioso",
    replacement: "molesto",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "aborrecible",
    replacement: "no aceptable",
    advice:
      "Lamentamos cualquier ofensa causada. Estamos trabajando para mejorar nuestra calidad de servicio y satisfacer las necesidades de nuestros clientes",
  },
  {
    word: "despreciable",
    replacement: "no aceptable",
    advice:
      "Lamentamos cualquier ofensa causada. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "indeseable",
    replacement: "no deseado",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "puto",
    replacement: "no hay remplazo para esta palabra",
    advice: "No uses malas palabras",
  },
  {
    word: "indignante",
    replacement: "inaceptable",
    advice:
      "Lamentamos cualquier ofensa causada. Estamos trabajando para mejorar nuestra calidad de servicio y satisfacer las necesidades de nuestros clientes",
  },
  {
    word: "injusto",
    replacement: "no equitativo",
    advice:
      "Lamentamos cualquier inconveniente causado. Nos esforzamos por tratar a nuestros clientes con justicia y equidad, y estamos trabajando para mejorar nuestra comunicación y servicio",
  },
  {
    word: "insensible",
    replacement: "no considerado",
    advice:
      "Lamentamos cualquier ofensa causada. Nos esforzamos por ser considerados y comprensivos con nuestros clientes, y estamos trabajando para mejorar nuestra comunicación y servicio",
  },
  {
    word: "insufrible",
    replacement: "insoportable",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "intolerable",
    replacement: "inaceptable",
    advice:
      "Lamentamos cualquier ofensa causada. Estamos trabajando para mejorar nuestra calidad de servicio y satisfacer las necesidades de nuestros clientes",
  },
  {
    word: "intransigente",
    replacement: "inflexible",
    advice:
      "Lamentamos cualquier inconveniente causado. Nos esforzamos por ser flexibles y adaptarnos a las necesidades de nuestros clientes, y estamos trabajando para mejorar nuestra comunicación y servicio",
  },
  {
    word: "irritante",
    replacement: "molesto",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "mala educación",
    replacement: "no educado",
    advice:
      "Lamentamos cualquier ofensa causada. Respetamos a nuestros clientes y estamos trabajando para mejorar nuestra comunicación y servicio",
  },
  {
    word: "malentendido",
    replacement: "error de comunicación",
    advice:
      "Lamentamos cualquier confusión causada. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "maltrato",
    replacement: "trato inapropiado",
    advice:
      "Lamentamos cualquier ofensa causada. Nos esforzamos por tratar a nuestros clientes con respeto y consideración, y estamos trabajando para mejorar nuestra comunicación y servicio",
  },
  {
    word: "mentiroso",
    replacement: "no veraz",
    advice:
      "Lamentamos cualquier ofensa causada. Nos esforzamos por ser honestos y transparentes con nuestros clientes, y estamos trabajando para mejorar nuestra comunicación y servicio",
  },
  {
    word: "molestia",

    replacement: "inconveniente",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "negligente",
    replacement: "descuidado",
    advice:
      "Lamentamos cualquier inconveniente causado. Nos esforzamos por ser diligentes y cuidadosos en nuestro trabajo, y estamos trabajando para mejorar nuestra comunicación y servicio",
  },
  {
    word: "negligencia",
    replacement: "descuido",
    advice:
      "Lamentamos cualquier inconveniente causado. Nos esforzamos por ser diligentes y cuidadosos en nuestro trabajo, y estamos trabajando para mejorar nuestra comunicación y servicio",
  },
  {
    word: "nulo",
    replacement: "no válido",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "obsoleto",
    replacement: "anticuado",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos trabajando para actualizar nuestros productos y servicios y satisfacer las necesidades de nuestros clientes",
  },
  {
    word: "ofensivo",
    replacement: "inapropiado",
    advice:
      "Lamentamos cualquier ofensa causada. Nos esforzamos por tratar a nuestros clientes con respeto y consideración, y estamos trabajando para mejorar nuestra comunicación y servicio",
  },
  {
    word: "omiso",
    replacement: "ignorado",
    advice:
      "Lamentamos cualquier inconveniente causado. Nos esforzamos por prestar atención a las necesidades de nuestros clientes, y estamos trabajando para mejorar nuestra comunicación y servicio",
  },
  {
    word: "opaco",
    replacement: "poco claro",
    advice:
      "Lamentamos cualquier confusión causada. Nos esforzamos por ser claros y transparentes con nuestros clientes, y estamos trabajando para mejorar nuestra comunicación y servicio",
  },
  {
    word: "peligroso",
    replacement: "riesgoso",
    advice:
      "Lamentamos cualquier preocupación causada. Nos tomamos muy en serio la seguridad de nuestros clientes, y estamos trabajando para mejorar nuestros productos y servicios",
  },
  {
    word: "penoso",
    replacement: "lamentable",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos comprometidos a brindarle el mejor servicio posible y esperamos resolver esto de manera satisfactoria",
  },
  {
    word: "pésimo",
    replacement: "malo",
    advice:
      "Lamentamos cualquier inconveniente causado. Estamos trabajando para mejorar nuestros productos y servicios y satisfacer las necesidades de nuestros clientes",
  },
];

export const spamWords = [
  "100%",
  "50%",
  "$$$",
  "$",
  "$$",
  "únete a millones",
  "millón",
  "cien por ciento",
  "saludos",
  "estimado",
  "estimada",
  "hola",
  "actuar ya",
  "según lo visto en",
  "ganga",
  "mejor precio",
  "comprar",
  "compra directa",
  "barato",
  "liquidación",
  "comparar",
  "comparar tarifas",
  "descuento",
  "oferta fantástica",
  "gratis",
  "gran oferta",
  "increíble oferta",
  "limitado (es decir, oferta por tiempo limitado, etc.)",
  "el precio más bajo",
  "solo clientes nuevos",
  "no se requiere compra",
  "oferta",
  "la oferta vence",
  "orden",
  "ordenar ahora",
  "orden enviada por",
  "estado del pedido",
  "ordenar hoy",
  "sin riesgo",
  "venta",
  "salvar",
  "comprador",
  "suministros",
  "marketing",
  "anuncio",
  "te vas a quedar asombrado",
  "llamada",
  "haz clic en",
  "haz click abajo",
  "haz clic aquí",
  "haz clic para eliminar",
  "compite por tu negocio",
  "marketing directo",
  "email marketing",
  "formulario",
  "incremento de ventas",
  "aumentar el tráfico",
  "incrementa tus ventas",
  "marketing por internet",
  "marketing",
  "soluciones de marketing",
  "correo electrónico masivo",
  "miembro",
  "oferta de prueba mensual",
  "más tráfico de internet",
  "marketing multinivel",
  "envío por única vez",
  "online marketing",
  "suscríbete en",
  "retirar",
  "instrucciones de eliminación",
  "ventas",
  "suscribirse",
  "darse de baja",
  "visita nuestro sitio web",
  "tráfico web",
  "ofertas generales",
  "conviértete en miembro",
  "dirección de envío",
  "cancelar",
  "cancelar en cualquier momento",
  "no se puede combinar con ninguna otra oferta",
  "oferta exclusiva",
  "certificado de regalo",
  "regalar",
  "garantía",
  "oferta",
  "oportunidad",
  "por día",
  "por semana",
  "correo urgente",
  "premio(s)",
  "compra",
  "elimina",
  "se reserva el derecho",
  "retrocede",
  "puntuación",
  "regístrate gratis",
  "ve por ti mismo",
  "términos",
  "términos y condiciones",
  "las mejores tarifas",
  "simplemente lo están regalando",
  "juicio",
  "ilimitado",
  "no solicitado",
  "ofertas de vacaciones",
  "garantía",
  "honramos a todos",
  "escápate el fin de semana",
  "ganar",
  "ganador",
  "ganando",
  "ganó",
  "¡eres un ganador!",
  "has sido seleccionado",
  "finanzas generales",
  "asequible",
  "dinerales",
  "facturación",
  "efectivo",
  "bono en efectivo",
  "centavos por dólar",
  "verificar",
  "reclamaciones",
  "recoger",
  "costo",
  "crédito",
  "venta directa",
  "personal",
  "hacerse rico",
  "planes financieros",
  "marketing",
  "farmacia",
  "aceptamos tarjetas de crédito",
  "conoce solteros",
  "cómo ganas más dinero",
  "elimina tu deuda",
  "marketing online",
  "farmacia online",
  "compra directa",
  "mujeres / hombres calientes",
  "trabaja desde casa",
  "¿has sido estafado?",
  "mayor tráfico por internet",
  "totalmente natural",
  "cupón de oferta",
  "sexo",
  "gana dinero extra",
  "evita la bancarrota",
  "marketing en internet",
  "hormonas",
  "dirección de la facturación",
  "cita fácil",
  "aumenta los ingresos",
  "aumento de tráfico",
  "viagra",
  "la mejor oferta",
  "querido amigo",
  "se tu propio jefe",
  "reintegro total",
  "marketing directo",
  "pierde peso",
  "llama ahora",
  "estimado amigo",
  "ingreso extra",
  "factura",
  "aumenta las ventas",
  "reducción drástica",
  "mejor precio",
  "felicidades",
  "has ganado",
  "paypal",
  "soluciones de marketing",
  "revierte la edad",
  "oferta especial",
  "urgente",
  "dinero gratis",
  "visa/mastercard",
  "prueba por un mes",
  "xanax",
  "obtén ahora",
  "ayuda por favor",
  "casino",
  "fedex",
  "regístrate gratis hoy",
  "medicina",
  "promoción especial",
  "por favor lee",
  "comienza hoy",
  "en efectivo",
  "contactos gratis",
  "vicodin",
  "gratis",
  "notificación de depósito",
  "beneficiario",
  "correo masivo",
  "curar",
  "¿por qué pagar más?",
  "grandes ganancias",
  "ahorra mucho dinero",
  "elimina las arrugas",
  "ahorra hasta",
  "sin riesgos",
  "inversión",
  "droga",
  "llama gratis",
  "sin trucos",
  "millones de euros/dólares",
  "sin costo",
  "gana x por semana",
  "cheque/transferencia bancaria",
  "reserva ahora",
  "beneficio real",
  "100 % satisfecho",
  "felicitaciones",
  "por tiempo limitado",
  "¿qué esperas?",
  "fraude",
  "estafa",
  "esquema ponzi",
  "pirámide",
];
