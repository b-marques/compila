all :
	@clear
	@echo ==================================================
	@echo ATENÇÃO: O comando \'npm install\' irá instalar
	@echo as dependências para rodar a aplicação localmente,
	@echo os warnings aqui presentes não fazem parte da
	@echo compilação do programa.
	@echo ==================================================
	@echo A compilação/execução do programa é realizada
	@echo pelo comando \'node index.js\'
	@echo ==================================================
	@echo	
	@echo \#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#
	@echo \#\#\#\#\#\# EXECUTANDO NPM INSTALL \#\#\#\#\#\#
	@echo \#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#
	@npm install
	@clear
	@echo \#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#
	@echo \#\#\#\#\#\#\#\#\#\# EXECUTANDO GCI2 \#\#\#\#\#\#\#\#\#
	@echo \#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#
	@node index.js GCI2 $(path)
