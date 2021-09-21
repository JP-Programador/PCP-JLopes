
create table PCPJP2021_tb_adm (
  id_adm        int primary key auto_increment,
  ds_codigo     varchar(200),
  ds_senha      varchar(20)
  
);

create table PCPJP2021_tb_usuario (
  id_usuario    int primary key auto_increment,
  nm_usuario    varchar(150),
  ds_email      varchar(100),
  ds_turma      varchar(50),
  nr_chamada    int,
  ds_senha      varchar(20),
  bt_ativo      bool
  
);

create table PCPJP2021_tb_produto (
  id_produto    int primary key auto_increment,
  id_usuario   int,
  nm_produto   varchar(200),
  ds_categoria varchar(200),
  nr_codigo    int,
  qtd_atual    int,
  qtd_minima   int,
  vl_custo     decimal(10,2),
  vl_venda     decimal(10,2),
  dt_cadastro  date,
foreign key (id_usuario) references PCPJP2021_tb_usuario (id_usuario)
);

create table PCPJP2021_tb_controle_estoque (
 id_controle_estoque  int primary key auto_increment,
 id_produto           int,
 qtd_produtos         int,
 ds_movimentacao      varchar(200),
 dt_movimentacao      date,
foreign key (id_produto) references PCPJP2021_tb_produto (id_produto)
);
