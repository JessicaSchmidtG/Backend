# Verificar versão do node instalado 
node -v
# abrir pasta para criar o arquivo typescript
cd nomeDaPasta
# Gerar arquivo package.json
npm init -y
# Instalar o typescript
npm i -g typescript
# Transpilar o código ts
npx tsc index.ts

# Executar código no console
node index.js
# Adicionar script no package.json
"start": "npx tsc && node ./build/index.js"
# Criar arquivo de configuração (cria arquivo tsconfig.json)
npx tsc --init
# Alterações no tsconfig.json
"target": "es6",
"module": "commonjs",
"sourceMap": true,
"outDir": "./build",
"rootDir": "./src",
"removeComments": true,
"noImplicitAny": true,
# Transpilar arquivo .ts
npx tsc
# Rodar script
npm start
