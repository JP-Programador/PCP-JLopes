import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _pcpjp2021_tb_adm from  "./pcpjp2021_tb_adm.js";
import _pcpjp2021_tb_controle_estoque from  "./pcpjp2021_tb_controle_estoque.js";
import _pcpjp2021_tb_produto from  "./pcpjp2021_tb_produto.js";
import _pcpjp2021_tb_usuario from  "./pcpjp2021_tb_usuario.js";
import _tb_chat from  "./tb_chat.js";
import _tb_login from  "./tb_login.js";
import _tb_matricula from  "./tb_matricula.js";
import _tb_produto from  "./tb_produto.js";
import _tb_sala from  "./tb_sala.js";
import _tb_usuario from  "./tb_usuario.js";

export default function initModels(sequelize) {
  var pcpjp2021_tb_adm = _pcpjp2021_tb_adm.init(sequelize, DataTypes);
  var pcpjp2021_tb_controle_estoque = _pcpjp2021_tb_controle_estoque.init(sequelize, DataTypes);
  var pcpjp2021_tb_produto = _pcpjp2021_tb_produto.init(sequelize, DataTypes);
  var pcpjp2021_tb_usuario = _pcpjp2021_tb_usuario.init(sequelize, DataTypes);
  var tb_chat = _tb_chat.init(sequelize, DataTypes);
  var tb_login = _tb_login.init(sequelize, DataTypes);
  var tb_matricula = _tb_matricula.init(sequelize, DataTypes);
  var tb_produto = _tb_produto.init(sequelize, DataTypes);
  var tb_sala = _tb_sala.init(sequelize, DataTypes);
  var tb_usuario = _tb_usuario.init(sequelize, DataTypes);


  return {
    pcpjp2021_tb_adm,
    pcpjp2021_tb_controle_estoque,
    pcpjp2021_tb_produto,
    pcpjp2021_tb_usuario,
    tb_chat,
    tb_login,
    tb_matricula,
    tb_produto,
    tb_sala,
    tb_usuario,
  };
}
