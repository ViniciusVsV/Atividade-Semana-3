const Usuario = require("../models/Usuario");
const UsuarioServices = require("../services/UsuarioServices");
const cargoUsuario = require("../../../../constants/cargoUsuario");

jest.mock("../models/Usuario", () => ({
    create: jest.fn(),
    findByPk: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    destroy: jest.fn(),
    update: jest.fn(),
    getById: jest.fn()
}));

describe("criar", () => {
    beforeEach(() => {
      jest.resetAllMocks();
      jest.clearAllMocks();
    });

    test("Recebe um objeto => Cria um Usuário no banco", async () => {
      const mockBodyUsuario = {
        nome: "teste",
        email: "teste",
        senha: "teste",
        cargo: cargoUsuario.USER
      };

      Usuario.create.mockResolvedValue({});

      await UsuarioServices.criar(mockBodyUsuario);

      expect(Usuario.create).toHaveBeenCalledWith(mockBodyUsuario);
      expect(Usuario.create).toHaveBeenCalledTimes(1);
    });
  });

describe("remover", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test("Recebe um Id => Remove o Usuário do banco", async () => {
    const mockUsuario = {
        id: "1",
        nome: "teste",
        email: "teste",
        senha: "teste",
        cargo: cargoUsuario.USER,
        destroy: jest.fn().mockResolvedValue()
    };

    Usuario.findByPk.mockResolvedValue(mockUsuario);

    await UsuarioServices.remover(mockUsuario.id);

    expect(Usuario.findByPk).toHaveBeenCalledTimes(1);
    expect(mockUsuario.destroy).toHaveBeenCalledTimes(1);
  });
});

describe('atualizar', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test("Método recebe um Id e informações => Atualiza o Usuário correspondente no banco de dados", async () => {
    const mockUsuario = {
        id: "1",
        nome: "teste",
        email: "teste",
        senha: "teste",
        cargo: cargoUsuario.USER
    };
  
    const mockUsuarioAdm = {
        id: "1",
        nome: "teste",
        email: "teste",
        senha: "teste",
        cargo: cargoUsuario.ADMIN
    };

    const novoUsuario = {
        id: "1",
        nome: "teste2",
        email: "teste2",
        senha: "teste2",
        cargo: cargoUsuario.USER
    };
  
    Usuario.findByPk.mockResolvedValue(mockUsuario);
    Usuario.update.mockResolvedValue();
  
    await UsuarioServices.atualizar(novoUsuario);
  
    expect(Usuario.findByPk).toHaveBeenCalledTimes(1);
    expect(Usuario.update).toHaveBeenCalledTimes(1);
    expect(Usuario.update).toHaveBeenCalledWith(
      { nome: novoUsuario.nome, email: novoUsuario.email, senha: novoUsuario.senha},
      { where: { id: mockUsuario.id } }
    );
  });  
});  