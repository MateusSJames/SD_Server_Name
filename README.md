# SD_Server_Name

## Equipe
- Ivillys Oliveira Gomes da Silva, Matrícula: 19110959 
- Mateus Aristides Honorato dos Santos, Matrícula: 19111176

## Requisitos
  - Ferramenta cliente de API REST (Ex: Insomnia)
  - node >= 16.14.2

## Passos para implementar o projeto
- Abra 3 diretórios dentro da pasta src do projeto

- Execute os seguintes comandos, um para cada terminal:
  - node serverName.js
  - node serverCPF.js
  - node serverIMC.js
  
- Utilizando uma ferramenta cliente de API REST, como o Insomnia teste as seguintes rotas:  
  - http://localhost:3000/servico/validar_CPF -> (Rota GET para o serviço validar CPF)
  - http://localhost:3000/servico/calcular_IMC -> (Rota GET para o serviço calcular IMC)
  
- Após receber o endereço URL do serviço, execute os seguintes passos:
  - Copie a URL e execute uma requisição do tipo POST
  - Por ser POST será necessário um body tipo JSON para a requisição
  - Se o serviço for validar CPF, execute esse body:
    {
      "cpf": "XXX.XXX.XXX-XX"
    }
  - Se o serviço for calcular IMC, execute esse body:
    {
	    "peso": XX,
	    "altura": XXX
    }
  

