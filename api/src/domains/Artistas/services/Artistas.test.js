const Artista = require('../models/Artista');
const Musica = require('../../Musicas/models/Musica');
const ArtistaServices = require ('./ArtistaServices')

jest.mock("../models/Artista", () => ({
    create: jest.fn(),
    findByPk: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    destroy: jest.fn(),
    update: jest.fn(),
}));

jest.mock('../../musicas/models/Musica', () => ({
    findByPk: jest.fn(),
    findAll: jest.fn(),
}));

describe("criar", () => {
    beforeEach(() => {
      jest.resetAllMocks();
      jest.clearAllMocks();
    });

    test("Recebe um objeto => Cria um Artista no banco", async () => {
      const mockBodyArtista = {
        nome: "teste",
        nacionalidade: "teste",
        foto: "teste"
      };

      Artista.create.mockResolvedValue({});

      await ArtistaServices.criar(mockBodyArtista);

      expect(Artista.create).toHaveBeenCalledWith(mockBodyArtista);
      expect(Artista.create).toHaveBeenCalledTimes(1);
    });
  });

describe("remover", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test("Recebe um Id => Remove o Artista do banco", async () => {
    const mockArtista = {
      id: "1",
      nome: "teste",
      nacionalidade: "teste",
      foto: "teste",
      destroy: jest.fn().mockResolvedValue(),
    };

    Artista.findByPk.mockResolvedValue(mockArtista);

    await ArtistaServices.remover(mockArtista.id);

    expect(Artista.findByPk).toHaveBeenCalledTimes(1);
    expect(mockArtista.destroy).toHaveBeenCalledTimes(1);
  });
});

describe('atualizar', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test("Método recebe um Id e informações => Atualiza o artista correspondente no banco de dados", async () => {
    const mockArtista = {
      id: "1",
      nome: 'teste',
      nacionalidade: 'teste',
      foto: 'teste',
    };
  
    const Novoartista = {
      id: "1",
      nome: "2teste",
      nacionalidade: "2teste",
      foto: "2teste"
    };
  
    Artista.findByPk.mockResolvedValue(mockArtista);
    Artista.update.mockResolvedValue();
  
    await ArtistaServices.atualizar(Novoartista);
  
    expect(Artista.findByPk).toHaveBeenCalledTimes(1);
    expect(Artista.update).toHaveBeenCalledTimes(1);
    expect(Artista.update).toHaveBeenCalledWith(
      { nome: Novoartista.nome, nacionalidade: Novoartista.nacionalidade, foto: Novoartista.foto },
      { where: { id: mockArtista.id } }
    );
  });  
});  