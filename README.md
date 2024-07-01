# Convert-YT

O Convert-YT é um aplicativo React Native que permite converter vídeos do YouTube em arquivos MP3 e MP4. Utilizando a API do RAPIDAPI no backend, o aplicativo fornece uma interface intuitiva para baixar e converter vídeos facilmente.

![Advertising do Convert-YT](path/to/your/image.png)

## Funcionalidades Principais
- **Conversão de Vídeo para MP3/MP4:** Escolha entre converter e baixar o vídeo como arquivo de música (MP3) ou vídeo (MP4).
- **Interface Intuitiva:** Copie o link do YouTube, selecione a aba de Música ou Vídeo e clique em baixar.
- **Download Rápido:** Utilize a API do RAPIDAPI para conversões rápidas e eficientes.

## Tecnologias Utilizadas

- React Native
- Node.js
- RAPIDAPI (para conversões de vídeo)

## Estrutura do Projeto

- `node_modules/`
- `package.json`
- `README.md`

### Processo de Conversão

A conversão de vídeos do YouTube é gerenciada pela API do RAPIDAPI, garantindo que os vídeos sejam convertidos rapidamente e com alta qualidade.

### Download e Armazenamento

Os arquivos convertidos são baixados diretamente para o dispositivo do usuário, permitindo acesso offline e fácil gerenciamento dos arquivos baixados.

## Como Executar o Projeto

1. Clone o repositório: `git clone https://github.com/everton-lourens/convert-yt.git`
2. Instale as dependências: `npm install`
3. Inicie o aplicativo: `npm run start`
4. Crie a variável de ambiente API_KEY_RAPIDAPI no arquivo .env.

## Desafios e Soluções

- **react-native-ytdl:** A lib nativa `react-native-ytdl` não está mais funcionando, o que me fez pensar em um endpoint em um servidor utilizando a lib não nativa `ytdl-core` para retornar o link para download, ou simplesmente buscar uma API no rapidapi para solucionar o retorno do link para download do youtube.

## Autor

[Everton Lourens](https://github.com/everton-lourens)
