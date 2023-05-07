const musicaUsuario = require('../models/musicaUsuario');
const Musica = require('../../musicas/models/Musica');
const Usuario = require("../../usuarios/models/Usuario");
const musicaUsuarioService = require('./musicaUsuarioServices');

jest.mock('../models/musicaUsuario', () => ({
  create: jest.fn(),
  findAll: jest.fn(),
}));

jest.mock('../../usuarios/models/Usuario', () => ({
  findByPk: jest.fn(),
  findAll: jest.fn(),
}));

jest.mock('../../musicas/models/Musica', () => ({
  findByPk: jest.fn(),
  findAll: jest.fn(),
}));

describe('create', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test('método recebe um id de usuário e um id de música => chama o create com os dados corretos', async () => {
    const mockBody = {
        id: 1,
    };

    Usuario.findByPk.mockResolvedValue({});
    Musica.findByPk.mockResolvedValue({});
    musicaUsuario.create.mockResolvedValue({});

    await musicaUsuarioService.criar(mockBody);

    expect(musicaUsuario.create).toHaveBeenCalledTimes(1);
    expect(musicaUsuario.create).toHaveBeenCalledWith(mockBody);
  });
});