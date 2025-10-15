const Fastify = require('fastify');
const cors = require('@fastify/cors');

const fastify = Fastify({ logger: true });

// Registrar CORS (sin opciones avanzadas, permitiendo todos los orígenes)
fastify.register(cors, {
  origin: true,            // permite reflejar el origen de la solicitud
  methods: ['GET','POST','OPTIONS'],  // métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'],
  // puedes agregar otras opciones si necesitas
});

fastify.get('/api/hello', async (request, reply) => {
  return { message: 'Hola desde el backend (Fastify)!' };
});

fastify.post('/api/echo', async (request, reply) => {
  const payload = request.body || {};
  return { received: payload };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
