const Artista = require("../../Artistas/models/Artista");
const ArtistaServices = require("../../Artistas/services/ArtistaServices");
const Musica = require('../../Musicas/models/Musica');
const MusicaServices = require('./MusicaServices');

jest.mock("../models/Musica", () => ({
    create: jest.fn(),
    findByPk: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    destroy: jest.fn(),
    update: jest.fn(),
}));

jest.mock('../../Artistas/models/Artista', () => ({
    create: jest.fn(),
    findByPk: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn()
}));

describe("criar", () => {
    beforeEach(() => {
        jest.resetAllMocks();
        jest.clearAllMocks();
    });

    test("Recebe um objeto => Cria uma Música no banco com um Artista já existente", async () => {
        const mockBodyMusica = {
        foto: "teste",
        titulo: "teste",
        categoria: "teste",
        artistaId: "1"
        };

        const mockArtista = {
        id: "1",
        nome: "teste",
        nacionalidade: "teste",
        foto: "teste",
        };

        Artista.findByPk.mockResolvedValue(mockArtista);
        Musica.create.mockResolvedValue({});

        await MusicaServices.criar(mockBodyMusica);

        expect(Artista.findByPk).toHaveBeenCalledTimes(1);
        expect(Artista.findByPk).toHaveBeenCalledWith(mockBodyMusica.artistaId);
        expect(Musica.create).toHaveBeenCalledWith(mockBodyMusica);
        expect(Musica.create).toHaveBeenCalledTimes(1);
    });
  });

describe("remover", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test("Recebe um Id => Remove a Música do banco", async () => {
    const mockMusica = {
      id: "1",
      foto: "teste",
      titulo: "teste",
      categoria: "teste",
      destroy: jest.fn().mockResolvedValue(),
    };

    Musica.findByPk.mockResolvedValue(mockMusica);

    await MusicaServices.remover(mockMusica.id);

    expect(Musica.findByPk).toHaveBeenCalledTimes(1);
    expect(mockMusica.destroy).toHaveBeenCalledTimes(1);
  });
});

describe('atualizar', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test("Método recebe um Id e informações => Atualiza a Música correspondente no banco de dados", async () => {
    const mockMusica = {
        id: "1",
        foto: "teste",
        titulo: "teste",
        categoria: "teste"
    };
  
    const novaMusica = {
        id: "1",
        foto: "teste2",
        titulo: "teste2",
        categoria: "teste2"
    };
  
    Musica.findByPk.mockResolvedValue(mockMusica);
    Musica.update.mockResolvedValue();
  
    await MusicaServices.atualizar(novaMusica);
  
    expect(Musica.findByPk).toHaveBeenCalledTimes(1);
    expect(Musica.update).toHaveBeenCalledTimes(1);
    expect(Musica.update).toHaveBeenCalledWith(
      { foto: novaMusica.foto, titulo: novaMusica.titulo, categoria: novaMusica.categoria },
      { where: { id: mockMusica.id } }
    );
  });  
});  