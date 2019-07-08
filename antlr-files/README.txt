Para executar o programa é necessário possuir o ‘nodejs’ e 'npm' instalados em seu computador, 
no Ubuntu para realizar sua instalação basta executar os seguintes comandos no terminal:

sudo apt update
sudo apt install nodejs npm


Para executar o Makefile para a tarefa ASem2, executar o seguinte comando:
  
  make -f ASem2.Makefile path=caminho/para/arquivo.xpp


Para executar o Makefile para a tarefa GCI2, executar o seguinte comando:
  
  make -f GCI2.Makefile path=caminho/para/arquivo.xpp


Exemplo do uso do Makefile com os programas fornecidos:

  make -f ASem2.Makefile path=programas/programa1.xpp
  make -f ASem2.Makefile path=programas/programa2.xpp
  make -f ASem2.Makefile path=programas/programa3.xpp

  make -f GCI2.Makefile path=programas/programa1.xpp
  make -f GCI2.Makefile path=programas/programa2.xpp
  make -f GCI2.Makefile path=programas/programa3.xpp

