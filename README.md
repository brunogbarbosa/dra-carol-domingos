# Dra. Carol Domingos

Site da Dra. Carol Domingos, cirurgiã-dentista em Goiânia (CRO-GO 14226), adaptado do projeto original do template Premium Vendas V4. Foco em lentes em resina e porcelana, sorrisos naturais e agendamento pelo WhatsApp.

## Desenvolvimento

Node.js 20.9 ou superior.

```sh
npm ci
npm run dev
```

## Verificação

```sh
npm run typecheck
npm run build
```

## Vercel

Importe este repositório na Vercel, selecione o framework **Next.js** e mantenha o diretório raiz em **./**. Instalação: **npm ci**. Build: **npm run build**. Não há variáveis de ambiente obrigatórias. Nenhum projeto ou hospedagem Sites é necessário.

## Conteúdo e identidade

Os dados estão em **data/site.ts**. WhatsApp: **+55 62 98636-8263**. Instagram: **@dracaroldomingos**. O registro, a cidade e a informação de mais de 1.000 sorrisos foram fornecidos na referência do perfil enviada pelo solicitante. Nenhum endereço completo ou formação adicional foi inventado.

Retratos e oito registros de resultados vieram dos anexos enviados pelo solicitante. Foram apenas convertidos para WebP: sem retoques, geração de pacientes ou alterações de resultados. A galeria inclui ampliação, navegação por teclado e comparação para os três registros que contêm antes e depois. A orientação vertical e horizontal dos comparativos é preservada.

O hero desktop usa transição lateral gradual, com a fotografia abaixo do nav transparente e cores naturais no rosto. Os ajustes de transição ficam no breakpoint desktop. Nas demais seções desktop, os retratos são exibidos por inteiro. A versão mobile mantém a composição responsiva do template.

O favicon próprio está em **app/icon.svg** e **app/favicon.ico**, com monograma CD em dourado sobre grafite. A imagem de compartilhamento enviada pelo solicitante está em **public/images/og-carol-domingos.jpg**, configurada para Open Graph e Twitter. Foi otimizada de 2,24 MB para 104 kB, em 1200 × 675 px, preservando a composição completa. O endereço absoluto usa o domínio definido em **data/site.ts** ou o domínio de produção fornecido automaticamente pela Vercel.

## Validação realizada

TypeScript e build de produção aprovados. Página verificada no navegador em 1440, 1920, 768, 390 e 360 px, incluindo nav transparente, fotografia abaixo do nav, retratos desktop sem recorte, ausência de rolagem horizontal, menu mobile, galeria com oito registros, comparação nas duas orientações, foco após fechar a galeria, links de WhatsApp e favicons. Nenhum erro de navegador ou resposta HTTP com erro foi encontrado.
