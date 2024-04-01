const productos = [
    {
        "id": 1,
        "nombre": "Juguete para gatos",
        "categoria": "Accesorios",
        "subcategoria": "Juguetes",
        "precio": 9.99,
        "descripcion": "Un juguete divertido para entretener a tu gato durante horas.",
        "imagen": "juguetegatos.jpg"
    },
    {
        "id": 2,
        "nombre": "Comida para perros",
        "categoria": "Comida",
        "subcategoria": "Alimento seco",
        "precio": 14.99,
        "descripcion": "Una deliciosa comida balanceada para tu perro, con ingredientes naturales.",
        "imagen": "comidaperros.jpg"
    },
    {
        "id": 3,
        "nombre": "Jaula para aves",
        "categoria": "Accesorios",
        "subcategoria": "Jaulas",
        "precio": 29.99,
        "descripcion": "Jaula espaciosa y resistente para mantener a tus aves cómodas y seguras.",
        "imagen": "jaulaaves.jpg"
    },
    {
        "id": 4,
        "nombre": "Acuario para peces",
        "categoria": "Accesorios",
        "subcategoria": "Acuarios",
        "precio": 49.99,
        "descripcion": "Acuario de vidrio con sistema de filtración para crear un hogar saludable para tus peces.",
        "imagen": "acuariopeces.jpg"
    },
    {
        "id": 5,
        "nombre": "Arena para gatos",
        "categoria": "Comida",
        "subcategoria": "Arena",
        "precio": 7.49,
        "descripcion": "Arena aglomerante para gatos, neutraliza los olores y facilita la limpieza de la bandeja.",
        "imagen": "arenagatos.jpg"
    },
    {
        "id": 6,
        "nombre": "Correa retráctil para perros",
        "categoria": "Accesorios",
        "subcategoria": "Correas",
        "precio": 19.99,
        "descripcion": "Correa extensible que brinda libertad de movimiento a tu perro durante los paseos.",
        "imagen": "correaperros.jpg"
    },
    {
        "id": 7,
        "nombre": "Alimento para aves tropicales",
        "categoria": "Comida",
        "subcategoria": "Alimento seco",
        "precio": 11.99,
        "descripcion": "Mezcla de semillas y frutas específicamente formulada para aves tropicales.",
        "imagen": "alimentoaves.jpg"
    },
    {
        "id": 8,
        "nombre": "Juguete interactivo para gatos",
        "categoria": "Accesorios",
        "subcategoria": "Juguetes",
        "precio": 12.99,
        "descripcion": "Juguete con plumas y movimiento que estimula el instinto de caza de tu gato.",
        "imagen": "jugueteinteractivo.jpg"
    },
    {
        "id": 9,
        "nombre": "Alimento para peces tropicales",
        "categoria": "Comida",
        "subcategoria": "Alimento seco",
        "precio": 6.99,
        "descripcion": "Pienso en escamas que proporciona una nutrición completa y equilibrada para peces tropicales.",
        "imagen": "alimentopeces.jpg"
    },
    {
        "id": 10,
        "nombre": "Cama para perros",
        "categoria": "Accesorios",
        "subcategoria": "Camas",
        "precio": 39.99,
        "descripcion": "Cama ortopédica con borde elevado para brindar comodidad y apoyo a tu perro durante el descanso.",
        "imagen": "cama_perros.jpg"
    },
    {
        "id": 11,
        "nombre": "Rascador para gatos",
        "categoria": "Accesorios",
        "subcategoria": "Rascadores",
        "precio": 29.99,
        "descripcion": "Rascador resistente y duradero para que tu gato afile sus uñas y se estire cómodamente.",
        "imagen": "rascador_gatos.jpg"
    },
    {
        "id": 12,
        "nombre": "Comida para perros",
        "categoria": "Comida",
        "subcategoria": "Alimento seco",
        "precio": 14.99,
        "descripcion": "Una deliciosa comida balanceada para tu perro, con ingredientes naturales.",
        "imagen": "comida_perros.jpg"
    },
    {
        "id": 13,
        "nombre": "Jaula para aves",
        "categoria": "Accesorios",
        "subcategoria": "Jaulas",
        "precio": 29.99,
        "descripcion": "Jaula espaciosa y resistente para mantener a tus aves cómodas y seguras.",
        "imagen": "jaula_aves.jpg"
    },
    {
        "id": 14,
        "nombre": "Acuario para peces",
        "categoria": "Accesorios",
        "subcategoria": "Acuarios",
        "precio": 49.99,
        "descripcion": "Acuario de vidrio con sistema de filtración para crear un hogar saludable para tus peces.",
        "imagen": "acuario_peces.jpg"
    },
    {
        "id": 15,
        "nombre": "Arena para gatos",
        "categoria": "Comida",
        "subcategoria": "Arena",
        "precio": 7.49,
        "descripcion": "Arena aglomerante para gatos, neutraliza los olores y facilita la limpieza de la bandeja.",
        "imagen": "arena_gatos.jpg"
    },
    {
        "id": 16,
        "nombre": "Correa retráctil para perros",
        "categoria": "Accesorios",
        "subcategoria": "Correas",
        "precio": 19.99,
        "descripcion": "Correa extensible que brinda libertad de movimiento a tu perro durante los paseos.",
        "imagen": "correa_perros.jpg"
    },
    {
        "id": 17,
        "nombre": "Alimento para aves tropicales",
        "categoria": "Comida",
        "subcategoria": "Alimento seco",
        "precio": 11.99,
        "descripcion": "Mezcla de semillas y frutas específicamente formulada para aves tropicales.",
        "imagen": "alimento_aves.jpg"
    },
    {
        "id": 18,
        "nombre": "Juguete interactivo para gatos",
        "categoria": "Accesorios",
        "subcategoria": "Juguetes",
        "precio": 12.99,
        "descripcion": "Juguete con plumas y movimiento que estimula el instinto de caza de tu gato.",
        "imagen": "juguete_gatos.jpg"
    },
    {
        "id": 19,
        "nombre": "Alimento para peces tropicales",
        "categoria": "Comida",
        "subcategoria": "Alimento seco",
        "precio": 6.99,
        "descripcion": "Pienso en escamas que proporciona una nutrición completa y equilibrada para peces tropicales.",
        "imagen": "alimento_peces.jpg"
    },
    {
        "id": 20,
        "nombre": "Cama para perros",
        "categoria": "Accesorios",
        "subcategoria": "Camas",
        "precio": 39.99,
        "descripcion": "Cama ortopédica con borde elevado para brindar comodidad y apoyo a tu perro durante el descanso.",
        "imagen": "cama_perros.jpg"
    }
];
