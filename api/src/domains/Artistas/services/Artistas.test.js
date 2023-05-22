const Artista = require('../models/Artista');
const Musica = require('../../musicas/models/Musica');
const ArtistaServices = require('./ArtistaServices');

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
        const id = "1";

        const mockBodyArtista = {
            id: "1",
            nome: "teste",
            nacionalidade: "teste",
            foto: "teste",
        };

        Artista.findByPk.mockImplementation(() => {
            return mockBodyArtista;
        }); 


        await ArtistaServices.remover(id);

        expect(Artista.findByPk).toHaveBeenCalledTimes(1);
        expect(Artista.destroy).toHaveBeenCalledTimes(1);
    });
});